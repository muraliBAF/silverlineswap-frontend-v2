import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Play, Predict, Win and Earn BNB',
  bodyText: 'SPARC- World’s first Prediction Platform, where losers are rewarded, If you win you will earn BNB, if you Lose you will earn SLN tokens.',
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.silverlineswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'trade', alt: 'Trade' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Enjoy the broadest spectrum of benefits from Staking.',
  bodyText: 'Earn a passive income from staking.',
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.silverlineswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'earn', alt: 'Earn' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: '',
  bodyText:
    `A healthy environment is clearly shown by the presence of butterflies.
    You can pollinate your Crypto Gains by Buying, Trading, Farming, Staking, Yielding & Spending
    it to create a garden on the DEX planet with our SLN Butterfly Tokens.`,
  reverse: true,
  primaryButton: {
    to: '/swap?outputCurrency=0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16',
    text: 'Buy SLCT',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.silverlineswap.finance/tokenomics/cake',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: 'token', alt: 'Token' },
    ],
  },
}

