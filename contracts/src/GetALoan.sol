// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface IPoolController {
    function sendLoan(address payable borrower, address payable lender, uint256 amount) external;
}

contract LendingPlatform {
    enum Status {
        Granted,
        NotGranted,
        Repaid
    }

    address public trader;

    constructor(address _trader) {
        trader = _trader;
    }

    IPoolController poolController;

    mapping(address => mapping(address => uint256)) public borrowedAmounts;
    mapping(address => bool) public hasActiveLoan;
    mapping(address => mapping(uint256 => Status)) public market;
    mapping(address => bool) public investers;

    event Borrowed(address indexed lender, address indexed borrower, uint256 amount);
    event Repaid(address indexed lender, address indexed borrower, uint256 amount);

    function addInvester(address lender) external {
        require(msg.sender == trader);
        investers[lender] = true;
        require(investers[lender] == true);
    }

    function setPoolController(address pool) external {
        require(msg.sender == trader);
        poolController = IPoolController(pool);
    }

    function getInvesters(address lender) public view returns (bool) {
        if (investers[lender]) return true;
        return false;
    }

    modifier onlyInvesters() {
        require(investers[msg.sender] == true);
        _;
    }

    function borrowRequest(address payable borrower, uint256 requestedAmount) external {
        require(msg.sender == borrower);
        require(requestedAmount > 0, "Borrowed amount must be greater than zero");
        require(!hasActiveLoan[borrower], "Borrower can only borrow one loan at a time");

        market[borrower][requestedAmount] = Status.NotGranted;
    }

    function borrowApprove(address payable borrower, uint256 amount) external onlyInvesters {
        // Effects
        borrowedAmounts[borrower][msg.sender] = amount;
        hasActiveLoan[borrower] = true;
        market[borrower][amount] = Status.Granted;

        // Interactions
        poolController.sendLoan(borrower, payable(msg.sender), amount);

        emit Borrowed(msg.sender, borrower, amount);
    }

    function repay(address payable lender, address payable borrower) external payable {
        uint256 borrowedAmount = borrowedAmounts[borrower][lender];
        require(borrowedAmount > 0, "Borrower has no borrowed amount to repay");
        require(msg.sender == borrower, "Only borrower can repay");
        require(msg.value == borrowedAmount, "You must repay the full borrowed amount");
        // Effects
        borrowedAmounts[borrower][lender] = 0;
        hasActiveLoan[borrower] = false;
        market[borrower][borrowedAmount] = Status.Repaid;

        // Interactions
        lender.transfer(borrowedAmount); // Send the borrowed amount to the borrower

        emit Repaid(lender, borrower, borrowedAmount);
    }

    function getBorrowedAmount(address payable lender) public view returns (uint256) {
        return borrowedAmounts[msg.sender][lender];
    }
}
