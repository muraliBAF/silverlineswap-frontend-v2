import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import maxBy from 'lodash/maxBy'
import merge from 'lodash/merge'
import range from 'lodash/range'
import { BIG_ZERO } from 'utils/bigNumber'
import {
  Bet,
  LedgerData,
  HistoryFilter,
  PredictionsState,
  PredictionStatus,
  ReduxNodeRound,
  BetPosition,
  PredictionUser,
  LeaderboardFilter,
  State,
  PredictionsChartView,
} from 'state/types'
import { getPredictionsContract } from 'utils/contractHelpers'
import { FetchStatus } from 'config/constants/types'
import {
  FUTURE_ROUND_COUNT,
  LEADERBOARD_MIN_ROUNDS_PLAYED,
  PAST_ROUND_COUNT,
  ROUNDS_PER_PAGE,
  ROUND_BUFFER,
} from './config'
import {
  getBetHistory,
  transformBetResponse,
  makeFutureRoundResponse,
  makeRoundData,
  getRoundsData,
  getPredictionData,
  MarketData,
  getLedgerData,
  makeLedgerData,
  serializePredictionsRoundsResponse,
  getClaimStatuses,
  fetchUsersRoundsLength,
  fetchUserRounds,
  getPredictionUsers,
  transformUserResponse,
  LEADERBOARD_RESULTS_PER_PAGE,
  getPredictionUser,
  getRefundable,
  getHasRoundFailed,
  getHasRoundExpired,
} from './helpers'

const initialState: PredictionsState = {
  status: PredictionStatus.INITIAL,
  isLoading: false,
  isHistoryPaneOpen: false,
  isChartPaneOpen: false,
  chartView: PredictionsChartView.Chainlink,
  isFetchingHistory: false,
  historyFilter: HistoryFilter.ALL,
  currentEpoch: 0,
  intervalSeconds: 300,
  minBetAmount: '10000000000000',
  bufferSeconds: 60,
  lastOraclePrice: BIG_ZERO.toJSON(),
  rounds: {},
  history: [],
  totalHistory: 0,
  currentHistoryPage: 1,
  hasHistoryLoaded: false,
  ledgers: {},
  claimableStatuses: {},
  claimableStatusesSln: {},
  leaderboard: {
    selectedAddress: null,
    loadingState: FetchStatus.Idle,
    filters: {
      address: null,
      orderBy: 'netBNB',
      timePeriod: 'all',
    },
    skip: 0,
    hasMoreResults: true,
    addressResults: {},
    results: [],
  },
}

// Thunks
type PredictionInitialization = Pick<
  PredictionsState,
  | 'status'
  | 'currentEpoch'
  | 'intervalSeconds'
  | 'minBetAmount'
  | 'rounds'
  | 'ledgers'
  | 'claimableStatuses'
  | 'claimableStatusesSln'
  | 'bufferSeconds'
>
export const initializePredictions = createAsyncThunk<PredictionInitialization, string>(
  'predictions/initialize',
  async (account = null) => {
    // Static values
    const marketData = await getPredictionData()
    const epochs =
      marketData.currentEpoch > PAST_ROUND_COUNT
        ? range(marketData.currentEpoch, marketData.currentEpoch - PAST_ROUND_COUNT)
        : [marketData.currentEpoch]

    // Round data
    const roundsResponse = await getRoundsData(epochs)
    const initialRoundData: { [key: string]: ReduxNodeRound } = roundsResponse.reduce((accum, roundResponse) => {
      const reduxNodeRound = serializePredictionsRoundsResponse(roundResponse)

      return {
        ...accum,
        [reduxNodeRound.epoch.toString()]: reduxNodeRound,
      }
    }, {})

    const initializedData = {
      ...marketData,
      rounds: initialRoundData,
      ledgers: {},
      claimableStatuses: {},
      claimableStatusesSln: {}
    }

    if (!account) {
      return initializedData
    }

    // Bet data
    const ledgerResponses = await getLedgerData(account, epochs)

    // Claim statuses
    const claimableStatuses = await getClaimStatuses(account, epochs, 'claimableBNB')
    const claimableStatusesSln = await getClaimStatuses(account, epochs, 'claimableSLN')

    return merge({}, initializedData, {
      ledgers: makeLedgerData(account, ledgerResponses, epochs),
      claimableStatuses,
      claimableStatusesSln,
    })
  },
)

