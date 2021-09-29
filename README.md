# Introduction

Starter kit for smart contracts.

## Package Manager

We use `yarn` as the package manager. You may use `npm` and `npx` instead, but commands in bash scripts may have to be changed accordingly.

## Stack

* hardhat
* ethers.js
* Waffle

## Setup

1. Clone this repo
2. `yarn install`

## Compilation

`yarn compile` to compile contracts for all solidity versions.

## Setting

Create `.env` and input the `PRIVATE_KEY`. This will be the main signer.

> `.env`
```
PRIVATE_KEY=0x          // private key to interact with blockchain
```

## Testing

1. If contracts have not been compiled, run `yarn compile` or `yarn c`. This step can be skipped subsequently.
2. Run `yarn test -h` for instruction

```bash
yarn test -h
yarn run v1.22.10
$ ./cmd.sh -x test -h
yarn <deploy,test> [-h] [-c <eth,bsc,polygon,avalanche>] [-n <mainnet,testnet,ropsten,rinkeby,staging,fuji>] -- to run test on specific chain and network

where:
    -h  show this help text
    -c  which chain to run, supported <eth,bsc,polygon>
    -n  which network to run, supported <mainnet,testnet,ropsten,mumbai>
    -f  specific test to run if any
✨  Done in 0.10s.
```

#### Example

```bash
yarn test -c bsc -n mainnet
yarn run v1.22.10
$ ./cmd.sh -x test -c bsc -n mainnet
Running all tests...
$ /Users/jarvis/Desktop/sc-starter-kit/node_modules/.bin/hardhat test --no-compile --network hardhat
--ENVS:
--CHAIN=bsc, NETWORK=mainnet, customConfig=bsc_mainnet
--MAINNET_FORK=https://bsc.knstats.com/v1/mainnet/archive?appId=krystal_jarvis, MAINNET_ID=56, MAINNET_FORK_BLOCK=10982609

  hello test
Setup contract ...
    ✓ hello correctly

·-----------------------|---------------------------|-------------|-----------------------------·
|  Solc version: 0.7.6  ·  Optimizer enabled: true  ·  Runs: 780  ·  Block limit: 30000000 gas  │
························|···························|·············|······························
|  Methods                                                                                      │
·············|··········|·············|·············|·············|···············|··············
|  Contract  ·  Method  ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|··········|·············|·············|·············|···············|··············
|  Deployments          ·                                         ·  % of limit   ·             │
························|·············|·············|·············|···············|··············
|  HelloWorld           ·          -  ·          -  ·     103527  ·        0.3 %  ·          -  │
·-----------------------|-------------|-------------|-------------|---------------|-------------·

  1 passing (5s)

✨  Done in 9.06s.
```

## Deploying

1. Run `yarn deploy -h` for instruction
2. Contracts will be saved in `contracts.json` and won't be deployed next time. If you wish to redeploy, pls remove the contract address in the `contracts.json`

```bash
yarn deploy -h
yarn run v1.22.10
$ ./cmd.sh -x deploy -h
yarn <deploy,test> [-h] [-c <eth,bsc,polygon,avalanche>] [-n <mainnet,testnet,ropsten,rinkeby,staging,fuji>] -- to run test on specific chain and network

where:
    -h  show this help text
    -c  which chain to run, supported <eth,bsc,polygon>
    -n  which network to run, supported <mainnet,testnet,ropsten,mumbai>
    -f  specific test to run if any
✨  Done in 0.07s.
```

#### Example
```bash
yarn deploy -c bsc -n testnet
yarn run v1.22.10
$ ./cmd.sh -x deploy -c bsc -n testnet
$ /Users/jarvis/Desktop/sc-starter-kit/node_modules/.bin/hardhat run scripts/deployer.ts --network bsc_testnet
--ENVS:
--CHAIN=bsc, NETWORK=testnet, customConfig=bsc_testnet
--MAINNET_FORK=https://bsc-archive.knstats.com, MAINNET_ID=56, MAINNET_FORK_BLOCK=8401958
No need to generate any newer typings.
--ENVS:
--CHAIN=bsc, NETWORK=testnet, customConfig=bsc_testnet
--MAINNET_FORK=https://bsc-archive.knstats.com, MAINNET_ID=56, MAINNET_FORK_BLOCK=8401958
 Start deploying Krystal contracts
 ======================

     Deploying 'helloWorld'
     ------------------------------------
         > tx hash:     0x697baa1bbb566d91c5362ba7b8f5cc60bda792664b6d2781b3efb70a365488b6
         > gas price:   10000000000
         > gas used:    103527
         > address:     0xDa9d8B74b55Fa88152EB257Ee3aF82dF42039216
             >> sleep first, wait for contract data to be propagated
             >> start verifying
Nothing to compile
No need to generate any newer typings.
Compiling 1 file with 0.7.6
Successfully submitted source code for contract
contracts/HelloWorld.sol:HelloWorld at 0xDa9d8B74b55Fa88152EB257Ee3aF82dF42039216
for verification on Etherscan. Waiting for verification result...

Successfully verified contract HelloWorld on Etherscan.
https://testnet.bscscan.com/address/0xDa9d8B74b55Fa88152EB257Ee3aF82dF42039216#code
             >> done verifying


 Summary
 =======

 {
  "helloWorld": "0xDa9d8B74b55Fa88152EB257Ee3aF82dF42039216"
}

Deployment complete!
✨  Done in 42.77s.
```

## Coverage

- Run `yarn coverage` for coverage on files
