import React from 'react'
import styled from 'styled-components'
import {CardBody, Heading } from '@pancakeswap/uikit'

interface NotificationProps {
  title: string
}

// const BunnyDecoration = styled.div`
//   position: absolute;
//   top: -130px; // line up bunny at the top of the modal
//   left: 0px;
//   text-align: center;
//   width: 100%;
// `

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
`
const Card = styled.div`
  z-index: 9;
  background: rgb(86,48,126);
  border-radius: 24px;
  color: #F4EEFF;
  overflow: hidden;
  position: relative;
  padding: 1px 1px 3px 1px;
 `
const CardWrapper = styled.div`
  position: relative;
  width: 320px;
  z-index:9;
`

const BunnyDecoration = styled.div`
  position: absolute;
  top: -98px;
  left: 0px;
  text-align: center;
  width: 100%;
`

const Notification: React.FC<NotificationProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <CardWrapper>
        <BunnyDecoration>
          <img src="/images/decorations/hiccup-bunny.png" alt="bunny decoration" height="121px" width="130px" />
        </BunnyDecoration>
        <Card>
          <CardBody>
            <Heading mb="24px">{title}</Heading>
            {children}
          </CardBody>
        </Card>
      </CardWrapper>
    </Wrapper>
  )
}

export default Notification
