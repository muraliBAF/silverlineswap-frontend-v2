import React from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, LinkExternal, Flex, Svg, Image, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div<{ $isSide: boolean }>`
  width: 100%;
  height: ${({ $isSide }) => ($isSide ? '100%' : 'auto')};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-right: ${({ $isSide }) => ($isSide ? '62px' : '0px')};

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: ${({ $isSide }) => ($isSide ? 'column' : 'row')};
  }
`

const BubbleWrapper = styled(Flex)`
  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
    transition: background-color 0.2s, opacity 0.2s;
  }

  &:hover {
    svg {
      opacity: 0.65;
    }
  }

  &:active {
    svg {
      opacity: 0.85;
    }
  }
`

type FooterVariant = 'default' | 'side'

const Footer: React.FC<{ variant?: FooterVariant }> = ({ variant = 'default' }) => {
  const { t } = useTranslation()
  const isSide = variant === 'side'
  return (
    <Wrapper $isSide={isSide}>
      {/* <Flex flexDirection={isSide ? 'column' : ['column', 'column', 'row']} alignItems="center">
        <ButtonMenu variant="subtle" scale="sm" activeIndex={0}>
         <ButtonMenuItem>V2</ButtonMenuItem>
         <ButtonMenuItem as="a" href="https://v1exchange.pancakeswap.finance/#/">
          {t('V1 (old)')}
         </ButtonMenuItem>
        </ButtonMenu>
        <LinkExternal
          id="ercBridge"
          href="https://docs.binance.org/smart-chain/guides/cross-chain.html"
          ml={[0, 0, '40px']}
          mt={['20px', '20px', isSide ? '20px' : 0]}
          mb={['8px', '8px', 0]}
        >
          {t('Convert ERC-20 to BEP-20')}
        </LinkExternal>
      </Flex> */}
      {isSide && <Flex flexGrow={1} />}
      <Flex
        flexGrow={isSide ? 0 : 1}
        alignItems="center"
        width={['100%', '100%', '100%', isSide ? '100%' : 'auto']}
        justifyContent={['center', 'center', 'center', 'flex-end']}
      >
        <BubbleWrapper>
          <Button
            id="clickExchangeHelp"
            as="a"
            external
            href="https://docs.silverlineswap.finance/click-for-help"
            variant="primary"
          >
            {t('Need help ?')}
          </Button>
        </BubbleWrapper>
        <Image src="/images/help.png" alt="Get some help" width={68} height={68} style={{marginLeft:'22px'}} />
      </Flex>
    </Wrapper>
  )
}

export default Footer
