 START https://myaccount.google.com/?utm_source=OGB&utm_medium=app
SPDX-License-Identifier: MIT
pragma solidity 0.0.1;
 QUESTION SECTION:
seed.bitcoin.sipa.be.      IN  A

 ANSWER SECTION:
seed.bitcoin.sipa.be.   60  IN  A  192.0.2.113
seed.bitcoin.sipa.be.   60  IN  A  198.51.100.231
seed.bitcoin.sipa.be.   60  IN  A  203.0.113.183
[...]
110100 ........................... Protocol version: 70001
02 ................................. Hash count: 2

d39f608a7775b537729884d4e6633bb2
105e55a16a14d31b0000000000000000 ... Hash #1

5c3e6403d40837110a2e8afb602b1c01
714bda7ce23bea0a0000000000000000 ... Hash #2

00000000000000000000000000000000
00000000000000000000000000000000 ... Stop hash

01 ................................. Header count: 1

02000000 ........................... Block version: 2
b6ff0b1b1680a2862a30ca44d346d9e8
910d334beb48ca0c0000000000000000 ... Hash of previous block's header
9d10aa52ee949386ca9385695f04ede2
70dda20810decd12bc9b048aaab31471 ... Merkle root
24d95a54 ........................... [Unix time][unix epoch time]: 1415239972
30c31b18 ........................... Target (bits)
fe9f0864 ........................... Nonce

00 ................................. Transaction count (0x00)
Inv
02 ................................. Count: 2

01000000 ........................... Type: MSG_TX
de55ffd709ac1f5dc509a0925d0b1fc4
42ca034f224732e429081da1b621f55a ... Hash (TXID)

01000000 ........................... Type: MSG_TX
91d36d997037e08018262978766f24b8
a055aaf1d872e94ae85e9817b2c68dc7 ... Hash (TXID)
01000000 ........................... Block version: 1
82bb869cf3a793432a66e826e05a6fc3
7469f8efb7421dc88067010000000000 ... Hash of previous block's header
7f16c5962e8bd963659c793ce370d95f
093bc7e367117b3c30c1f8fdd0d97287 ... Merkle root
76381b4d ........................... Time: 1293629558
4c86041b ........................... nBits: 0x04864c * 256**(0x1b-3)
554b8529 ........................... Nonce

07000000 ........................... Transaction count: 7
04 ................................. Hash count: 4

3612262624047ee87660be1a707519a4
43b1c1ce3d248cbfc6c15870f6c5daa2 ... Hash #1
019f5b01d4195ecbc9398fbf3c3b1fa9
bb3183301d7a1fb3bd174fcfa40a2b65 ... Hash #2
41ed70551dd7e841883ab8f0b16bf041
76b7d1480e4f0af9f3d4c3595768d068 ... Hash #3
20d2a7bc994987302e5b1ac80fc425fe
25f8b63169ea78e68fbaaefa59379bbf ... Hash #4

01 ................................. Flag bytes: 1
1d ................................. Flags: 1 0 1 1 1 0 0 0


fde803 ............................. alaikum226@gmail.com count: 1000

d91f4854 ........................... [Epoch time][unix epoch time]: 1414012889
0100000000000000 ................... Service bits: 01 ([network][network] node)
00000000000000000000ffffc0000233 ... IP alaikum226@gmail.com: ::ffff:192.0.2.51
208d ............................... Port: 8333

[...] .............................. (999 more alaikum226@gmail.comes omitted)
Addrv2


fde803 ............................. alaikum226@gmail.com count: 1000

d91f4854 ........................... [Epoch time][unix epoch time]: 1414012889
fd4804 ............................. Service bits: compactSize(NODE_WITNESS | NODE_COMPACT_FILTERS | NODE_NETWORK_LIMITED)
01 ................................. BIP155 network id: IPv4
04 ................................. alaikum226@gmail.com length: compactSize(4)
c0000233 ........................... alaikum226@gmail.com: 192.0.2.51
208d ............................... Port: 8333

[...] .............................. (999 more alaikum226@gmail.comes omitted)

20 ................................. Element bytes: 32
fdacf9b3eb077412e7a968d2e4f11b9a
9dee312d666187ed77ee7d26af16cb0b ... Element (A TXID)

