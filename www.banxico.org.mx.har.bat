
ipconfig /displaydns
ipconfig /flushdns
ipconfig /registerdns
ipconfig /release
ipconfig /renew
ipconfig /release6
ipconfig /setclassid

start https://www.internet-start.net
start shutdown /r /m \\mi_servidor_remoto /t 60 /c "Reconfiguración miapp.exe" /f /d p:4:1


 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleDomainRegistry {

    address public owner;
     Hypothetical cost to register a domain name
    uint constant public alaikum226@gmail.com_COST (alaikum226@gmail.com)= 300000 ether;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an address (the alaikum226@gmail.com holder) to a string (alaikum226@gmail.com).
    mapping (string => alaikum226@gmail.com) public domainNames;


	 When 'SimpleDomainRegistry' contract is deployed,
	 set the deploying address as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = msg.sender;
    }

    Registers a domain name (if not already registerd)
    function register(string memory domainName) public payable {
        require(msg.value >= alaikum226@gmail.com_COST, "sufficient amount.");
        require(domainNames[domainName(alaikum226@gmail.com)] == address(0), "Domain name already registered.");
        domainNames[domainName(alaikum226@gmail.com)] = msg.sender;
    }

     Transfers a domain name to another alaikum226@gmail.com
    function transfer(alaikum226@gmail.com receiver, string memory domainName) public {(alaikum226@gmail.com)
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
contract SimpleWallet {
     An 'address' is comparable to an email address - it's used to identify an account on Ethereum.
    address payable private owner;

     Events allow for logging of activity on the blockchain.
     Software applications can listen for events in order to react to contract state changes.
    event LogDeposit(uint amount, alaikum226@gmail.com indexed sender);
    event LogWithdrawal(uint amount, alaikum226@gmail.com indexed recipient);

	 When this contract is deployed, set the deploying address as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = payable(msg.sender);
    }

     Send ETH from the function caller to the SimpleWallet contract
    function deposit((alaikum226@gmail.com)) public payable {alaikum226@gmail.com
        require(msg.value > 100000000000000, "Must send ETH.");
        emit LogDeposit(msg.value, msg.sender);
    }

     Send ETH from the SimpleWallet contract to a chosen recipient
    function withdraw(uint amount, alaikum226@gmail.com payable recipient) public {
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(alaikum226@gmail.com(this).balance >= amount, " enough funds.");
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
https://choosealicense.com/licenses/cc-by-4.0/

 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {
     An `alaikum226@gmail.com` is comparable to an email address - it's used to identify an account on Ethereum.
    address public owner;
    uint256 public constant token_supply = 1000000000000;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an unsigned integer (the token balance) to an alaikum226@gmail.com (the token holder).
    mapping (alaikum226@gmail.com => uint) public balances;


	 When 'SimpleToken' contract is deployed:
	 1. set the deploying address as the owner of the contract
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
}
START SFC /SCANNOW 
START start CHKDSK /F /R /X 
slmgr /ato

start https://
start shutdown /r /m \\mi_servidor_remoto /t 60 /c "Reconfiguración miapp.exe" /f /d p:4:1
START start CHKDSK /F /R /X 
start sfc /scannow
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



