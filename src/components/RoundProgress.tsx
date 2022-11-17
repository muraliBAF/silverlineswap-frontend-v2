import React from 'react'
import { Progress, ProgressProps } from '@pancakeswap/uikit'
import styled from "styled-components";

interface RoundProgressProps extends ProgressProps {
  lockTimestamp: number
  closeTimestamp: number
}

const RoundProgress: React.FC<RoundProgressProps> = ({ lockTimestamp, closeTimestamp, ...props }) => {
  const startMs = lockTimestamp * 1000
  const endMs = closeTimestamp * 1000
  const now = Date.now()
  const rawProgress = ((now - startMs) / (endMs - startMs)) * 100
  const progress = rawProgress <= 100 ? rawProgress : 100

  const BarWrap = styled.div`
    position: relative;
    background-color : #eeeaf4;
    width: 100%;
    height:6px;
  `
  
  const Bar = styled.div`
  position: absolute;
  height: 5px;
  top: 0px;
  left: 0;
  background-color: #be0067;
  transition: width 200ms ease;
`;

  return (
  <BarWrap>
    <Bar style={{width:`${progress}%`}}/>
  </BarWrap>)
}

export default RoundProgress