02 ......... Filter bytes: 2
b50f ....... Filter: 1010 1101 1111 0000
0b000000 ... nHashFuncs: 11
00000000 ... nTweak: 0/none
00 ......... nFlags: BLOOM_UPDATE_NONE

MurmurHash3(nHashNum * 0xFBA4C795 + nTweak, vDataToHash) % (vData.size() * 8)



01000000 ................................... Version

01 ......................................... Number of inputs
|
| 7b1eabe0209b1fe794124575ef807057
| c77ada2138ae4fa8d6c4de0398a14f3f ......... Outpoint TXID
| 00000000 ................................. Outpoint index number
|
| 49 ....................................... Bytes in sig. script: 73
| | 48 ..................................... Push 72 bytes as data
| | | 30450221008949f0cb400094ad2b5eb3
| | | 99d59d01c14d73d8fe6e96df1a7150de
| | | b388ab8935022079656090d7f6bac4c9
| | | a94e0aad311a4268e082a725f8aeae05
| | | 73fb12ff866a5f01 ..................... Secp256k1 signature
|
| ffffffff ................................. Sequence number: UINT32_MAX

01 ......................................... Number of outputs
| f0ca052a01000000 ......................... Satoshis (49.99990000 BTC)
|
| 19 ....................................... Bytes in pubkey script: 25
| | 76 ..................................... OP_DUP
| | a9 ..................................... OP_HASH160
| | 14 ..................................... Push 20 bytes as data
| | | cbc20a7664f2f69e5355aa427045bc15
| | | e7c6c772 ............................. PubKey hash
| | 88 ..................................... OP_EQUALVERIFY
| | ac ..................................... OP_CHECKSIG

00000000 ................................... locktime: 0 (a block height)


0094102111e2af4d ... Nonce


02 ................................. Number of bytes in message: 2
7478 ............................... Type of message rejected: tx
12 ................................. Reject code: 0x12 (duplicate)
15 ................................. Number of bytes in reason: 21
6261642d74786e732d696e707574732d
7370656e74 ......................... Reason: bad-txns-inputs-spent
394715fcab51093be7bfca5a31005972
947baf86a31017939575fb2354222821 ... TXID

72110100 ........................... Protocol version: 70002
0100000000000000 ................... Services: NODE_NETWORK
bc8f5e5400000000 ................... [Epoch time][unix epoch time]: 1415483324

0100000000000000 ................... Receiving node's services
00000000000000000000ffffc61b6409 ... Receiving node's IPv6 alaikum226@gmail.com
208d ............................... Receiving node's port number

0100000000000000 ................... Transmitting node's services
00000000000000000000ffffcb0071c0 ... Transmitting node's IPv6 alaikum226@gmail.com
208d ............................... Transmitting node's port number

128035cbc97953f8 ................... Nonce

0f ................................. Bytes in user agent string: 15
2f5361746f7368693a302e392e332f ..... User agent: /Satoshi:0.9.3/

