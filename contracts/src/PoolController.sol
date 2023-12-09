// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.20;

interface ILendingPlatform {
    function getInvesters(address lender) external view returns (bool);
}

contract PoolController {
    event Received(address indexed lender, uint256 indexed amount);

    mapping(address => uint256) balances;

    address owner;
    ILendingPlatform lp;

    constructor(address _owner, ILendingPlatform _lp) {
        owner = _owner;
        lp = _lp;
    }

    modifier onlyLP() {
        require(msg.sender == address(lp));
        _;
    }

    modifier onlyInvester() {
        require(lp.getInvesters(msg.sender) == true);
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
