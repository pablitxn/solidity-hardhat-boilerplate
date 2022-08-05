import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Counter, Counter__factory } from '../typechain-types';
import { expectEvent } from '../utils/test-utils';

describe('Counter Contract', () => {
  let CounterContract: Counter;

  beforeEach(async () => {
    const contractFactory = await ethers.getContractFactory('Counter');
    const [signer] = await ethers.getSigners();
    const forwarderAddress = '0x0000000000000000000000000000000000000000';
    const initValue = 0;

    const tx = await contractFactory.deploy(initValue, forwarderAddress);
    const { address: counterAddress } = await tx.deployed();
    CounterContract = Counter__factory.connect(counterAddress, signer);
  });

  it('Increment value', async () => {
    const value = 10;

    const transaction = await CounterContract.increment(value);
    const receipt = await transaction.wait();
    expectEvent(receipt, 'Increment');

    const newValue = await CounterContract.value();
    expect(newValue.toNumber()).to.equal(value);
  });
});
