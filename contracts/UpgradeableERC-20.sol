
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MoonToken is ERC20 {
    address public admin;
    constructor() ERC20("MoonToken", "MOON") {
        _mint(msg.sender, 10000 * 10 ** 18);
        admin = msg.sender;
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}