import {IConfig} from './config_utils';

export const EthConfig: Record<string, IConfig> = {
  eth_mainnet: {
    autoVerifyContract: true,

    tokens: {
      dai: {symbol: 'dai', address: '0x6b175474e89094c44da98b954eedeac495271d0f', usdRate: 1},
      usdc: {symbol: 'usdc', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', usdRate: 1},
      usdt: {symbol: 'usdt', address: '0xdac17f958d2ee523a2206206994597c13d831ec7', usdRate: 1},
      knc: {symbol: 'knc', address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202', usdRate: 2},
    },

    wNative: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },

  eth_ropsten: {
    autoVerifyContract: true,

    tokens: {
      dai: {symbol: 'dai', address: '0xad6d458402f60fd3bd25163575031acdce07538d', usdRate: 1},
    },

    wNative: '0xc778417e063141139fce010982780140aa0cd5ab',
  },

  eth_rinkeby: {
    autoVerifyContract: true,

    tokens: {
      dai: {symbol: 'dai', address: '0x95b58a6bff3d14b7db2f5cb5f0ad413dc2940658', usdRate: 1},
    },

    wNative: '0xc778417e063141139fce010982780140aa0cd5ab',
  },
};
