// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.20;

import "./GetALoan.sol";

contract PoolController {
    event Received(address indexed lender, uint256 indexed amount);

    mapping(address => uint256) balances;

    address owner;
    address lp;

    constructor(address _owner, address _lp) {
        owner = _owner;
        lp = _lp;
    }

    LendingPlatform lendingPlatform;

    modifier onlyLP() {
        require(msg.sender == lp);
        _;
    }

    modifier onlyInvester() {
        require(lendingPlatform.getInvesters(msg.sender) == true);
        _;
    }

    function sendLoan(address payable borrower, address payable lender, uint256 amount) external onlyLP {
        balances[lender] -= amount;
        borrower.transfer(amount);
    }

    receive() external payable onlyInvester {
        balances[msg.sender] = msg.value;
        emit Received(msg.sender, msg.value);
    }
}