export const fetchRound = createAsyncThunk<ReduxNodeRound, number>('predictions/fetchRound', async (epoch) => {
  const predictionContract = getPredictionsContract()
  const response = await predictionContract.rounds(epoch);
  console.log(response)
  // return serializePredictionsRoundsResponse(response)  NOT USED ANYWHERE
  return null
})

export const fetchRounds = createAsyncThunk<{ [key: string]: ReduxNodeRound }, number[]>(
  'predictions/fetchRounds',
  async (epochs) => {
    const rounds = await getRoundsData(epochs)
    return rounds.reduce((accum, round) => {
      if (!round) {
        return accum
      }

      const reduxNodeRound = serializePredictionsRoundsResponse(round)

      return {
        ...accum,
        [reduxNodeRound.epoch.toString()]: reduxNodeRound,
      }
    }, {})
  },
)

export const fetchMarketData = createAsyncThunk<MarketData>('predictions/fetchMarketData', async () => {
  const marketData = await getPredictionData()
  return marketData
})

export const fetchLedgerData = createAsyncThunk<LedgerData, { account: string; epochs: number[] }>(
  'predictions/fetchLedgerData',
  async ({ account, epochs }) => {
    const ledgers = await getLedgerData(account, epochs)
    return makeLedgerData(account, ledgers, epochs)
  },
)

export const fetchClaimableStatuses = createAsyncThunk<
  PredictionsState['claimableStatuses'],
  { account: string; epochs: number[] }
>('predictions/fetchClaimableStatuses', async ({ account, epochs }) => {
  const ledgers = await getClaimStatuses(account, epochs, 'claimableBNB')
  return ledgers
})

export const fetchClaimableStatusesSln = createAsyncThunk<
  PredictionsState['claimableStatusesSln'],
  { account: string; epochs: number[] }
>('predictions/fetchClaimableStatusesSln', async ({ account, epochs }) => {
  const ledgers = await getClaimStatuses(account, epochs, 'claimableSLN')
  return ledgers
})

export const fetchHistory = createAsyncThunk<{ account: string; bets: Bet[] }, { account: string; claimed?: boolean; claimedSln?: boolean }>(
  'predictions/fetchHistory',
  async ({ account, claimed, claimedSln }) => {
    const response = await getBetHistory({
      user: account.toLowerCase(),
      claimed,
      claimedSln
    })
    const bets = response.map(transformBetResponse)

    return { account, bets }
  },
)

export const fetchNodeHistory = createAsyncThunk<
  { bets: Bet[]; claimableStatuses: PredictionsState['claimableStatuses']; claimableStatusesSln: PredictionsState['claimableStatusesSln']; page?: number; totalHistory: number;  },
  { account: string; page?: number }