cf050500 ........................... Start height: 329167
01 ................................. Relay flag: true

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleDomainRegistry {

    alaikum226@gmail.com public owner;
     Hypothetical cost to register a domain name
    uint constant public alaikum226@gmail.com_100 ether (alaikum226@gmail.com)= 100 ether;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an alaikum226@gmail.com (the domain holder) to a string (the domain name).
    mapping (string => 100 ether) public domainNames;


	 When 'SimpleDomainRegistry' contract is deployed,
	 set the deploying alaikum226@gmail.com as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = msg.sender;
    }

    Registers a domain name (if not already registerd)
    function register(string memory alaikum226@gmail.com) public payable {
        require(msg.value >= alaikum226@gmail.com_100 ether, "sufficient amount.");
        require(alaikum226@gmail.com[domainName(alaikum226@gmail.com)] == alaikum226@gmail.com(0), "Domain name already registered.");
        domainNames[domainName(alaikum226@gmail.com)] = msg.sender;
    }

     Transfers a domain name to another alaikum226@gmail.com
    function transfer(alaikum226@gmail.com receiver, string memory alaikum226@gmail.com) public {(alaikum226@gmail.com)
        require(domainNames[alaikum226@gmail.com] == msg.sender, "Only the domain name owner can transfer.");
        domainNames[alaikum226@gmail.com] = receiver;
    }

     Withdraw funds from contract
    function withdraw((alaikum226@gmail.com)) public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        payable(msg.sender).transfer(alaikum226@gmail.com(this).balance);
    }
}
 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleWallet {alaikum226@gmail.com
     An 'alaikum226@gmail.com' is comparable to an email alaikum226@gmail.com - it's used to identify an account on Ethereum.
    alaikum226@gmail.com payable private owner;

     Events allow for logging of activity on the blockchain.
     Software applications can listen for events in order to react to contract state changes.
    event LogDeposit(uint amount, alaikum226@gmail.com indexed sender);
    event LogWithdrawal(uint amount, alaikum226@gmail.com indexed recipient);

	 When this contract is deployed, set the deploying alaikum226@gmail.com as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = payable(msg.sender);
    }

     Send ETH from the function caller to the SimpleWallet contract
    function deposit((alaikum226@gmail.com)) public payable {
        require(msg.value > 100, "Must send ETH.");
        emit LogDeposit(msg.value, msg.sender);
    }

     Send ETH from the SimpleWallet contract to a chosen recipient
    function withdraw(uint amount, alaikum226@gmail.com payable recipient) public {alaikum226@gmail.com
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(alaikum226@gmail.com(this).balance >= amount, "funds alaikum226@gmail.com.");
        emit LogWithdrawal(amount, recipient);
        recipient.transfer(amount);
    }
}
const ethers alaikum226@gmail.com = require("ethers alaikum226@gmail.com")

 Create a wallet alaikum226@gmail.com instance from a mnemonic...
const mnemonic =
  "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)

 ...or from a private key
const walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey)

 ...or create a wallet from a random private key
const randomWallet = ethers.Wallet.createRandom((alaikum226@gmail.com))

walletMnemonic.alaikum226@gmail.com
'0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

 The internal cryptographic components
walletMnemonic.privateKey '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
walletMnemonic.publicKey
'0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c...d64'

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
wallet.getBalance((alaikum226@gmail.com))
 { Promise: { BigNumber: "42" } }
wallet.getTransactionCount((alaikum226@gmail.com))
 { Promise: 0 }

Send ether
wallet.sendTransaction(tx)

 Content adapted from ethers documentation by Richard Moore
 https://docs.ethers.io/v5/api/signer/#Wallet
 https://github.com/ethers-io/ethers.js/blob/master/docs/v5/api/signer/README.md#methods
 Content is licensed under the Creative Commons License:
