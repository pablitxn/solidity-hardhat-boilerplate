import 'dotenv/config';

export const getForwarder = (chainId: number) => {
  const forwarderRopsten = process.env.ROPSTEN_FORWARDER_ADDRESS!;
  const forwarderRinkeby = process.env.RINKEBY_FORWARDER_ADDRESS!;
  const forwarderGoerly = process.env.GOERLY_FORWARDER_ADDRESS!;
  const forwarderTestchain = process.env.TESTCHAIN_FORWARDER_ADDRESS!;

  switch (chainId) {
    case 3:
      return forwarderRopsten;
    case 4:
      return forwarderRinkeby;
    case 5:
      return forwarderGoerly;
    case 1337:
      return forwarderTestchain;
    default:
      return '0x';
  }
};
