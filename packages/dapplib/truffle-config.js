require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note pave quality inner kitchen only tuna'; 
let testAccounts = [
"0x4eb7bcc52d8e62bfc2359beacbd95ead27eddf1aa04efd67f7b99c305bb6c900",
"0x92c7763246aaa8a09ac643ff6409740613f20b526a0e4fdae5f19e8701fdb11d",
"0x61ae6f60b395f6af05dc3083790b7ce22f64a9b5b3b13f89b3fac396d29547cf",
"0x5626c00b178a2dd447717642cf70641bd3609a439f7b262b5ad15cfe2a3898cd",
"0x91a0c33127f235111a35bf302bd16bc640af5452372ec812a5b4f48b4022c84a",
"0xf25c648ae7732a59944975d01abe3a4400aac9f9fa0f416b2148b4955e7f0ac0",
"0x087ba2389c41d2e2e523c1a45580de446605fcc36f33a995f7cf0a94e986326c",
"0x238c9a31ad5f632b141cc2424b93c70682424bc064a84d87cb03d7ad326911a6",
"0xf491d09171f3097a57e0739c33880a53fb45e4a9976ab46a21aeaded2d4fcfa5",
"0x37a5d86cd7af484e6bc9402a45fbdadc4b77cf01b3170811489c70184f70e1c5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

