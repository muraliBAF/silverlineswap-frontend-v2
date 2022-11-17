import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.silverlineswap.finance/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.silverlineswap.finance/brand-and-logos',
      },
      {
        label: t('Community'),
        href: 'https://docs.silverlineswap.finance/products/community',
      },
      {
        label: t('SLCT token'),
        href: 'https://docs.silverlineswap.finance/tokenomics/sln',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.silverlineswap.finance/click-for-help',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.silverlineswap.finance/products/troubleshooting-errors',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/SilverLineSwap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.silverlineswap.finance/',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.silverlineswap.finance/products/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.silverlineswap.finance/products/audit',
      },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.silverlineswap.finance/hiring/become-a-chef',
      // },
    ],
  },
]
