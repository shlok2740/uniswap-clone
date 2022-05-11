require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/6frH9uDMN6XCVSa0wBGi3N2_xdg6rEmo',
      accounts: [
        '59b7f74eb61030bc1b638de1dc67199d558740303b5ebc0724b84e11d032e66e',
      ],
    },
  },
}
