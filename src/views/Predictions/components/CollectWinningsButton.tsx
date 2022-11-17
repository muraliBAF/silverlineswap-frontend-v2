import React from 'react'
import { Button, ButtonProps, useModal } from '@pancakeswap/uikit'
import CollectRoundWinningsModal from './CollectRoundWinningsModal'

interface CollectWinningsButtonProps extends ButtonProps {
  isClaimSLN?: boolean
  hasClaimed: boolean
  onSuccess?: () => Promise<void>
}

const CollectWinningsButton: React.FC<CollectWinningsButtonProps> = ({ hasClaimed, onSuccess, children, isClaimSLN, ...props }) => {
  const [onPresentCollectWinningsModal] = useModal(<CollectRoundWinningsModal onSuccess={onSuccess} isClaimSLN={isClaimSLN} />, false)

  return (
    <Button onClick={onPresentCollectWinningsModal} disabled={hasClaimed} {...props}>
      {children}
    </Button>
  )
}

export default CollectWinningsButton
