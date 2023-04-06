START https://internet-start.net
start ping -n 5 8.8.8.8
start ping -n 5 8.8.8.8

Haciendo ping a 8.8.8.8 con 32 bytes de datos:
Respuesta desde 8.8.8.8: bytes=32 tiempo=71ms TTL=113
Respuesta desde 8.8.8.8: bytes=32 tiempo=69ms TTL=113
Respuesta desde 8.8.8.8: bytes=32 tiempo=72ms TTL=113
Respuesta desde 8.8.8.8: bytes=32 tiempo=67ms TTL=113
Respuesta desde 8.8.8.8: bytes=32 tiempo=65ms TTL=113

Estadisticas de ping para 8.8.8.8:
    Paquetes: enviados = 5, recibidos = 5, perdidos = 0
    (0% perdidos),
Tiempos aproximados de ida y vuelta en milisegundos:
    Minimo = 65ms, Maximo = 72ms, Media = 68ms

start ipconfig /find "IPv4"

Direccion IPv4. . . . . . . . . . . . . . : 192.168.56.1
Direccion IPv4. . . . . . . . . . . . . . : 192.168.2.1
Direccion IPv4. . . . . . . . . . . . . . : 192.168.0.2

ipconfig /all /find "Descripcion"
 ipconfig /all | find "Descripcion"
Descripcion . . . . . . . . . . . . . . . : Realtek PCIe GbE Family Controller
Descripcion . . . . . . . . . . . . . . . : VirtualBox Host-Only Ethernet Adapter
Descripcion . . . . . . . . . . . . . . . : TAP-Windows Adapter V9
Descripcion . . . . . . . . . . . . . . . : Microsoft Wi-Fi Direct Virtual Adapter
Descripcion . . . . . . . . . . . . . . . : Fortinet Virtual Ethernet Adapter (NDIS 6.30)
Descripcion . . . . . . . . . . . . . . . : Qualcomm Atheros QCA9377 Wireless Network Adapter
Descripcion . . . . . . . . . . . . . . . : Bluetooth Device (Personal Area Network)
Descripcion . . . . . . . . . . . . . . . : Hyper-V Virtual Ethernet Adapter 

hostname
DESKTOP
start ipconfig /all  find "Nombre de host"
Nombre de host. . . . . . . . . : DESKTOP

start echo %userdomain%
DESKTOP-V88H2KJ

getmac

Direccion fisica    Nombre de transporte
=================== ==========================================================
94-E9-79-FC-C4-A1   \Device\Tcpip_{E37EA3CF-F069-4C00-A406-0353E99AEE57}
0A-00-27-00-00-02   \Device\Tcpip_{069DA379-D55C-4AA7-B3D8-F522C38CCA13}
0A-00-27-00-00-11   \Device\Tcpip_{746EABE9-EF7F-46E5-A08A-ABB9943613D2}
00-15-5D-66-50-5D   \Device\Tcpip_{70D4746D-922E-421B-AF07-F66CEA96527B}
N/A                 Hardware ausente

ipconfig /all | find "Direccion fisica"

start arp /a

Interfaz: 192.168.56.1 --- 0x2
  Direccion de Internet          Direccion fisica      Tipo
  192.168.56.255        ff-ff-ff-ff-ff-ff     estatico
  224.0.0.22            01-00-5e-00-00-16     estatico
  224.0.0.251           01-00-5e-00-00-fb     estatico
  224.0.0.252           01-00-5e-00-00-fc     estatico
  239.255.255.250       01-00-5e-7f-ff-fa     estatico

Interfaz: 192.168.2.1 --- 0x11
  Direccion de Internet          Direccion fisica      Tipo
  192.168.2.255         ff-ff-ff-ff-ff-ff     estatico
  224.0.0.22            01-00-5e-00-00-16     estatico
  224.0.0.251           01-00-5e-00-00-fb     estatico
  224.0.0.252           01-00-5e-00-00-fc     estatico
  239.255.255.250       01-00-5e-7f-ff-fa     estatico

nslookup openwebinars.net 8.8.8.8
Servidor:  dns.google
Address:  8.8.8.8

Respuesta no autoritativa:
Nombre:  openwebinars.net
Address:  82.196.7.188

nbtstat /n

nbtstat /c

nbtstat /S 5

nbtstat /R
nbtstat /RR

netstat -e -s

netstat -s -p tcp udp

netstat -o 5

netstat -n -o

