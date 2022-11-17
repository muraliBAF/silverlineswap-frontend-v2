import React from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import { TabToggleGroup, TabToggle } from 'components/TabToggle'
import { setChartView } from 'state/predictions'
import { useAppDispatch } from 'state'
import { useChartView } from 'state/predictions/hooks'
import { PredictionsChartView } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import Menu from './components/Menu'
import TradingView from './components/TradingView'
import ChainLinkChart from './components/ChainlinkChart'




const MenuWrapper = styled.div`
  flex: none;
`

const ChartWrapper = styled.div`
  flex: 1;
  height: 100%;
`

const Chart = () => {
  const chartView = useChartView()
  const dispatch = useAppDispatch()
  const { t } = useTranslation();
  return (
    <Flex flexDirection="column" height="100%">
      <MenuWrapper>
        <Menu />
        <div style={{ height: 'min-content' }}>
          <TabToggleGroup>
            <TabToggle
              isActive={chartView === PredictionsChartView.TradingView}
              onClick={() => dispatch(setChartView(PredictionsChartView.TradingView))}
            >
              TradingView  {t('Chart')}
            </TabToggle>
            <TabToggle
              isActive={chartView === PredictionsChartView.Chainlink}
              onClick={() => dispatch(setChartView(PredictionsChartView.Chainlink))}
            >
              Chainlink {t('Chart')}
            </TabToggle>
          </TabToggleGroup>
        </div>
      </MenuWrapper>
      <ChartWrapper>
        {chartView === PredictionsChartView.TradingView ? <TradingView /> : <ChainLinkChart pt="8px" isMobile />}
      </ChartWrapper>
    </Flex>
  )
}

export default Chart
