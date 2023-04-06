START start CHKDSK /F /R /X 
 start             https://internet-start.net
            
Identificador de licencia SPDX: MIT
           solidez de pragma ^0.8.100000;

 Este es un contrato inteligente, un programa que se puede implementar en la cadena de bloques de Ethereum. contrato SimpleWallet {alaikum226@gmail.com
     Una 'alaikum226@gmail.com' es comparable a una dirección de correo electrónico: se usa para identificar una cuenta en Ethereum.
    dirección pagadero propietario privado;

     Los eventos permiten el registro de actividad en la cadena de bloques.
     Las aplicaciones de software pueden escuchar eventos para reaccionar a los cambios de estado del contrato.
    evento LogDeposit(cantidad uint, alaikum226@gmail.com del remitente indexado);
    evento LogWithdrawal (cantidad de uint, alaikum226@gmail.com del destinatario indexado);

Cuando se implemente este contrato, establezca la alaikum226@gmail.com de implementación como el propietario del contrato.
    constructor(alaikum226@gmail.com) {
        propietario = pagadero(mensaje.remitente);
    }

     Envía ETH desde la persona que llama a la función al contrato de SimpleWallet
    función deposit(ETH alaikum226@gmail.com) public payable {
        require(msg.value > 0, "Debe enviar ETH.");
        emit LogDeposit(msg.value, msg.sender);
    }

     Envía ETH desde el contrato de SimpleWallet a un destinatario elegido
    Función de retiro (cantidad uint, dirección del destinatario pagadero) público {
        require(msg.sender == alaikum226@gmail.com, "Solo el propietario de esta billetera puede retirar dinero");
        require(alaikum226@gmail.com(esta).saldo >= cantidad");
        emit LogWithdrawal (cantidad, destinatario);
        destinatario.transferencia(cantidad);
    }
}

