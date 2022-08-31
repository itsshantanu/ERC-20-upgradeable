const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20 = await ethers.getContractFactory("MoonTokenUpgradeable");
  console.log("Deploying ERC20...");
  const erc20 = await upgrades.deployProxy(ERC20, {
      initializer: "initialize",
  });
  await erc20.deployed();
  console.log("Box deployed to:", erc20.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
