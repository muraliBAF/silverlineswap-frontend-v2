import { MenuItemsType, DropdownMenuItemType, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: '',
    href: '/info',
    icon: 'Hamburger',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
    ],
  },
  {
    label: t('TRADE'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    // items: [
    //   {
    //     label: t('Exchange'),
    //     href: '/swap',
    //   },
    //   {
    //     label: t('Liquidity'),
    //     href: '/liquidity',
    //   },
    // ],
  },
  {
    label: t('STAKE'),
    href: '/farms',
    icon: 'Earn',
    // items: [
    //   {
    //     label: t('Farms'),
    //     href: '/farms',
    //   },
    //   {
    //     label: t('Pools'),
    //     href: '/pools',
    //   },
    // ],
  },
  {
    label: t('SPARC'),
    href: '/sparc',
    icon: 'Trophy',
    showItemsOnMobile: false,
  },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //     {
  //       label: t('Activity'),
  //       href: `${nftsBaseUrl}/activity`,
  //     },
  //   ],
  // },
]

export default config
