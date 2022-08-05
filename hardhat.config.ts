import { HardhatUserConfig } from 'hardhat/config';
import { urlFallback, pvkyFallback } from './utils/constants';
import 'dotenv/config';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

const rinkebyUrl = process.env.RINKEBY_URL || urlFallback;
const rinkebyPrivateKey = process.env.RINKEBY_PRIVATE_KEY || pvkyFallback;

const goerliUrl = process.env.GOERLI_URL! || urlFallback;
const goerliPrivateKey = process.env.GOERLI_PRIVATE_KEY || pvkyFallback;

const ropstenUrl = process.env.ROPSTEN_URL! || urlFallback;
const ropstenPrivateKey = process.env.ROPSTEN_PRIVATE_KEY || pvkyFallback;

const testchainUrl = process.env.TESTCHAIN_URL! || urlFallback;
const testchainPrivateKey = process.env.TESTCHAIN_PRIVATE_KEY || pvkyFallback;

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: rinkebyUrl,
      chainId: 4,
      accounts: [rinkebyPrivateKey],
    },
    goerli: {
      url: goerliUrl,
      chainId: 5,
      accounts: [goerliPrivateKey],
    },
    ropsten: {
      url: ropstenUrl,
      chainId: 3,
      accounts: [ropstenPrivateKey],
    },
    testchain: {
      url: testchainUrl,
      chainId: 1337,
      accounts: [testchainPrivateKey],
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './abis',
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
