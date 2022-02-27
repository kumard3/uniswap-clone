require('dotenv').config({path:__dirname+'/.env'})

require('@nomiclabs/hardhat-waffle')
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mEJIAuxHnE2HsvBATUIEBiTLrd-dN5X3',
      accounts: [`${PRIVATE_KEY}`]
    },
  },
}
