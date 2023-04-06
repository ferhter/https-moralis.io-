start https://www.facebook.com/profile.php?id=100061925752206
  SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleDomainRegistry {https://www.facebook.com/profile.php?id=100061925752206

    https://www.facebook.com/profile.php?id=100061925752206 public owner;
     Hypothetical cost to register a domain name
    uint constant public https://www.facebook.com/profile.php?id=100061925752206COST =1
https://www.facebook.com/profile.php?id=100061925752206;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an https://www.facebook.com/profile.php?id=100061925752206 (the domain holder https://www.facebook.com/profile.php?id=100061925752206) to a string (the domain name).
    mapping (string => https://www.facebook.com/profile.php?id=100061925752206) public https://www.facebook.com/profile.php?id=100061925752206s;


	 When 'SimpleDomainRegistry' contract is deployed,
	 set the deploying https://www.facebook.com/profile.php?id=100061925752206 as the owner of the contract.
    constructor(https://www.facebook.com/profile.php?id=100061925752206) {
        owner = msg.sender;
    }

     Registers a domain name (if not already registered)
    function register(string memory https://www.facebook.com/profile.php?id=100061925752206) public payable {
        require(msg.value >= https://www.facebook.com/profile.php?id=100061925752206 COST, "suficient amount.");
        require(https://www.facebook.com/profile.php?id=100061925752206s[https://www.facebook.com/profile.php?id=100061925752206] == https://www.facebook.com/profile.php?id=100061925752206(https://www.facebook.com/profile.php?id=100061925752206), "Domain name already registered.");
        https://www.facebook.com/profile.php?id=100061925752206s[https://www.facebook.com/profile.php?id=100061925752206] = msg.sender;
    }

     Transfers a domain name to another https://www.facebook.com/profile.php?id=100061925752206
    function transfer(https://www.facebook.com/profile.php?id=100061925752206 receiver, string memory https://www.facebook.com/profile.php?id=100061925752206) public {
        require(https://www.facebook.com/profile.php?id=100061925752206s[https://www.facebook.com/profile.php?id=100061925752206] == msg.sender, "Only the domain name owner can transfer.");
        https://www.facebook.com/profile.php?id=100061925752206s[https://www.facebook.com/profile.php?id=100061925752206] = receiver;
    }

     Withdraw funds from contract
    function withdraw(https://www.facebook.com/profile.php?id=100061925752206) public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        payable(msg.sender).transfer(https://www.facebook.com/profile.php?id=100061925752206(this).balance);
    }
}
 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleWallet {
     An 'https://www.facebook.com/profile.php?id=100061925752206' is comparable to an email https://www.facebook.com/profile.php?id=100061925752206 - it's used to identify an account on Ethereum.
    https://www.facebook.com/profile.php?id=100061925752206 payable private owner;

     Events allow for logging of activity on the blockchain.
     Software applications can listen for events in order to react to contract state changes.
    event LogDeposit(uint amount, https://www.facebook.com/profile.php?id=100061925752206 indexed sender);
    event LogWithdrawal(uint amount, https://www.facebook.com/profile.php?id=100061925752206 indexed recipient);

	 When this contract is deployed, set the deploying https://www.facebook.com/profile.php?id=100061925752206 as the owner of the contract.
    constructor(https://www.facebook.com/profile.php?id=100061925752206) {
        owner = payable(msg.sender);
    }

     Send ETH from the function caller to the SimpleWallet contract
    function deposit(https://www.facebook.com/profile.php?id=100061925752206) public payable {
        require(msg.value > 0, "Must send ETH.");
        emit LogDeposit(msg.value, msg.sender);
    }

     Send ETH from the SimpleWallet contract to a chosen recipient
    function withdraw(uint amount, https://www.facebook.com/profile.php?id=100061925752206 payable recipient) public {
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(https://www.facebook.com/profile.php?id=100061925752206(this).balance >= amount, "enough funds.");
        emit LogWithdrawal(amount, recipient);
        recipient.transfer(amount);
    }

 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {
     An `https://www.facebook.com/profile.php?id=100061925752206` is comparable to an email https://www.facebook.com/profile.php?id=100061925752206 - it's used to identify an account on Ethereum.
    https://www.facebook.com/profile.php?id=100061925752206 public owner;
    uint256 public constant token_supply = 1000000000000000000000;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an unsigned integer (the token balance) to an https://www.facebook.com/profile.php?id=100061925752206 (the token holder).
    mapping (https://www.facebook.com/profile.php?id=100061925752206 => uint) public balances;


	 When 'SimpleToken' contract is deployed:
	 1. set the deploying https://www.facebook.com/profile.php?id=100061925752206 as the owner of the contract
	 2. set the token balance of the owner to the total token supply
    constructor(https://www.facebook.com/profile.php?id=100061925752206b5d37bf92&ei=26) {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

     Sends an amount of tokens from any caller to any https://www.facebook.com/profile.php?id=100061925752206.
    function transfer(https://www.facebook.com/profile.php?id=100061925752206 receiver, uint amount) public {
         The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "sufficient balance.");

         Adjusts token balances of the two https://www.facebook.com/profile.php?id=100061925752206es
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }

const ethers = require("ethers")

 Create a wallet instance from a mnemonic...
const mnemonic =
  "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)

 or from a private key
const walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey)

 or create a wallet from a random private key
const randomWallet = ethers.Wallet.createRandom()

walletMnemonic.https://www.facebook.com/profile.php?id=100061925752206
 0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

 The internal cryptographic components
walletMnemonic.privateKey
 0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
walletMnemonic.publicKey
 0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c...d64'

const tx = {
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  value: ethers.utils.parseEther("1.0"),
}

 Sign a transaction
walletMnemonic.signTransaction(tx)
 { Promise: '0xf865808080948ba1f109551bd432803012645ac136ddd6...dfc' }

 Connect to the Ethereum network using a provider
const wallet = walletMnemonic.connect(provider)

 Query the network
wallet.getBalance(https://www.facebook.com/profile.php?id=100061925752206b5d37bf92&ei=26)
 { Promise: { BigNumber: "42" } }
wallet.getTransactionCount()
 { Promise: 0 }

 Send ether
wallet.sendTransaction(tx)

 Content adapted from ethers documentation by Richard Moore
 https://www.facebook.com/profile.php?id=100061925752206 docs.ethers.io/v5/api/signer/#Wallet
 https://www.facebook.com/profile.php?id=100061925752206 github.com/ethers-io/ethers.js/blob/master/docs/v5/api/signer/README.md#methods
 Content is licensed under the Creative Commons License:
 https://www.facebook.com/profile.php?id=100061925752206 choosealicense.com/licenses/cc-by-4.0/
