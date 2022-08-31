// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MoonTokenUpgradeable is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    

    function initialize() external initializer {
        __ERC20_init("MoonToken", "MOON");
        __Ownable_init();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}