import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { Endereco } from "./Endereco.js";

const enderecoCliente1 = new Endereco('a', 'b', 'c', 'd', 'e', 'f');
const enderecoCliente2 = new Endereco('g', 'h', 'i', 'j', 'e', 'f');

const cliente1 = new Cliente("Ricardo", 11122233309, enderecoCliente1);
const cliente2 = new Cliente("Alice", 88822233309, enderecoCliente2);

const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
contaCorrenteCliente1.depositar(500);

const contaCorrenteCliente2 = new ContaCorrente(102, cliente2);
contaCorrenteCliente2.depositar(500);

let valor = 200;
contaCorrenteCliente1.transferir(valor, contaCorrenteCliente2);

console.log(contaCorrenteCliente1);

console.log(contaCorrenteCliente2);

console.log(ContaCorrente.numeroDeContas);







