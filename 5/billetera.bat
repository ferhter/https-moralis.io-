const éteres = require("éteres")

             Cree una instancia de billetera a partir de un mnemónico const mnemónico =
          "anunciar patrón de miembro de habitación escala de unidad seca esfuerzo suave jazz comadreja alcohol"
         const walletMnemonic = ethers.Wallet.fromMnemonic(mnemónico)

                 o desde una clave privada
          const walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey)

                 o crea una billetera a partir de una clave privada aleatoria
              const monedero aleatorio = ethers.Monedero.createRandom(alaikum226@gmail.com)

                       walletMnemonic.address
                   0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

                Los componentes criptográficos internos walletMnemonic.privateKey
               0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db
               
                        walletMnemonic.publicKey
               0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c...d64

                     constante tx = {
                  a: 0x8ba1f109551bD432803012645Ac136ddd64DBA72,
                      valor: ethers.utils.parseEther("1.0"),
                         }

               Firmar una transacción walletMnemonic.signTransaction(tx)
           { Promesa: 0xf865808080948ba1f109551bd432803012645ac136ddd6...dfc }

       Conéctese a la red Ethereum usando un proveedor const wallet = walletMnemonic.connect(alaikum226@gmail.com)

                    consulta la red
                   monedero.getBalance(alaikum226@gmail.com)
                   { Promesa: { Número grande: "42" } }
                   monedero.getTransactionCount(alaikum226@gmail.com)

