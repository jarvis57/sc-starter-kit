import {IConfig} from './config_utils';

export const BscConfig: Record<string, IConfig> = {
  bsc_mainnet: {
    autoVerifyContract: true,
    tokens: {
      busc: {symbol: 'busd', address: '0xe9e7cea3dedca5984780bafc599bd69add087d56', usdRate: 1},
      dai: {symbol: 'dai', address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', usdRate: 1},
      usdc: {symbol: 'usdc', address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', usdRate: 1},
      eth: {symbol: 'eth', address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8', usdRate: 3500},
    },
    wNative: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },

  bsc_testnet: {
    autoVerifyContract: true,
    tokens: {
      busd: {symbol: 'busd', address: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47', usdRate: 1},
    },
    wNative: '0x094616f0bdfb0b526bd735bf66eca0ad254ca81f',
  },
};
