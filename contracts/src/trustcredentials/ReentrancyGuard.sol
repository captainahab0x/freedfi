// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity >=0.8.0;

/// @notice Gas optimized reentrancy protection for smart contracts.
/// @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/ReentrancyGuard.sol)
/// @author Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)

///This code defines a ReentrancyGuard abstract contract, which is a mechanism to prevent reentrancy attacks. Reentrancy is a common attack where a malicious contract can repeatedly call a function in the victim contract in a way that the state of the victim contract has not been updated yet, and this can lead to unintended consequences, such as draining funds from the victim contract.



abstract contract ReentrancyGuard {
    uint256 private locked = 1;

    modifier nonReentrant() virtual {
        require(locked == 1, "REENTRANCY");

        locked = 2;

        _;

        locked = 1;
    }
}
