import {IConfig} from './config_utils';

export const PolygonConfig: Record<string, IConfig> = {
  polygon_mainnet: {
    autoVerifyContract: true,

    tokens: {
      quick: {symbol: 'quick', address: '0x831753dd7087cac61ab5644b308642cc1c33dc13', usdRate: 473},
      uni: {symbol: 'uni', address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f', usdRate: 25},
      aave: {symbol: 'aave', address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b', usdRate: 364},
      weth: {symbol: 'weth', address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', usdRate: 3000},
      dai: {symbol: 'dai', address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', usdRate: 1},
      usdc: {symbol: 'usdc', address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', usdRate: 1},
      knc: {symbol: 'knc', address: '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c', usdRate: 1},
    },

    wNative: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },

  polygon_mumbai: {
    autoVerifyContract: true,

    tokens: {
      dai: {symbol: 'dai', address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', usdRate: 1},
      usdc: {symbol: 'usdc', address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', usdRate: 1},
    },

    wNative: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },
};
