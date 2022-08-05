# solidity-boilerplate

## **Getting Started**

### **Prerequisites**

```bash
node --version
# v16.16.0
```

### Installation

Clone the repository:

```bash
git clone git@github.com:cloudx-labs/cloudx-dao.git
```

Install npm packages:

```bash
npm install
```

### Dependencies versions

| hardhat                 | 2.10.9 |
| ----------------------- | ------ |
| @openzeppelin/contracts | 4.7.2  |
| typechain               | 8.1.0  |
| ethers                  | 5.6.9  |

## Setup the application

Set enviroment variables in `.env` file

```bash
RINKEBY_URL="https://rinkeby.infura.io/v3/{INFURA_ID}"
RINKEBY_PRIVATE_KEY="private-key/"
RINKEBY_FORWARDER_ADDRESS="0x0000000000000000000000000000000000000000"

GOERLI_URL="https://goerli.infura.io/v3/{INFURA_ID}"
GOERLI_PRIVATE_KEY=" /private-key/ "
GOERLI_FORWARDER_ADDRESS="0x0x0000000000000000000000000000000000000000"

ROPSTEN_URL="https://ropsten.infura.io/v3/{INFURA_ID}"
ROPSTEN_PRIVATE_KEY="private-key"
ROPSTEN_FORWARDER_ADDRESS="0x0000000000000000000000000000000000000000"

TESTCHAIN_URL="http://localhost:8545"
TESTCHAIN_PRIVATE_KEY="private-key"
TESTCHAIN_FORWARDER_ADDRESS="0x0000000000000000000000000000000000000000"
```

Compile contrats

```bash
npx hardhat compile
```

## Deploy contracts

Deploy your contracts using the following command

```bash
npx hardhat run scripts/deploy.ts --network testchain
```

## Tests

Run the tests using the following command

```bash
npx hardhat test
```