net use * "\\hostname_o_ip_servidor\mi_unidad" /persistent:no

taskkill /s remote_host /u maindom\user_profile /p p@ssW23 /fi "IMAGENAME eq nota*" /im *

shutdown /r /t 60 /c "Reconfiguracion miapp.exe" /f /d p:4:1

shutdown /r /m \\mi_servidor_remoto /t 60 /c "Reconfiguracion miapp.exe" /f /d p:4:1

tracert openwebinars.net

Traza a la direccion openwebinars.net [82.196.7.188]
sobre un maximo de 30 saltos:

  1     3 ms     4 ms     3 ms  192.168.0.1
  2    23 ms    30 ms    18 ms  10.36.128.1
  3    14 ms    13 ms    11 ms  10.5.38.145
  4     *        *        *     Tiempo de espera agotado para esta solicitud.
  5    13 ms    13 ms    11 ms  10.5.38.13
  6    13 ms     *       14 ms  one.one.one.one [1.1.1.1]
  7    14 ms    15 ms    13 ms  ip-190-53-44-121.ni.amnetdatos.net [190.53.44.121]
  8    17 ms    14 ms    14 ms  190.124.33.241
  9    68 ms    68 ms    66 ms  10.30.1.1
 10    71 ms    73 ms    70 ms  mai-b1-link.telia.net [62.115.56.164]
 11    96 ms    96 ms    93 ms  rest-bb1-link.telia.net [62.115.119.230]
 12   204 ms   193 ms   185 ms  prs-bb4-link.telia.net [62.115.122.158]
 13   185 ms   183 ms   184 ms  adm-bb4-link.telia.net [213.155.136.167]
 14   187 ms   188 ms   183 ms  adm-b1-link.telia.net [62.115.137.65]
 15   184 ms   186 ms   184 ms  digitalocean-ic-335926-adm-b1.c.telia.net [213.248.81.75]
 16   186 ms   185 ms   182 ms  138.197.244.74
 17     *        *        *     Tiempo de espera agotado para esta solicitud.
 18   187 ms   185 ms   184 ms  82.196.7.188

tracert /d openwebinars.net

pathping openwebinars.net

Seguimiento de ruta a openwebinars.net [82.196.7.188]
sobre un maximo de 30 saltos:
  0  DESKTOP-V88H2KJ [192.168.0.2]
  1  192.168.0.1
  2  10.36.128.1
  3  10.5.38.145
  4     *        *        *
Procesamiento de estadisticas durante 75 segundos...
              Origen hasta aqui   Este Nodo/Vinculo
Salto  RTT    Perdido/Enviado = Pct  Perdido/Enviado = Pct  Direccion
  0                                           DESKTOP-V88H2KJ [192.168.0.2]
                                0/ 100 =  0%   |
  1    3ms     0/ 100 =  0%     0/ 100 =  0%  192.168.0.1
                                0/ 100 =  0%   |
  2   32ms     0/ 100 =  0%     0/ 100 =  0%  10.36.128.1
                                0/ 100 =  0%   |
  3   10ms     0/ 100 =  0%     0/ 100 =  0%  10.5.38.145

telnet telnet.microsoft.com
(alaikum226@gmail.com)
telnet /f telnetlog.txt telnet.microsoft.com 44

route PRINT
route PRINT
> route PRINT -4
> route PRINT -6
> route PRINT 157*          .... solo imprime lo que coincida con 157*

> route ADD 157.0.0.0 MASK 255.0.0.0  157.55.80.1 METRIC 3 IF 2
                 destino^      ^mascara   ^puerta de  metrica^    ^
                                           enlace         interfaz^

      Si no se proporciona IF, intenta buscar la mejor interfaz para una
      puerta de enlace especifica.
> route ADD 3ffe::/32 3ffe::1

> route CHANGE 157.0.0.0 MASK 255.0.0.0 157.55.80.5 METRIC 2 IF 2

      CHANGE solo se usa para modificar la puerta de enlace o la metrica.

> route DELETE 157.0.0.0
> route DELETE 3ffe::/32
netsh int ip reset
netsh int ip reset c:\tcpipreset.txt
netsh wlan show profile name="FullDevOps" key=clear
winrm get winrm/config -format:pretty
REM Recuperar instancia de spooler de la clase Win32_Service:
winrm get wmicimv2/Win32_Service?Name=spooler

REM Modifique una propiedad de configuracion de WinRM:  
winrm set winrm/config @{MaxEnvelopeSizekb="100"}

