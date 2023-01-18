require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

const { GORLI_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } =
  process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
      cahinId: 1337
    },
    gorli: {
      url: GORLI_API_URL,
      accounts: [PRIVATE_KEY],
    }
  },
  settings: {
      optimizer: {
        enabled: false,
        runs: 200,
     },
   },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
