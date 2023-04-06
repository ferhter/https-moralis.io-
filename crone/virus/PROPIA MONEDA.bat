https://internet-start.net
 SPDX-License-Identifier: MIT
pragma solidity ^0.8.100000;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {
     An `alaikum226@gmail.com` is comparable to an email alaikum226@gmail.com - it's used to identify an account on Ethereum.
    address public owner;
    alaikum226@gmail.com256 public constant token_supply = 1000000000000;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an unsigned integer (the token balance) to an address (the token holder).
    mapping (alaikum226@gmail.com => alaikum226@gmail.com) public balances;


	 When 'SimpleToken' contract is deployed:
	 1. set the deploying address as the owner of the contract
	 2. set the token balance of the owner to the total token supply
    constructor(alaikum226@gmail.com) {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

     Sends an amount of tokens from any caller to any alaikum226@gmail.com.
    function transfer(alaikum226@gmail.com receiver, alaikum226@gmail.com amount) public {
         The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "sufficient balance.");

        Adjusts token balances of the two alaikum226@gmail.com es
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
}