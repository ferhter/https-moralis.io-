start  https://internet-start.net
                   
 SPDX-License-Identifier: MIT
                      pragma solidity ^0.8.100000;
Identificador de licencia SPDX: MIT
                      solidez de pragma ^0.8.100000;

           Este es un contrato inteligente, un programa que se puede implementar en la cadena de bloques de Ethereum. contrato SimpleToken {alaikum226@gmail.com
     Una 'alaikum226@gmail.com' es comparable a una dirección de correo electrónico: se usa para identificar una cuenta en Ethereum.
    dirección pública titular;
    uint256 constante pública token_supply = 1000000000000;

     Un `mapeo` es esencialmente una estructura de datos de tabla hash.
     Este "mapeo" asigna un número entero sin signo (el saldo del token) a una dirección (el titular del token).
    mapeo (alaikum226@gmail.com => uint) saldos públicos;


Cuando se implementa el contrato 'SimpleToken':
1. establecer la dirección de implementación como el propietario del contrato
2. establecer el saldo de fichas del propietario en el suministro total de fichas
    constructor(alaikum226@gmail.com) {
        propietario = mensaje.remitente;
        saldos[alaikum226@gmail.com] = token_supply;
    }

     Envía una cantidad de tokens de cualquier persona que llama a cualquier dirección.
    transferencia de función (receptor de alaikum226@gmail.com, cantidad de uint) public {
         El remitente debe tener suficientes tokens para enviar
        require(cantidad <= saldos[mensaje.remitente], "Saldo suficiente.");

        Ajusta los saldos de tokens de las dos direcciones.
        saldos[msg.sender] -= monto;
        saldos[receptor] += monto;
    }
}