import { FarmAuction, Predictions } from 'config/abi/types'
import ethers, { ContractFunction } from 'ethers'

export type MultiCallResponse<T> = T | null

// Predictions
export type PredictionsClaimableResponse = boolean

export interface PredictionsLedgerResponse {
  position: 0 | 1
  amount: ethers.BigNumber
  claimed: boolean,
  SLNclaimed?: boolean
}

export interface PredictionsRoundsResponse {
  epoch: ethers.BigNumber
  epoch_valid_till: ethers.BigNumber //eslint-disable-line camelcase
  startTimestamp: ethers.BigNumber
  lockTimestamp: ethers.BigNumber
  closeTimestamp: ethers.BigNumber
  lockPrice: ethers.BigNumber
  closePrice: ethers.BigNumber
  lockOracleId: ethers.BigNumber
  closeOracleId: ethers.BigNumber
  totalAmount: ethers.BigNumber
  bullAmount: ethers.BigNumber
  bearAmount: ethers.BigNumber
  rewardBaseCalAmount: ethers.BigNumber
  rewardAmount: ethers.BigNumber
  oracleCalled: boolean,
  expired: boolean
}

export interface PredictionsRoundIsRefundResponse {
  refundableRound: {
    [key: string]: boolean
  }
}

// [rounds, ledgers, count]
export type PredictionsGetUserRoundsResponse = [ethers.BigNumber[], PredictionsLedgerResponse[], ethers.BigNumber]

export type PredictionsGetUserRoundsLengthResponse = ethers.BigNumber

export interface PredictionsContract extends Omit<Predictions, 'getUserRounds' | 'ledger'> {
  getUserRounds: ContractFunction<PredictionsGetUserRoundsResponse>
  ledger: ContractFunction<PredictionsLedgerResponse>
}

// Farm Auction

// Note: slightly different from AuctionStatus used throughout UI
export enum FarmAuctionContractStatus {
  Pending,
  Open,
  Close,
}

export interface AuctionsResponse {
  status: FarmAuctionContractStatus
  startBlock: ethers.BigNumber
  endBlock: ethers.BigNumber
  initialBidAmount: ethers.BigNumber
  leaderboard: ethers.BigNumber
  leaderboardThreshold: ethers.BigNumber
}

export interface BidsPerAuction {
  account: string
  amount: ethers.BigNumber
}

type GetWhitelistedAddressesResponse = [
  {
    account: string
    lpToken: string
    token: string
  }[],
  ethers.BigNumber,
]

export interface FarmAuctionContract extends Omit<FarmAuction, 'auctions'> {
  auctions: ContractFunction<AuctionsResponse>
  getWhitelistedAddresses: ContractFunction<GetWhitelistedAddressesResponse>
}

export class Contract {
  // The meta-class properties
  readonly [ key: string ]: ContractFunction | any;
}

// generic contract types

export type MaybeContract<C extends Contract = Contract> = C | null | undefined
export type ContractMethodName<C extends Contract = Contract> = keyof C['callStatic'] & string

export type ContractMethodParams<
  C extends Contract = Contract,
  N extends ContractMethodName<C> = ContractMethodName<C>,
> = Parameters<C['callStatic'][N]>