>('predictions/fetchNodeHistory', async ({ account, page = 1 }, { getState }) => {
  const state = getState();

  const userRoundsLength = await fetchUsersRoundsLength(account)
  const emptyResult = { bets: [], claimableStatuses: {}, claimableStatusesSln:{}, totalHistory: userRoundsLength.toNumber() }
  const maxPages = userRoundsLength.lte(ROUNDS_PER_PAGE) ? 1 : Math.ceil(userRoundsLength.toNumber() / ROUNDS_PER_PAGE)

  if (userRoundsLength.eq(0)) {
    return emptyResult
  }

  if (page > maxPages) {
    return emptyResult
  }

  const cursor = userRoundsLength.sub(ROUNDS_PER_PAGE * page)

  // If the page request is the final one we only want to retrieve the amount of rounds up to the next cursor.
  const size =
    maxPages === page
      ? userRoundsLength
          .sub(ROUNDS_PER_PAGE * (page - 1)) // Previous page's cursor
          .toNumber()
      : ROUNDS_PER_PAGE
  const userRounds = await fetchUserRounds(account, cursor.lt(0) ? 0 : cursor.toNumber(), size)

  if (!userRounds) {
    return emptyResult
  }

  const epochs = Object.keys(userRounds).map((epochStr) => Number(epochStr))
  const roundData = await getRoundsData(epochs)
  const isRefundable = await getRefundable(account, epochs);
  const claimableStatuses = await getClaimStatuses(account, epochs, 'claimableBNB')
  const claimableStatusesSln = await getClaimStatuses(account, epochs, 'claimableSLN')


  // Turn the data from the node into an Bet object that comes from the graph
  const bets: Bet[] = roundData.reduce((accum, round) => {
    const reduxRound = serializePredictionsRoundsResponse(round)
    const ledger = userRounds[reduxRound.epoch]
    const ledgerAmount = ethers.BigNumber.from(ledger.amount)
    const closePrice = round.closePrice ? parseFloat(formatUnits(round.closePrice, 3)) : null
    const lockPrice = round.lockPrice ? parseFloat(formatUnits(round.lockPrice, 3)) : null

    const getRoundPosition = () => {
      if (!closePrice) {
        return null
      }

      if (round.closePrice.eq(round.lockPrice)) {
        return BetPosition.TIE
      }

      return round.closePrice.gt(round.lockPrice) ? BetPosition.BULL : BetPosition.BEAR
    }

    const getCurrentTime = Math.round(Date.now() / 1000);

    return [
      ...accum,
      {
        id: null,
        hash: null,
        amount: parseFloat(formatUnits(ledgerAmount)),
        position: ledger.position,
        claimed: ledger.claimed,
        claimedSln: ledger.SLNclaimed,
        claimedAt: null,
        claimedHash: null,
        claimedBNB: 0,
        claimedNetBNB: 0,
        createdAt: null,
        updatedAt: null,
        block: 0,
        round: {
          id: null,
          epoch: round.epoch.toNumber(),
          failed: getHasRoundFailed(reduxRound.oracleCalled, reduxRound.closeTimestamp, 60),
          isRefundable: isRefundable[round.epoch.toNumber()],
          startBlock: null,
          startAt: round.startTimestamp ? round.startTimestamp.toNumber() : null,
          startHash: null,
          lockAt: round.lockTimestamp ? round.lockTimestamp.toNumber() : null,
          lockBlock: null,
          lockPrice,
          lockHash: null,
          lockRoundId: round.lockOracleId ? round.lockOracleId.toString() : null,
          closeRoundId: round.closeOracleId ? round.closeOracleId.toString() : null,
          closeHash: null,
          closeAt: round.closeTimestamp ? round.closeTimestamp.toNumber() : null,
          closePrice,
          closeBlock: null,
          totalBets: 0,
          totalAmount: parseFloat( formatUnits(round.bullAmount.add(round.bearAmount)) ),
          bullBets: 0,
          bullAmount: parseFloat(formatUnits(round.bullAmount)),
          bearBets: 0,
          bearAmount: parseFloat(formatUnits(round.bearAmount)),
          position: getRoundPosition(),
          epoch_valid_till: round.epoch_valid_till ? round.epoch_valid_till.toNumber() : null , 
          expired : (getCurrentTime > round.epoch_valid_till.toNumber() || (getCurrentTime < round.closeTimestamp.toNumber() && round.closeTimestamp.toNumber() !== 0))
          // expired : getHasRoundExpired(reduxRound.epoch_valid_till, reduxRound.closeTimestamp, 60)
        },
      },
    ]
  }, [])
  return { bets, claimableStatuses, claimableStatusesSln, page, totalHistory: userRoundsLength.toNumber() }
})

// Leaderboard
export const filterLeaderboard = createAsyncThunk<{ results: PredictionUser[] }, { filters: LeaderboardFilter }>(
  'predictions/filterLeaderboard',
  async ({ filters }) => {
    const usersResponse = await getPredictionUsers({
      skip: 0,
      orderBy: filters.orderBy,
      where: { totalBets_gte: LEADERBOARD_MIN_ROUNDS_PLAYED, [`${filters.orderBy}_gt`]: 0 },
    })

    return { results: usersResponse.map(transformUserResponse) }
  },
)

export const fetchAddressResult = createAsyncThunk<
  { account: string; data: PredictionUser },
  string,
  { rejectValue: string }
>('predictions/fetchAddressResult', async (account, { rejectWithValue }) => {
  const userResponse = await getPredictionUser(account)

  if (!userResponse) {
    return rejectWithValue(account)
  }

  return { account, data: transformUserResponse(userResponse) }
})

