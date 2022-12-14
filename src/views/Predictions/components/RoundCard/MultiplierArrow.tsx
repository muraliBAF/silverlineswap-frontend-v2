import React from 'react'
import { ethers } from 'ethers'
import styled, { CSSProperties } from 'styled-components'
import { Box, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { BetPosition } from 'state/types'
import { RoundMultiplierDownArrow, RoundMultiplierUpArrow } from '../../RoundMultiplierArrows'
import EnteredTag from './EnteredTag'

interface MultiplierArrowProps {
  betAmount?: ethers.BigNumber
  multiplier?: string
  hasEntered?: boolean
  hasClaimed?: boolean
  betPosition?: BetPosition
  isDisabled?: boolean
  isActive?: boolean
  isHouse?: boolean
}

const ArrowWrapper = styled.div`
  height: 77px;
  margin: 0 auto;
  width: 170px;

  img {
    filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.3));
  }
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
`

const EnteredTagWrapper = styled.div`
  position: absolute;
  z-index: 10;
`

const getTextColor =
  (fallback = 'textSubtle') =>
  (isActive: boolean, isDisabled: boolean, isHouse: boolean) => {
    if (isDisabled || isHouse) {
      return 'textDisabled'
    }

    if (isActive) {
      return 'white'
    }

    return fallback
  }

const MultiplierArrow: React.FC<MultiplierArrowProps> = ({
  betAmount,
  multiplier,
  hasEntered = false,
  hasClaimed = false,
  betPosition = BetPosition.BULL,
  isDisabled = false,
  isActive = false,
  isHouse = false,
}) => {
  const { t } = useTranslation()
  const upColor = getTextColor('success')(isActive, isDisabled, isHouse)
  const downColor = getTextColor('failure')(isActive, isDisabled, isHouse)
  const textColor = isActive? '#fff': '#03103e'
  const multiplierText = (
    <Box>
      <Flex justifyContent="center" height="14px">
        <Text fontSize="10px" color={textColor} bold lineHeight="14x">
          {multiplier !== undefined ? `${multiplier}x` : '-'}
        </Text>
        <Text fontSize="10px" color={textColor} bold lineHeight="14x" ml="4px">
          {t('Payout')}
        </Text>
      </Flex>
    </Box>
  )

  const getEnteredTag = (position: CSSProperties) => {
    if (!hasEntered) {
      return null
    }
    
    return (
      <EnteredTagWrapper style={position}>
        <EnteredTag isUpTag={position.top === 0 ? true : null} amount={betAmount} hasClaimed={hasClaimed} />
      </EnteredTagWrapper>
    )
  }

  if (betPosition === BetPosition.BEAR) {
    return (
      <Box position="relative">
        <ArrowWrapper>
          <RoundMultiplierDownArrow isActive={isActive} />
          {getEnteredTag({ bottom: 0, right: 0 })}
          <Content style={{paddingTop:20}} >
            {!isDisabled && multiplierText}
            <Text fontWeight={900} fontSize="12px" mb="8px" color={downColor} textTransform="uppercase">
              {t('Down')}
            </Text>
          </Content>
        </ArrowWrapper>
      </Box>
    )
  }

  return (
    <Box position="relative">
      <ArrowWrapper>
        <RoundMultiplierUpArrow isActive={isActive} />
        {getEnteredTag({ top: 0, left: 0 })}
        <Content style={{paddingBottom:14}} >
          <Text fontWeight={900} fontSize="18px" lineHeight="16px" color={upColor} textTransform="uppercase">
            {t('Up')}
          </Text>
          {!isDisabled && multiplierText}
        </Content>
      </ArrowWrapper>
    </Box>
  )
}

export default MultiplierArrow