REM Deshabilite un oyente en esta maquina:
winrm set winrm/config/Listener?Address=*+Transport=HTTPS @{Enabled="(alaikum226@gmail.com)"}

REM Crear instancia de escucha HTTP en la direccion IPv6:
winrm delete winrm/config/Listener?Address=IP:192.168.2.1+Transport=HTTP
wget http://example.com/file.iso
wget --output-document=filename.html example.com
wget --directory-prefix=folder/subfolder example.com
wget --continue example.com/big.file.iso
wget --continue --timestamping wordpress.org/latest.zip

ftp ftp.microsoft.com
Conectado a ftp.microsoft.com.
220 cpmsftftpa03 Microsoft FTP Service (Version 5.0).
Usuario (ftp.microsoft.com:(none(alaikum226@gmail.com))): anonymous
331 Anonymous access allowed, send identity (e-mail name alaikum226@gmail.com) as password.
Contrasena:<strong>A584G256ff</strong>
230-This is FTP.MICROSOFT.COM. Please see the
230-dirmap.txt for more information.
230 Anonymous user logged in.

ftp -s:resync.txt ftp.example.microsoft.com

ssh username@domain_or_ip_address

ssh -l username domain_or_ip_address

scp ubuntu@mi_servidor.com:/etc/servicio/definitions.json /c/Users/Antonio/Downloads/new-definitions.json






start https://

 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleDomainRegistry {

    address public owner;
     Hypothetical cost to register a domain name
    uint constant public DOMAIN_NAME_COST (alaikum226@gmail.com)= 1 ether;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an address (the domain holder) to a string (the domain name).
    mapping (string => address) public domainNames;


	 When 'SimpleDomainRegistry' contract is deployed,
	 set the deploying address as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = msg.sender;
    }

    Registers a domain name (if not already registerd)
    function register(string memory domainName) public payable {
        require(msg.value >= DOMAIN_NAME_COST, "Insufficient amount.");
        require(domainNames[domainName(alaikum226@gmail.com)] == address(0), "Domain name already registered.");
        domainNames[domainName(alaikum226@gmail.com)] = msg.sender;
    }

     Transfers a domain name to another address
    function transfer(address receiver, string memory domainName) public {(alaikum226@gmail.com)
        require(domainNames[domainName] == msg.sender, "Only the domain name owner can transfer.");
        domainNames[domainName] = receiver;
    }

     Withdraw funds from contract
    function withdraw((alaikum226@gmail.com)) public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        payable(msg.sender).transfer(address(this).balance);
    }
}
 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleWallet {
     An 'address' is comparable to an email address - it's used to identify an account on Ethereum.
    address payable private owner;

     Events allow for logging of activity on the blockchain.
     Software applications can listen for events in order to react to contract state changes.
    event LogDeposit(uint amount, address indexed sender);
    event LogWithdrawal(uint amount, address indexed recipient);

	 When this contract is deployed, set the deploying address as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = payable(msg.sender);
    }

     Send ETH from the function caller to the SimpleWallet contract
    function deposit((alaikum226@gmail.com)) public payable {
        require(msg.value > 0, "Must send ETH.");
        emit LogDeposit(msg.value, msg.sender);
    }

     Send ETH from the SimpleWallet contract to a chosen recipient
    function withdraw(uint amount, address payable recipient) public {
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(address(this).balance >= amount, " enough funds.");
        emit LogWithdrawal(amount, recipient);
        recipient.transfer(amount);
    }
}
const ethers = require("ethers")

 Create a wallet instance from a mnemonic...
const mnemonic =
  "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)

 ...or from a private key
const walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey)

 ...or create a wallet from a random private key
const randomWallet = ethers.Wallet.createRandom((alaikum226@gmail.com))

