// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import '@openzeppelin/contracts/metatx/ERC2771Context.sol';

contract Counter is ERC2771Context {
    uint256 public value;

    event Increment(address indexed msgSender, uint256 step);
    event Decrement(address indexed msgSender, uint256 step);

    constructor(uint256 initValue, address forwarder) ERC2771Context(forwarder) {
        value = initValue;
    }

    function increment(uint256 step) external {
        value = value + step;
        emit Increment(_msgSender(), step);
    }

    function decrement(uint256 step) external {
        value = value - step;
        emit Decrement(_msgSender(), step);
    }

    string public versionRecipient = '3.0.0-alpha.6';
}
