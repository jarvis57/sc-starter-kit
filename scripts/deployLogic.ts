import {network, ethers, run} from 'hardhat';
import {TransactionResponse} from '@ethersproject/abstract-provider';
import {NetworkConfig} from '../configs/config';
import {HelloWorld, HelloWorld__factory} from '../typechain';
import {Contract, ContractFactory} from '@ethersproject/contracts';
import {sleep} from '../test/helper';

const networkConfig = NetworkConfig[network.name];
if (!networkConfig) {
  throw new Error(`Missing deploy config for ${network.name}`);
}

export interface AppContracts {
  helloWorld: HelloWorld;
}

export const deploy = async (existingContract: Record<string, any> = {}): Promise<AppContracts> => {
  log(0, 'Start deploying Krystal contracts');
  log(0, '======================\n');
  let deployedContracts = await deployContracts(existingContract);

  // Summary
  log(0, 'Summary');
  log(0, '=======\n');

  log(0, JSON.stringify(convertToAddressObject(deployedContracts), null, 2));

  console.log('\nDeployment complete!');
  return deployedContracts;
};

async function deployContracts(existingContract: Record<string, any> = {}): Promise<AppContracts> {
  const [deployer] = await ethers.getSigners();

  return {
    helloWorld: (await deployContract({
      contractName: 'helloWorld',
      autoVerify: networkConfig.autoVerifyContract,
      contractAddress: existingContract?.['helloWorld'],
      contractFactory: new HelloWorld__factory(deployer),
      args: [],
    })) as HelloWorld,
  };
}

async function deployContract({
  autoVerify,
  contractName,
  contractAddress,
  contractFactory,
  contractLocation,
  args,
}: {
  autoVerify: boolean;
  contractFactory: ContractFactory;
  contractName: string;
  contractAddress?: string;
  contractLocation?: string;
  args: any[];
}): Promise<Contract> {
  log(1, `Deploying '${contractName}'`);
  log(1, '------------------------------------');

  let contract;
  if (contractAddress) {
    log(2, `> contract already exists`);
    log(2, `> address:\t${contractAddress}`);
    // TODO: Transfer admin if needed
    contract = contractFactory.attach(contractAddress);
  } else {
    contract = await contractFactory.deploy(...args);
    const tx = await contract.deployed();
    await printInfo(tx.deployTransaction);
    log(2, `> address:\t${contract.address}`);
  }

  // Only verify new contract to save time
  if (autoVerify && !contractAddress) {
    try {
      log(3, '>> sleep first, wait for contract data to be propagated');
      await sleep(5000);
      log(3, '>> start verifying');
      await run('verify:verify', {
        address: contract.address,
        constructorArguments: args,
        contract: contractLocation,
      });
      log(3, '>> done verifying');
    } catch (e) {
      log(2, 'failed to verify contract', e);
    }
  }

  return contract;
}

async function printInfo(tx: TransactionResponse) {
  const receipt = await tx.wait(1);

  log(2, `> tx hash:\t${tx.hash}`);
  log(2, `> gas price:\t${tx.gasPrice.toString()}`);
  log(2, `> gas used:\t${receipt.gasUsed.toString()}`);
}

export function convertToAddressObject(obj: Record<string, any> | Array<any> | Contract): any {
  if (obj === undefined) return obj;
  if (obj instanceof Contract) {
    return obj.address;
  } else if (Array.isArray(obj)) {
    return obj.map((k) => convertToAddressObject(obj[k]));
  } else {
    let ret = {};
    for (let k in obj) {
      // @ts-ignore
      ret[k] = convertToAddressObject(obj[k]);
    }
    return ret;
  }
}

let prevLevel: number;
function log(level: number, ...args: any[]) {
  if (prevLevel != undefined && prevLevel > level) {
    console.log('\n');
  }
  prevLevel = level;

  let prefix = '';
  for (let i = 0; i < level; i++) {
    prefix += '    ';
  }
  console.log(`${prefix}`, ...args);
}
