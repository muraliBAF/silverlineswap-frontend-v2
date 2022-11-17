import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Split,{ SplitInstance } from 'split-grid'
import { Flex, Button, ChartIcon } from '@pancakeswap/uikit'
import debounce from 'lodash/debounce'
import delay from 'lodash/delay'
import { useAppDispatch } from 'state'
import { useGetPredictionsStatus, useIsChartPaneOpen, useIsHistoryPaneOpen, useChartView } from 'state/predictions/hooks'
import { setChartPaneState, setChartView } from 'state/predictions'
import { PredictionStatus, PredictionsChartView } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { TabToggle } from 'components/TabToggle'
import { TradingViewLabel } from 'components/TradingView'
import TradingView from './components/TradingView'
import { ErrorNotification, PauseNotification } from './components/Notification'
import History from './History'
import Positions from './Positions'
import ChainLinkChart from './components/ChainlinkChart'



// The value to set the chart when the user clicks the chart tab at the bottom
const GRID_TEMPLATE_ROW = '1.2fr 24px .8fr'

const ExpandButtonGroup = styled(Flex)`
  bottom: 25px;
  left: 32px;
  position: absolute;
  display: none;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 24px 24px 0 0;
  z-index: 50;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: inline-flex;
  }
`

const SplitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 24px 0;
  flex: 1;
  overflow: hidden;
`

const ChartPane = styled.div`
  overflow: hidden;
  position: relative;
`

const HistoryPane = styled.div<{ isHistoryPaneOpen: boolean }>`
  flex: none;
  overflow: hidden;
  transition: width 200ms ease-in-out;
  width: ${({ isHistoryPaneOpen }) => (isHistoryPaneOpen ? '384px' : 0)};
`

const StyledDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    height: calc(100vh - 169px);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% -40px;
  }
`

const PositionPane = styled.div`
  align-items: center;
  display: flex;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  & > div {
    flex: 1;
    overflow: hidden;
  }
`

const Gutter = styled.div<{ isChartPaneOpen?: boolean }>`
  background:  #42008E;
  cursor: ${({ isChartPaneOpen }) => (isChartPaneOpen ? 'row-resize' : 'pointer')};
  height: 25px;
  position: relative;

  &:before {
    background-color: ${({ theme }) => theme.colors.textSubtle};
    border-radius: 8px;
    content: '';
    height: 4px;
    left: 50%;
    margin-left: -32px;
    position: absolute;
    top: 10px;
    width: 64px;
  }
`

const PageHeader = styled.div`
  background: #2E076F;
  color: #00ffed;
  padding: 20px 20px;
  font-weight: 600;
  text-align: center;

  &:after {
    width: 160px;
    background: #00ffed;
    height: 3px;
    border-radius: 3px;
    content: '';
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Desktop: React.FC = () => {
  const splitWrapperRef = useRef<HTMLDivElement>()
  const chartRef = useRef<HTMLDivElement>()
  const gutterRef = useRef<HTMLDivElement>()
  const isHistoryPaneOpen = useIsHistoryPaneOpen()
  const isChartPaneOpen = useIsChartPaneOpen()
  const chartView = useChartView()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const status = useGetPredictionsStatus()

  const openChartPane = () => {
    splitWrapperRef.current.style.transition = 'grid-template-rows 150ms'
    splitWrapperRef.current.style.gridTemplateRows = GRID_TEMPLATE_ROW

    // Purely comedic: We only want to animate if we are clicking the open chart button
    // If we keep the transition on the resizing becomes very choppy
    delay(() => {
      splitWrapperRef.current.style.transition = ''
    }, 150)

    dispatch(setChartPaneState(true))
  }
  const splitInstance = useRef<SplitInstance>()

  useEffect(() => {
    const { height } = chartRef.current.getBoundingClientRect()

    if (height > 0 && !isChartPaneOpen) {
      dispatch(setChartPaneState(true))
    }
  }, [isChartPaneOpen, dispatch])

  // unmount
  useEffect(() => {
    return () => {
      dispatch(setChartPaneState(false))
    }
  }, [dispatch])

  useEffect(() => {
    const threshold = 100
    const handleDrag = debounce(() => {
      const { height } = chartRef.current.getBoundingClientRect()

      // If the height of the chart pane goes below the "snapOffset" threshold mark the chart pane as closed
      dispatch(setChartPaneState(height > threshold))
    }, 50)

    if (isChartPaneOpen && !splitInstance.current) {
      splitInstance.current = Split({
        dragInterval: 1,
        snapOffset: threshold,
        onDrag: handleDrag,
        rowGutters: [
          {
            track: 1,
            element: gutterRef.current,
          },
        ],
      })
    } else if (!isChartPaneOpen && splitInstance.current) {
      splitInstance.current?.destroy()
      splitInstance.current = undefined
    }

    return () => {
      splitInstance.current?.destroy()
      splitInstance.current = undefined
    }
  }, [gutterRef, chartRef, dispatch, isChartPaneOpen])

  return (
    <>
      <PageHeader>
        <div>SPARC (BETA)</div>
      </PageHeader>
      
      <StyledDesktop style={{backgroundImage:"url('/images/predictions/bg.png')"}} >
        <SplitWrapper ref={splitWrapperRef}>
          <PositionPane>
            {status === PredictionStatus.ERROR && <ErrorNotification />}
            {status === PredictionStatus.PAUSED && <PauseNotification />}
            {status === PredictionStatus.LIVE && <Positions />}
          </PositionPane>
          
          <Gutter 
           ref={gutterRef}
           isChartPaneOpen={isChartPaneOpen}
           onClick={() => {
             openChartPane()
           }}
          >
            <ExpandButtonGroup>
              <TabToggle
                height="42px"
                as={Button}
                style={{ whiteSpace: 'nowrap', alignItems: 'center' }}
                isActive={chartView === PredictionsChartView.TradingView}
                onMouseDown={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  dispatch(setChartView(PredictionsChartView.TradingView))
                }}
              >
                {chartView === PredictionsChartView.TradingView && <ChartIcon mr="10px" />} TradingView {t('Chart')}
              </TabToggle>
              <TabToggle
                as={Button}
                height="42px"
                style={{ whiteSpace: 'nowrap', alignItems: 'center' }}
                isActive={chartView === PredictionsChartView.Chainlink}
                onMouseDown={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  dispatch(setChartView(PredictionsChartView.Chainlink))
                }}
              >
                {chartView === PredictionsChartView.Chainlink && <ChartIcon mr="10px" />} Chainlink {t('Chart')}
              </TabToggle>
            </ExpandButtonGroup>
            <TradingViewLabel justifyContent="flex-end" symbol="BNBUSDT" />
          </Gutter>
          <ChartPane ref={chartRef}>
            {isChartPaneOpen && (chartView === PredictionsChartView.TradingView ? <TradingView /> : <ChainLinkChart/>)}
          </ChartPane>
        </SplitWrapper>
        <HistoryPane isHistoryPaneOpen={isHistoryPaneOpen}>
          <History />
        </HistoryPane>
      </StyledDesktop>
    </>
  )
}

export default Desktop
