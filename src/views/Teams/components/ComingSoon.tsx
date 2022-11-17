import React from 'react'
import { BunnyPlaceholderIcon, Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Logo from 'components/Logo/Logo'

interface ComingSoonProps {
  children?: React.ReactNode
}

const ComingSoon: React.FC<ComingSoonProps> = ({ children }) => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" p="24px">
      {/* <BunnyPlaceholderIcon width="72px" height="72px" /> */}
      <img src="/images/butterfly.png" width="100" alt="Butterfly icon" />
      <Heading as="h5" scale="md" color="textSubtle" mt="10px">
        {children || t('Coming Soon!')}
      </Heading>
    </Flex>
  )
}

export default ComingSoon
