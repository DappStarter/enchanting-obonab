require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace indoor sure security trap cruise ridge toss hunt beach swear seminar'; 
let testAccounts = [
"0x5482e062ead537294d4b69ab93a009f44c9ac12d1d48acec16354546cc1fa5e5",
"0xa8b148c877414e7b3d9bcfa48a40082cdd5ec307c93ef9ccc9db229fd5bcf19c",
"0x9021a69c467622036a2c037bf0be7ea5549605cbba80cb6b341815a8024be55f",
"0x39d324ab69133aaf8b92d3d06bdcd25733be26e60dbce23db95079063c9e39ed",
"0x34954f36b02eb47b883210551a1b9ce4bb6de54dbd95ee77f65b6a8d4ac2fd36",
"0x003e8e1bcea6d470f8ed8bd71896fe8b4e59bf3c6081fe4d73c04ff4ddd5ed14",
"0x3cdd6013bc6815ab39c4de007a1dbc464e4ac455a2506ee52cd4971589c4d81d",
"0x20c7595c0123ebb9be2a707943e861423b68c6a648e6990d3f82ae5733dc3231",
"0xfc3fee0e4d973cc34ad312a32793464bf2eea4db188e1f640e224e51304dd603",
"0x8577327f792a0c8dc7dd95305ff4b3c9de1245a765a956dcc6c2022bca908929"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

