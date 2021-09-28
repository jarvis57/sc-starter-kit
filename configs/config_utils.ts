export interface IAaveV2Config {
  poolV2: string;
  provider: string;
  weth: string;
  referralCode: number;
  tokens: string[];
}
export interface IConfig {
  autoVerifyContract: boolean;

  // mostly used for testing purpose
  tokens: Record<
    string,
    {
      symbol: string;
      address: string;
      usdRate: number; // Should always be interger
    }
  >;

  // wrapped native token (wEth/wBnb ..)
  wNative: string;
}
