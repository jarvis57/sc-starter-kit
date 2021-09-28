import {evm_revert, evm_snapshot} from './helper';
import {assert} from 'chai';
import {ethers} from 'hardhat';
import {HelloWorld, HelloWorld__factory} from '../typechain';

describe('hello test', async () => {
  let helloContract: HelloWorld;
  let postSetupSnapshotId: any;

  before(async () => {
    console.log('Setup contract ...');
    const signer = (await ethers.getSigners())[0];
    helloContract = await new HelloWorld__factory(signer).deploy();
    postSetupSnapshotId = await evm_snapshot();
  });

  beforeEach(async () => {
    await evm_revert(postSetupSnapshotId);
    postSetupSnapshotId = await evm_snapshot();
  });

  it('hello correctly', async () => {
    assert((await helloContract.helloWorld()) == 'hello world', 'wrong');
  });
});
