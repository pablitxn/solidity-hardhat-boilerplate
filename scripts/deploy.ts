import { ethers } from 'hardhat';
import { getForwarder } from '../utils';

async function main() {
  const Counter = await    ethers.getContractFactory('Counter');
  const network = await ethers.provider.getNetwork();
  const { chainId } = network;
  const forwarder = getForwarder(chainId);
  const initValue = 0;

  const counterContract = await Counter.deploy(initValue, forwarder);
  await counterContract.deployed();
  console.log('Counter deployed to:', counterContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