export const filterNextPageLeaderboard = createAsyncThunk<
  { results: PredictionUser[]; skip: number },
  number,
  { state: State }
>('predictions/filterNextPageLeaderboard', async (skip, { getState }) => {
  const state = getState()
  const usersResponse = await getPredictionUsers({
    skip,
    orderBy: state.predictions.leaderboard.filters.orderBy,
    where: { totalBets_gte: LEADERBOARD_MIN_ROUNDS_PLAYED, [`${state.predictions.leaderboard.filters.orderBy}_gt`]: 0 },
  })

  return { results: usersResponse.map(transformUserResponse), skip }
})

export const predictionsSlice = createSlice({
  name: 'predictions',
  initialState,
  reducers: {
    setLeaderboardFilter: (state, action: PayloadAction<Partial<LeaderboardFilter>>) => {
      state.leaderboard.filters = {
        ...state.leaderboard.filters,
        ...action.payload,
      }

      // Anytime we filters change we need to reset back to page 1
      state.leaderboard.skip = 0
      state.leaderboard.hasMoreResults = true
    },
    setHistoryPaneState: (state, action: PayloadAction<boolean>) => {
      state.isHistoryPaneOpen = action.payload
      state.historyFilter = HistoryFilter.ALL
    },
    setChartPaneState: (state, action: PayloadAction<boolean>) => {
      state.isChartPaneOpen = action.payload
    },
    setChartView: (state, action: PayloadAction<PredictionsChartView>) => {
      state.chartView = action.payload
    },
    setHistoryFilter: (state, action: PayloadAction<HistoryFilter>) => {
      state.historyFilter = action.payload
    },
    setLastOraclePrice: (state, action: PayloadAction<string>) => {
      state.lastOraclePrice = action.payload
    },
    markAsCollected: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
      state.claimableStatuses = { ...state.claimableStatuses, ...action.payload }
    },
    markAsCollectedSln: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
      state.claimableStatusesSln = { ...state.claimableStatusesSln, ...action.payload }
    },
    setSelectedAddress: (state, action: PayloadAction<string>) => {
      state.leaderboard.selectedAddress = action.payload
    },
  },
  extraReducers: (builder) => {
    // Leaderboard filter
    builder.addCase(filterLeaderboard.pending, (state) => {
      // Only mark as loading if we come from Fetched. This allows initialization.
      if (state.leaderboard.loadingState === FetchStatus.Fetched) {
        state.leaderboard.loadingState = FetchStatus.Fetched
      }
    })
    builder.addCase(filterLeaderboard.fulfilled, (state, action) => {
      const { results } = action.payload

      state.leaderboard.loadingState = FetchStatus.Fetched
      state.leaderboard.results = results

      if (results.length < LEADERBOARD_RESULTS_PER_PAGE) {
        state.leaderboard.hasMoreResults = false
      }

      // Populate address results to reduce calls
      state.leaderboard.addressResults = {
        ...state.leaderboard.addressResults,
        ...results.reduce((accum, result) => {
          return {
            ...accum,
            [result.id]: result,
          }
        }, {}),
      }
    })

    // Leaderboard account result
    builder.addCase(fetchAddressResult.pending, (state) => {
      state.leaderboard.loadingState = FetchStatus.Fetching
    })
    builder.addCase(fetchAddressResult.fulfilled, (state, action) => {
      const { account, data } = action.payload
      state.leaderboard.loadingState = FetchStatus.Fetched
      state.leaderboard.addressResults[account] = data
    })
    builder.addCase(fetchAddressResult.rejected, (state, action) => {
      state.leaderboard.loadingState = FetchStatus.Fetched // TODO: should handle error
      state.leaderboard.addressResults[action.payload] = null
    })

    // Leaderboard next page
    builder.addCase(filterNextPageLeaderboard.pending, (state) => {
      state.leaderboard.loadingState = FetchStatus.Fetching
    })
    builder.addCase(filterNextPageLeaderboard.fulfilled, (state, action) => {
      const { results, skip } = action.payload

      state.leaderboard.loadingState = FetchStatus.Fetched
      state.leaderboard.results = [...state.leaderboard.results, ...results]
      state.leaderboard.skip = skip

      if (results.length < LEADERBOARD_RESULTS_PER_PAGE) {
        state.leaderboard.hasMoreResults = false
      }
    })

    // Claimable statuses
    builder.addCase(fetchClaimableStatuses.fulfilled, (state, action) => {
      state.claimableStatuses = merge({}, state.claimableStatuses, action.payload)
    })

    // Claimable statuses
    builder.addCase(fetchClaimableStatusesSln.fulfilled, (state, action) => {
      state.claimableStatusesSln = merge({}, state.claimableStatusesSln, action.payload)
    })

    // Ledger (bet) records
    builder.addCase(fetchLedgerData.fulfilled, (state, action) => {
      state.ledgers = merge({}, state.ledgers, action.payload)
    })

    // Get static market data
    builder.addCase(fetchMarketData.fulfilled, (state, action) => {
      const { status, currentEpoch, intervalSeconds, minBetAmount } = action.payload

      // If the round has change add a new future round
      if (state.currentEpoch !== currentEpoch) {
        const newestRound = maxBy(Object.values(state.rounds), 'epoch')
        const futureRound = makeFutureRoundResponse(
          newestRound.epoch + 1,
          newestRound.startTimestamp + intervalSeconds + ROUND_BUFFER,
        )

        state.rounds[futureRound.epoch] = futureRound
      }

      state.status = status
      state.currentEpoch = currentEpoch
      state.intervalSeconds = intervalSeconds
      state.minBetAmount = minBetAmount
    })

    // Initialize predictions
    builder.addCase(initializePredictions.fulfilled, (state, action) => {
      const { status, currentEpoch, intervalSeconds, bufferSeconds, rounds, claimableStatuses, claimableStatusesSln, ledgers } =
        action.payload
      const futureRounds: ReduxNodeRound[] = []
      const currentRound = rounds[currentEpoch]

      for (let i = 1; i <= FUTURE_ROUND_COUNT; i++) {
        futureRounds.push(makeFutureRoundResponse(currentEpoch + i, currentRound.startTimestamp + intervalSeconds * i))
      }

      return {
        ...state,
        status,
        currentEpoch,
        intervalSeconds,
        bufferSeconds,
        claimableStatuses,
        claimableStatusesSln,
        ledgers,
        rounds: merge({}, rounds, makeRoundData(futureRounds)),
      }
    })

    // Get single round
    builder.addCase(fetchRound.fulfilled, (state, action) => {
      state.rounds = merge({}, state.rounds, {
        [action.payload.epoch.toString()]: action.payload,
      })
    })

    // Get multiple rounds
    builder.addCase(fetchRounds.fulfilled, (state, action) => {
      state.rounds = merge({}, state.rounds, action.payload)
    })

    // Show History
    builder.addCase(fetchHistory.pending, (state) => {
      state.isFetchingHistory = true
    })
    builder.addCase(fetchHistory.rejected, (state) => {
      state.isFetchingHistory = false
    })
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      const { account, bets } = action.payload

      state.isFetchingHistory = false
      state.history[account] = merge([], state.history[account] ?? [], bets)
    })

    // History from the node
    builder.addCase(fetchNodeHistory.pending, (state) => {
      state.isFetchingHistory = true
    })
    builder.addCase(fetchNodeHistory.rejected, (state) => {
      state.isFetchingHistory = false
    })
    builder.addCase(fetchNodeHistory.fulfilled, (state, action) => {
      const { bets, claimableStatuses, claimableStatusesSln, page, totalHistory } = action.payload

      state.isFetchingHistory = false
      state.history = page === 1 ? bets : [...state.history, ...bets]
      state.claimableStatuses = { ...state.claimableStatuses, ...claimableStatuses }
      state.claimableStatusesSln = { ...state.claimableStatusesSln, ...claimableStatusesSln }
      state.hasHistoryLoaded = state.history.length === totalHistory || bets.length === 0
      state.totalHistory = totalHistory
      state.currentHistoryPage = page
    })
  },
})

// Actions
export const {
  setChartPaneState,
  setChartView,
  setHistoryFilter,
  setHistoryPaneState,
  setLastOraclePrice,
  markAsCollected,
  markAsCollectedSln,
  setLeaderboardFilter,
  setSelectedAddress,
} = predictionsSlice.actions

export default predictionsSlice.reducer

