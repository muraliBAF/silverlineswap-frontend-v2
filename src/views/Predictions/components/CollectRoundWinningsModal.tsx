import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  ModalContainer,
  ModalBody,
  ModalTitle,
  InjectedModalProps,
  Button,
  AutoRenewIcon,
  TrophyGoldIcon,
  Text,
  Flex,
  Heading,
  Box,
  ModalCloseButton,
  Skeleton,
} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { REWARD_RATE } from 'state/predictions/config'
import { fetchNodeHistory, markAsCollected, markAsCollectedSln } from 'state/predictions'
import { Bet } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { useBNBBusdPrice } from 'hooks/useBUSDPrice'
import useToast from 'hooks/useToast'
import { usePredictionsContract } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { ToastDescriptionWithTx } from 'components/Toast'
import { useGetHistory, useGetIsFetchingHistory } from 'state/predictions/hooks'
import { multiplyPriceByAmount } from 'utils/prices'
import { formatNumber } from 'utils/formatBalance'
import { logError } from 'utils/sentry'
import { getPayout } from './History/helpers'

interface CollectRoundWinningsModalProps extends InjectedModalProps {
  onSuccess?: () => Promise<void>
  isClaimSLN?: boolean
}

const Modal = styled(ModalContainer)`
  overflow: visible;
`

const BunnyDecoration = styled.div`
  position: absolute;
  top: -113px; // line up bunny at the top of the modal
  left: 0px;
  text-align: center;
  width: 100%;
  z-index: 5;
  img{
    width:66%
  }
`

const ModalHeader=styled.div
`align-items: center;
background: transparent;
border-bottom: 1px solid #383241;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
padding: 12px 24px;
z-index:6;`

interface ClaimableRounds {
  epochs: number[]
  total: number
}

const calculateClaimableRounds = (history, isClaimSLN): ClaimableRounds => {
  if (!history) {
    return { epochs: [], total: 0 }
  }

  return history.reduce(
    (accum: ClaimableRounds, bet: Bet) => {
        if (!bet.claimed && !bet.claimedSln && (!isClaimSLN ? bet.position === bet.round.position : bet.position !== bet.round.position) && !bet.round.expired) {
          const betPayout = !isClaimSLN ? getPayout(bet, REWARD_RATE) : (((bet.amount)/100) * bet.round.closePrice) / 0.0013

          return {
            ...accum,
            epochs: [...accum.epochs, bet.round.epoch],
            total: accum.total + betPayout,
          }
        }
      return accum
    },
    { epochs: [], total: 0 },
  )
}

const CollectRoundWinningsModal: React.FC<CollectRoundWinningsModalProps> = ({ onDismiss, onSuccess, isClaimSLN }) => {
  const [isPendingTx, setIsPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const { callWithGasPrice } = useCallWithGasPrice()
  const predictionsContract = usePredictionsContract()
  const bnbBusdPrice = useBNBBusdPrice()
  const dispatch = useAppDispatch()
  const isLoadingHistory = useGetIsFetchingHistory()
  const history = useGetHistory()

  const { epochs, total } = calculateClaimableRounds(history, isClaimSLN)
  const totalBnb = multiplyPriceByAmount(bnbBusdPrice, total)

  useEffect(() => {
    // Fetch history if they have not opened the history pane yet
    if (history.length === 0) {
      dispatch(fetchNodeHistory({ account }))
    }
  }, [account, history, dispatch])

  const handleClick = async () => {
    try {
      const tx = await callWithGasPrice(predictionsContract, (!isClaimSLN ? 'claim' : 'claimSLN'), [epochs])
      setIsPendingTx(true)
      const receipt = await tx.wait()

      // Immediately mark rounds as claimed
      if(!isClaimSLN){
        dispatch(
          markAsCollected(
            epochs.reduce((accum, epoch) => {
              return { ...accum, [epoch]: false }
            }, {}),
          ),
        )
      }
      else{
        dispatch(
          markAsCollectedSln(
            epochs.reduce((accum, epoch) => {
              return { ...accum, [epoch]: false }
            }, {}),
          ),
        )
      }

      if (onSuccess) {
        await onSuccess()
      }

      onDismiss()
      setIsPendingTx(false)
      toastSuccess(
        t('Winnings collected!'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your prizes have been sent to your wallet')}
        </ToastDescriptionWithTx>,
      )
    } catch (error) {
      console.error('Unable to claim winnings', error)
      logError(error)
      toastError(
        t('Error'),
        (error as any)?.data?.message ||
          t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
      )
    } finally {
      setIsPendingTx(false)
    }
  }

  return (
    <Modal minWidth="288px" position="relative" mt="124px">
      <BunnyDecoration>
        <img src="/images/decorations/prize-bunny-winner.png" alt="bunny decoration" height="116px" width="135px" />
      </BunnyDecoration>
      <ModalHeader>
        <ModalTitle>
          <Heading>{t('Collect Winnings')}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody p="24px">
        <img src="/images/trophy/trophy.png"  width="96px" height="96px" style={{margin: '0 auto 25px'}} alt="trophy" />
        <Flex alignItems="start" justifyContent="space-between" mb="8px">
          <Text>{t('Collecting')}</Text>
          <Box style={{ textAlign: 'right' }}>
            <Text>{`${formatNumber(total, 0, 4)} ${isClaimSLN ? 'SLN' : 'BNB'}`}</Text>
            <Text fontSize="12px" color="textSubtle">
              {/* {`~$${totalBnb.toFixed(2)}`} */}
              {!isClaimSLN ? `~$${totalBnb.toFixed(2)}` : `~$${(total * 0.0013).toFixed(4)}`}
            </Text>
          </Box>
        </Flex>
        <Flex alignItems="start" justifyContent="center" mb="24px">
          {isLoadingHistory ? (
            <Skeleton height="21" width="140px" />
          ) : (
            <Text color="textSubtle" fontSize="14px">
              {epochs.length === 1
                ? t('From round %round%', { round: epochs[0] })
                : t('From rounds %rounds%', { rounds: epochs.join(', ') })}
            </Text>
          )}
        </Flex>
        <Button
          width="100%"
          mb="8px"
          onClick={handleClick}
          isLoading={isPendingTx || isLoadingHistory}
          endIcon={isPendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
        >
          {t('Confirm')}
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default CollectRoundWinningsModal