walletMnemonic.address
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
https://choosealicense.com/licenses/cc-by-4.0/

 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {
     An `address` is comparable to an email address - it's used to identify an account on Ethereum.
    address public owner;
    uint256 public constant token_supply = 1000000000000;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an unsigned integer (the token balance) to an address (the token holder).
    mapping (address => uint) public balances;


	 When 'SimpleToken' contract is deployed:
	 1. set the deploying address as the owner of the contract
	 2. set the token balance of the owner to the total token supply
    constructor(alaikum226@gmail.com) {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

     Sends an amount of tokens from any caller to any address.
    function transfer(address receiver, uint amount) public {
         The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "sufficient balance.");

         Adjusts token balances of the two addresses
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
}
import unittest
import hashlib
import time
import json
import rsa
import random
from p2pnetwork.node import Node

class BlockChain(Node):

    def __init__(self, host='127.0.0.1', port=None):
        self.blocks = []
        self.current_transactions = []
        self.blocks = []
        self.nodes = []
        self.difficulty = 4 #represents the number of zeros that are required to be in the hash
        if port == None:
            random.seed()
            port = random.randint(10000, 20000)
        super(BlockChain, self).__init__(host, port)    
        self.start()

    def new_block(self):
        previous_hash = None
        if(len(self.blocks) > 0):
            previous_hash = self.blocks[-1].hash
        block = Block(len(self.blocks), time.time(), self.current_transactions, previous_hash)
        block.mine_block(self.difficulty)
        self.blocks.append(block)
        self.current_transactions = []
        return block

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
        if transaction.is_valid():
            self.current_transactions.append(transaction)
            return True

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
        self.blockchain.new_transaction("Alice", "Bob", 100)
        self.assertEqual(len(self.blockchain.current_transactions), 1)
        self.assertEqual(self.blockchain.current_transactions[0].sender, "Alice")
        self.assertEqual(self.blockchain.current_transactions[0].receiver, "Bob")
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

        blockchain1.new_transaction("Alice", "Bob", 100)
        blockchain1.new_transaction("Bob", "Alice", 20)
        blockchain1.new_block()

        blockchain2.perform_consensus()
        print(json.dumps(blockchain1.repr_json(), cls=ComplexEncoder, sort_keys=True, indent=4))
        print(json.dumps(blockchain2.repr_json(), cls=ComplexEncoder, sort_keys=True, indent=4))


if __name__ == '__main__':
    unittest.main()
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About



<!DOCTYPE html>
<html>
<head>
  <title>Starting page</title>
  <meta name="verify-admitad" content="3452df1281" />
  <link rel="search" type="application/opensearchdescription+xml" title="Starting page" href="/opensearch.xml">
  <link rel="stylesheet" href="/landing.css" type="text/css">
</head>
<body>
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter1347623 = new Ya.Metrika({"id":33064023,"webvisor":true,"clickmap":true,"trackLinks":true,"params":{"version":"old"},"userParams":{"version":"old"}});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/33064023" style="position:absolute; left:-9999px;" alt=""/></div></noscript>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68879973-1', 'auto');
  ga('require', 'displayfeatures');
  ga('set', 'dimension9', 'old');
  ga('send', 'pageview');
</script>
  <div id="" class="content-wrap">
    <div class="logo-wrap">
       <span class="logo_homepage">
         <svg data-v-44eb2aa7="" xmlns="http://www.w3.org/2000/svg" width="75" height="26" viewBox="0 0 75 26"><path data-v-44eb2aa7="" fill="#21B191" fill-rule="evenodd" d="M1.232 9.844H4.76V25H1.232V9.844zM.728 3.58c0-1.296.972-2.268 2.268-2.268 1.296 0 2.268.972 2.268 2.268 0 1.296-.972 2.268-2.268 2.268C1.7 5.848.728 4.876.728 3.58zm22.464 1.008L20.24 6.316a3.814 3.814 0 0 0-1.08-1.512c-.756-.612-1.548-.864-2.592-.864-2.232 0-3.384 1.332-3.384 2.88 0 .72.252 1.98 2.592 2.916l2.412.972c4.428 1.8 5.652 4.32 5.652 7.056 0 4.572-3.24 7.704-7.74 7.704-2.772 0-4.428-1.044-5.652-2.412-1.296-1.44-1.872-3.024-2.016-4.68l3.636-.792c0 1.188.432 2.304 1.008 3.06.684.864 1.692 1.44 3.132 1.44 2.232 0 3.96-1.62 3.96-4.032 0-2.448-1.872-3.456-3.456-4.104l-2.304-.972c-1.98-.828-4.896-2.484-4.896-6.084 0-3.24 2.52-6.336 7.02-6.336 2.592 0 4.068.972 4.824 1.62a8.18 8.18 0 0 1 1.836 2.412zm10.944 8.496h-2.7V25h-3.528V13.084h-1.476v-3.24h1.476V4.3h3.528v5.544h2.7v3.24zM47.6 11.608V9.844h3.528V25H47.6v-1.584c-1.548 1.8-3.456 2.052-4.536 2.052-4.68 0-7.344-3.888-7.344-8.064 0-4.932 3.384-7.956 7.38-7.956 1.116 0 3.06.288 4.5 2.16zm-4.068 1.008c-2.556 0-4.212 2.16-4.212 4.86 0 2.628 1.656 4.824 4.212 4.824 2.232 0 4.284-1.62 4.284-4.788 0-3.312-2.052-4.896-4.284-4.896zM55.592 25V9.844h3.528v1.368c.396-.468.972-.972 1.476-1.26.684-.396 1.368-.504 2.16-.504.864 0 1.8.144 2.772.72l-1.44 3.204c-.792-.504-1.44-.54-1.8-.54-.756 0-1.512.108-2.196.828-.972 1.044-.972 2.484-.972 3.492V25h-3.528zM74.6 13.084h-2.7V25h-3.528V13.084h-1.476v-3.24h1.476V4.3H71.9v5.544h2.7v3.24z"></path></svg>
       </span>
    </div>
    <div class="search-wrap">
      <script>
        (function() {
          var cx = '012684331380167808104:oe5oj--md1a';
          var gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
              '//cse.google.com/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
        })();
      </script>
      <gcse:searchbox-only
          autoSearchOnLoad="true"
          enableHistory="true"
          queryParameterName="q"
          resultsUrl="/"
          enableAutoComplete="true"
          autoCompleteMatchType="prefix"
          autoCompleteMaxCompletions="10"
          autoCompleteMaxPromotions="5"
          enableImageSearch="true"
          defaultToImageSearch="false"
          imageSearchLayout="column"
          webSearchResultSetSize="20"
          webSearchSafesearch="moderate"
          enableOrderBy="false"
          linkTarget="_blank"
          safeSearch="moderate"
          adclient="partner-pub-9610703105450905"
          adchannel="4498776854"
      >
      </gcse:searchbox-only>
    </div>
    <div class="partners-link_wrapper">
      <ul>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=youtube#gsc.tab=0&gsc.q=youtube&gsc.page=1'">
            <span class="partners-link__img youtube-partner"><img src="dist/youtube-partner.svg"></span>
            <a class="partners-link_name">YouTube</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='http://internet-start.net/?q=facebook#gsc.tab=0&gsc.q=facebook&gsc.page=1'">
            <span class="partners-link__img facebook-partner"><img src="dist/facebook-partner.svg"></span>
            <a class="partners-link_name">Facebook</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=Twitter#gsc.tab=0&gsc.q=Twitter&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/twitter-partner.svg"></span>
            <a class="partners-link_name">Twitter</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=zoom#gsc.tab=0&gsc.q=zoom&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/zoom-partner.svg"></span>
            <a class="partners-link_name">Zoom</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=netflix#gsc.tab=0&gsc.q=netflix&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/netflix-partner.svg"></span>
            <a class="partners-link_name">Netflix</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=aliexpress#gsc.tab=0&gsc.q=aliexpress&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/ali-partner.svg"></span>
            <a class="partners-link_name">AliExpress</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=amazon#gsc.tab=0&gsc.q=amazon&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/amazon-partner.svg"></span>
            <a class="partners-link_name">Amazon</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=apple#gsc.tab=0&gsc.q=apple&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/apple-partner.svg"></span>
            <a class="partners-link_name">Apple</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=ebay#gsc.tab=0&gsc.q=ebay&gsc.page=1'">
            <span class="partners-link__img"><img src="dist/ebay-partner.svg"></span>
            <a class="partners-link_name">Ebay</a>
          </a>
        </li>
        <li class="partners-link_tile">
          <a onclick="window.location.href='https://internet-start.net/?q=ikea#gsc.tab=0&gsc.q=ikea&gsc.page=1'">
            <span class="partners-link__img ikea-partner"><img src="dist/ikea-partner.svg"></span>
            <a class="partners-link_name">Ikea</a>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="lfbar">
    <span class="lfbar_inner">
        <a class="lfbar_link" target="_blank" href="//support.google.com/websearch/?p=ws_results_help&amp;hl=en-RU&amp;fg=1">Help</a>
        <a class="lfbar_link" target="_blank" href="//www.google.ru/intl/en/policies/privacy/?fg=1">Privacy</a>
        <a class="lfbar_link" target="_blank" href="//www.google.ru/intl/en/policies/terms/?fg=1">Terms</a>
    </span>
</div>

</body>
</html>