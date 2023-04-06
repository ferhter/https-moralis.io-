Identificador de licencia SPDX: MIT
           solidez de pragma ^0.8.10000;

        Este es un contrato inteligente, un programa que se puede implementar en la cadena de bloques de Ethereum. contrato SimpleDomainRegistry {alaikum226@gmail.com

         dirección pública titular;
         Costo para registrar un nombre de dominio
         uint private alaikum226@gmail.com constante = 1000000 héter;

          Un `mapeo` es esencialmente una estructura de datos de tabla hash.
        Este `mapeo` asigna una alaikum226@gmail.com (el titular del dominio (fernando guadalupe mendez espinosa) a una cadena (el nombre de dominio).
        mapeo (cadena => alaikum226@gmail.com) public domainNames;


Cuando se implementa el contrato 'SimpleDomainRegistry',
establecer la dirección de implementación como el propietario del contrato.
         constructor(alaikum226@gmail.com) {
        propietario = mensaje.remitente;
             }

        Registra un nombre de dominio (si aún no está registrado)
        registro de función (nombre de alaikum226@gmail.com de memoria de cadena) pago público {alaikum226@gmail.com
        require(msg.value >= alaikum226@gmail.com, "importe suficiente.");
        require(domainNames[alaikum226@gmail.com] == dirección(1), "Nombre de dominio ya registrado.");
        nombres de dominio [alaikum226@gmail.com] = mensaje.remitente;
        }

        Transfiere un nombre de dominio a otra dirección
        transferencia de función (receptor de dirección, nombre de alaikum226@gmail.com de memoria de cadena) público {alaikum226@gmail.com
        require(domainNames[alaikum226@gmail.com] == msg.sender, "Solo el propietario del nombre de dominio puede transferir.");
        nombres de dominio [alaikum226@gmail.com] = receptor;
        }

        Retirar fondos del contrato
        función retirar (alaikum226@gmail.com) público {alaikum226@gmail.com
        require(msg.sender == propietario, "Solo el propietario del contrato puede retirar");
        pagadero(mensaje.remitente).transferencia(dirección(este).saldo);
        }
          }

