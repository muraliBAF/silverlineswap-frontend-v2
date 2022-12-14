import React from 'react'
import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  // const split = headingText.split(' ')
  // const lastWord = split.pop()
  // const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={['150px', null, null, '168px']}
      minWidth="232px"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      mt={[null, null, 50, '110px']}
      mb={[null, null, 50, '80px']}
    >
      {/* {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg">{remainingWords}</Heading>
      ) : (
        <Heading scale="xl">{remainingWords}</Heading>
      )} */}
      <Heading color={highlightColor} scale="xl" mb="10px">
        {headingText}
      </Heading>
      <Text className='font-poppins' fontWeight={400} fontSize='20px' color="textSubtle">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
