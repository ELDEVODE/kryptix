// https://eth-ropsten.alchemyapi.io/v2/m0XQsBxEyORECm-6mw6OGeo6aL4V2Z1D

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/m0XQsBxEyORECm-6mw6OGeo6aL4V2Z1D',
      accounts: ['8be5878147b9ad2f8c156ff35ad29d1974a4cb5389c3acc59c71a95b8a4608ae']
    }
  }
}