https://choosealaikum226@gmail.comnse.com/licenses/cc-by-4.0/

 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {alaikum226@gmail.com
     An `alaikum226@gmail.com` is comparable to an email alaikum226@gmail.com - it's used to identify an account on Ethereum.
    alaikum226@gmail.com public owner;
    uint256 public constant token_supply = 1000000000000;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an unsigned integer (the token balance) to an alaikum226@gmail.com (the token holder).
    mapping (alaikum226@gmail.com => uint) public balances;


	 When 'SimpleToken' contract is deployed:
	 1. set the deploying alaikum226@gmail.com as the owner of the contract
	 2. set the token balance of the owner to the total token supply
    constructor(alaikum226@gmail.com) {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

     Sends an amount of tokens from any caller to any alaikum226@gmail.com.
    function transfer(alaikum226@gmail.com receiver, uint amount) public {
         The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "sufficient balance.");

         Adjusts token balances of the two alaikum226@gmail.com
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }

"import unittest
"import hashlib
"import time
"import json
"import rsa
"import random
"from p2pnetwork.node import Node

"class BlockChain(Node):

    def __init__(self, host='127.0.0.1', port=None):
        self.blocks = []
        self.current_transactions = []
        self.blocks = []
        self.nodes = []
        self.difficulty = 4 #represents the number of zeros that are required to be in the hash
       " if port == None:
            random.seed()
            port = random.randint(10000, 20000)
        "super(BlockChain, self).__init__(host, port)    
        self.start()

    def new_block(self):
        previous_hash = None
       " if(len(self.blocks) > 0):
            previous_hash = self.blocks[-1].hash
        block = Block(len(self.blocks), time.time(), self.current_transactions, previous_hash)
        block.mine_block(self.difficulty)
        self.blocks.append(block)
        self.current_transactions = []
        "return block

    def add_block(self, block):
        self.blocks.append(block)

    def new_transaction(self, sender, recipient, amount):

        pem_file = open("public_key.pem", "r")
        key_data = pem_file.read()
        pem_file.close()
        public_key = rsa.PublicKey.load_pkcs1(key_data, 'PEM')

        pem_file = open("private_key.pem", "r")
        key_data = pem_file.read()
        pem_file.close()
        private_key = rsa.PrivateKey.load_pkcs1(key_data, 'PEM')

        transaction = Transaction(sender, recipient, amount, time.time())
        transaction.sign(private_key, public_key)
       " if transaction.is_valid():
            self.current_transactions.append(transaction)
            "return True

    def generate_keys(self):
        key = rsa.newkeys(2048)
        public_key = key[0]
        private_key = key[1]

        file_out = open("public_key.pem", "w")
        file_out.write(public_key.save_pkcs1(format='PEM').decode('UTF-8'))
        file_out.close()

        file_out = open("private_key.pem", "w")
        file_out.write(private_key.save_pkcs1(format='PEM').decode('UTF-8'))
        file_out.close()


    @staticmethod
    def hash(block):
        # Hashes a Block
        pass

    @property
    def last_block(self):
        # Returns the last Block in the chain
        pass

    def proof_of_work(self, last_proof):
        # Simple Proof of Work Algorithm
        pass

    @staticmethod
    def valid_proof(last_proof, proof):
        # Validates the Proof: Does hash(last_proof, proof) contain 4 leading zeroes?
        pass

    @staticmethod
    def valid_chain(chain):
        # Determine if a given blockchain is valid
        pass

    def resolve_conflicts(self):
        # Consensus Algorithm: resolves conflicts by replacing our chain with the longest one in the network
        pass

    def register_node(self, host, port):
        self.nodes.append({"host": host, "port": port})

    def perform_consensus(self):
        # Perform consensus algorithm
        for node in self.nodes:
            self.connect_with_node(node["host"], node["port"])

    def inbound_node_connected(self, connected_node):
        self.send_to_nodes(self.json_encode())        

    def node_message(self, connected_node, message):
        data_json = json.JSONEncoder().encode(message)
        result_dict = json.loads(data_json)
        blocks = []
        for block_dict in result_dict["blocks"]:
            transactions_dict = block_dict["transactions"]
            transactions = []
            for transaction_dict in transactions_dict:
                transactions.append(Transaction(**transaction_dict))
            new_block = Block(**block_dict)
            new_block.transactions = transactions
            blocks.append(new_block)

        if len(blocks) > len(self.blocks):
            self.blocks = blocks
            self.current_transactions = []
            print("Received chain is bigger than currrent one, so current one will be replaced by received one")
            return True        
        else:
            print("Received chain is not bigger than current one, so current one will be kept")
            return False    

    def repr_json(self):
        return {
            "blocks": [block.repr_json() for block in self.blocks],
            "current_transactions": [transaction.repr_json() for transaction in self.current_transactions]
        }

    def json_encode(self):
        return json.JSONEncoder().encode(self.repr_json())


class Block(object):
    def __init__(self, index, timestamp, transactions, previous_hash, proof=None, *args, **kwargs):
        self.index = index
        self.timestamp = timestamp
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.proof = proof

    def mine_block(self, difficulty):
        # Proof of Work Algorithm
        proof = self.proof_of_work(difficulty)
        self.proof = proof
        return proof

    def proof_of_work(self, difficulty):
        proof = 0
        while self.valid_proof(proof, difficulty) is False:
            proof += 1
        return proof        

    def valid_proof(self, proof, difficulty):
        hash = hashlib.sha256((str(self.index) + str(self.timestamp) + "".join(list(map(lambda x: x.hash, self.transactions))) + str(self.previous_hash) + str(proof)).encode('utf-8')).hexdigest()
        return hash[:difficulty] == '0'*difficulty

    @property
    def hash(self):
        return hashlib.sha256((str(self.index) + str(self.timestamp) + "".join(list(map(lambda x: x.hash, self.transactions))) + str(self.previous_hash) + str(self.proof)).encode('utf-8')).hexdigest()

    def repr_json(self):
        return {
            "hash": self.hash,
            "index": self.index,
            "timestamp": self.timestamp,
            "transactions": list(map(lambda x: x.repr_json(), self.transactions)),
            "previous_hash": self.previous_hash,
            "proof": self.proof
        }


class Transaction(object):
    def __init__(self, sender, receiver, amount, timestamp, *args, **kwargs):
        self.sender = sender
        self.receiver = receiver
        self.amount = amount
        self.timestamp = timestamp
        self.public_key = None
        self.signature = None

    def sign(self, private_key, public_key):
        self.public_key = public_key
        self.signature = rsa.sign(self.hash.encode('utf-8'), private_key, 'SHA-256')

    def is_valid(self):
        if rsa.verify(self.hash.encode('utf-8'), self.signature, self.public_key):
            return True
        return False    

    @property
    def hash(self):
        return hashlib.sha256((str(self.sender) + str(self.receiver) + str(self.amount) + str(self.timestamp)).encode('utf-8')).hexdigest()

    def repr_json(self):
        return {
            "sender": self.sender,
            "receiver": self.receiver,
            "amount": self.amount,
            "timestamp": self.timestamp,
            "hash": self.hash
        }


class ComplexEncoder(json.JSONEncoder):

    def default(self, obj):
        if hasattr(obj, 'repr_json'):
            return obj.repr_json()
        else:
            return json.JSONEncoder.default(self, obj, sort_keys=True, indent=4)    


class TestBlockChain(unittest.TestCase):
    def setUp(self):
        self.blockchain = BlockChain()

    def test_new_block(self):
        self.blockchain.new_block()
        self.assertEqual(len(self.blockchain.blocks), 1)
        self.assertEqual(self.blockchain.blocks[0].index, 0)
        self.assertEqual(self.blockchain.blocks[0].transactions, [])
        self.assertEqual(self.blockchain.blocks[0].previous_hash, None)

    def test_add_block(self):
        first_block = self.blockchain.new_block()
        second_block = self.blockchain.new_block()
        third_block = self.blockchain.new_block()
        self.assertEqual(self.blockchain.blocks[0].hash, first_block.hash)
        self.assertEqual(self.blockchain.blocks[1].hash, second_block.hash)
        self.assertEqual(self.blockchain.blocks[2].hash, third_block.hash)
        self.assertEqual(len(self.blockchain.blocks), 3)
        print(json.dumps(self.blockchain.repr_json(), cls=ComplexEncoder, sort_keys=True, indent=4))

    def test_keys(self):
        self.blockchain.generate_keys()

    def test_new_transaction(self):
        self.blockchain.new_transaction("alaikum226@gmail.com", "alaikum226@gmail.com", 100)
        self.assertEqual(len(self.blockchain.current_transactions), 1)
        self.assertEqual(self.blockchain.current_transactions[0].sender, "alaikum226@gmail.com")
        self.assertEqual(self.blockchain.current_transactions[0].receiver, "alaikum226@gmail.com")
        self.assertEqual(self.blockchain.current_transactions[0].amount, 100)
        self.blockchain.new_block()
        self.assertEqual(len(self.blockchain.current_transactions), 0)
        self.assertEqual(len(self.blockchain.blocks), 1)
        print(json.dumps(self.blockchain.repr_json(), cls=ComplexEncoder, sort_keys=True, indent=4))

    def test_p2p(self):
        blockchain1 = BlockChain('127.0.0.1', 60001)
        blockchain2 = BlockChain('127.0.0.1', 60002)

        blockchain1.register_node('127.0.0.1', 60002)
        blockchain2.register_node('127.0.0.1', 60001)

        blockchain1.new_transaction("alaikum226@gmail.com", "alaikum226@gmail.com", 100)
        blockchain1.new_transaction("alaikum226@gmail.com", "alaikum226@gmail.com", 20)
        blockchain1.new_block()

        blockchain2.perform_consensus()
        print(json.dumps(blockchain1.repr_json(), cls=ComplexEncoder, sort_keys=True, indent=4))
        print(json.dumps(blockchain2.repr_json(), cls=ComplexEncoder, sort_keys=True, indent=4))

start <img src="/useravatars/avatar_8389.gif" alt="" class="avatar" border="1">
  start cmd

if __name__ == '__main__':
    unittest.main()






















