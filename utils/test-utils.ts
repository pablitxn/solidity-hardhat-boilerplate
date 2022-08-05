import { ContractReceipt } from 'ethers';

export const expectEvent = (receipt: ContractReceipt, eventName: string) => {
  const event = receipt.events?.find(({ event }) => event === eventName);
  if (!event) throw new Error(`Event ${eventName} not exists`);

  return event;
};
