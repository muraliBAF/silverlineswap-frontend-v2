import React, { useState, useEffect } from 'react'
import {
  BinanceIcon,
  Box,
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
  Flex,
  IconButton,
  InfoIcon,
  PlayCircleOutlineIcon,
  Text,
  useTooltip,
  WaitIcon,
} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { useAppDispatch } from 'state'
import { Bet, PredictionStatus } from 'state/types'
import { REWARD_RATE } from 'state/predictions/config'
import { useGetCurrentEpoch, useGetIsClaimable, useGetIsClaimableSLN, useGetPredictionsStatus } from 'state/predictions/hooks'
import { fetchLedgerData, fetchNodeHistory, markAsCollected, markAsCollectedSln } from 'state/predictions'
import { getRoundResult, Result } from 'state/predictions/helpers'
import { useTranslation } from 'contexts/Localization'
import { formatBnb, getNetPayout } from './helpers'
import CollectWinningsButton from '../CollectWinningsButton'
import ReclaimPositionButton from '../ReclaimPositionButton'
import BetDetails from './BetDetails'

interface BetProps {
  bet: Bet
}

const StyledBet = styled(Flex).attrs({ alignItems: 'center', p: '16px' })`
  background-color: ${({ theme }) => theme.card.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  cursor: pointer;
  flex-direction: column;
  align-items: end;
`
const StyledBetWrap = styled(Flex).attrs({ alignItems: 'center' })`
  flex: 1;
  width:100%
`
const YourResult = styled(Box)`
  flex: 1;
`

const HistoricalBet: React.FC<BetProps> = ({ bet }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { amount, round } = bet
  const { t } = useTranslation()
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Text bold mb="4px">
        {t('Neither side wins this round')}
      </Text>
      <Text>
        {t(
          'The Locked Price & Closed Price are exactly the same (within 8 decimals), so neither side wins. All funds entered into UP and DOWN positions will go to the weekly SLCT burn.',
        )}
      </Text>
    </>,
    { placement: 'right' },
  )

  const currentEpoch = useGetCurrentEpoch()
  const status = useGetPredictionsStatus()
  const canClaim = useGetIsClaimable(bet.round.epoch);
  const canClaimSln = useGetIsClaimableSLN(bet.round.epoch);
  const isExpired  = bet.round.expired
  const isRefundable  = bet.round.isRefundable

  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const toggleOpen = () => setIsOpen(!isOpen)

  const getRoundColor = (result) => {
    switch (result) {
      case Result.WIN:
        return 'success'
      case Result.LOSE:
        return 'failure'
      case Result.CANCELED:
        return 'warning'
      case Result.TIE:
        return 'textDisabled'
      default:
        return 'text'
    }
  }

  const getRoundPrefix = (result) => {
    if (result === Result.LOSE) {
      return '-'
    }

    if (result === Result.CANCELED) {
      return (<>&asymp;</>)
    }

    if (result === Result.WIN) {
      return '+'
    }

    return ''
  }

  const roundResult = getRoundResult(bet, currentEpoch)
  const resultTextColor = getRoundColor(roundResult)
  const resultTextPrefix = getRoundPrefix(roundResult)
  const isOpenRound = round.epoch === currentEpoch && !bet.round.failed
  const isLiveRound = status === PredictionStatus.LIVE && round.epoch === currentEpoch - 1 && !round.failed

  // Winners get the payout, otherwise the claim what they put it if it was canceled
  const payout = roundResult === Result.WIN ? getNetPayout(bet, REWARD_RATE) : amount

  const renderBetLabel = () => {
    if (isOpenRound) {
      return (
        <Flex alignItems="center">
          <WaitIcon color="primary" mr="6px" width="24px" />
          <Text color="primary" bold>
            {t('Starting Soon')}
          </Text>
        </Flex>
      )
    }

    if (isLiveRound) {
      return (
        <Flex alignItems="center">
          <PlayCircleOutlineIcon color="secondary" mr="6px" width="24px" />
          <Text color="secondary" bold>
            {t('Live Now')}
          </Text>
        </Flex>
      )
    }

    return (
      <>
        <Text fontSize="12px" color="textSubtle">
          {t('Your Result')}
        </Text>
        <Text bold color={resultTextColor} lineHeight={1}>
          {roundResult === Result.CANCELED ? (
            <>
              {/* t('Canceled') */}
             {resultTextPrefix}{formatBnb(payout)}
             </>
          ) : roundResult === Result.TIE ? (
            <>
              {tooltipVisible && tooltip}
              <Flex alignItems="center" ref={targetRef}>
                {t('To Burn')}
                <InfoIcon width="16px" ml="4px" color="secondary" />
              </Flex>
            </>
          ) : (
            `${resultTextPrefix}${formatBnb(payout)}`
          )}
        </Text>
      </>
    )
  }

  const handleSuccess = async () => {
    // We have to mark the bet as claimed immediately because it does not update fast enough
    // dispatch(markAsCollected({ [bet.round.epoch]: true }))
    dispatch(fetchLedgerData({ account, epochs: [bet.round.epoch] }))
    dispatch(fetchNodeHistory({account}))
  }

  return (
    <>
      <StyledBet>
        <StyledBetWrap onClick={toggleOpen} role="button">
          <Box width="48px">
            <Text textAlign="center">
              <Text fontSize="12px" color="textSubtle">
                {t('Round')}
              </Text>
              <Text bold lineHeight={1}>
                {round.epoch.toLocaleString()}
              </Text>
            </Text>
          </Box>
          <YourResult px="24px">{renderBetLabel()}</YourResult>
          {bet.claimed && (
            <BinanceIcon/>
          )}
          {roundResult === Result.WIN  && !bet.claimed && (
            <Flex flexDirection='column' alignItems='flex-end' mr="8px">
              <CollectWinningsButton hasClaimed={!canClaim} isClaimSLN={false} onSuccess={handleSuccess} scale="sm">
                {t('Collect')}
              </CollectWinningsButton>
            </Flex>
          )}
          {bet.claimedSln && (
            <img src='/images/tokens/sln.png' style={{marginLeft:'4px', width:'20px', height:'20px'}} alt="sln"/>
          )}
          {roundResult === Result.LOSE  && !bet.claimedSln && (
            <Flex flexDirection='column' alignItems='flex-end' mr="8px">
              <CollectWinningsButton hasClaimed={!canClaimSln} isClaimSLN onSuccess={handleSuccess} scale="sm">
                {t('Collect')}
              </CollectWinningsButton>
            </Flex>
          )}
          {(roundResult === Result.CANCELED ) && !bet.claimed && (
            <ReclaimPositionButton epoch={bet.round.epoch} hasExpired = {!isRefundable} onSuccess={handleSuccess} scale="sm" mr="8px">
              {t('Refund')} 
            </ReclaimPositionButton>
          )}
          {(!isOpenRound && !isLiveRound) && (
            <IconButton variant="text" scale="sm">
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          )}
        </StyledBetWrap>
        {(
          roundResult === (Result.WIN) || 
          roundResult === (Result.LOSE) || 
          roundResult === (Result.CANCELED)) && 
          isExpired && 
          (!bet.claimed && !bet.claimedSln ) && 
          <Text mt='5px' fontSize='12px' pt='5px' pr='20px'>{t('Max time peroid for claimable funds has expired')}</Text>}
      </StyledBet>
      {isOpen && <BetDetails bet={bet} result={getRoundResult(bet, currentEpoch)} />}
    </>
  )
}

export default HistoricalBet
