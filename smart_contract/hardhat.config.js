// https://eth-ropsten.alchemyapi.io/v2/Smj-TeoqHb2UOal4YcprwbnniDXVQ4G8

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Smj-TeoqHb2UOal4YcprwbnniDXVQ4G8',
      accounts: ['34f81c3eab965ee8b0dcbd2183bbb61e23ade22a363fc90475b10ef9a7b711f2'],
    },
  },
};