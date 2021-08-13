import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";
import { Endereco } from "./Endereco.js";

const enderecoCliente1 = new Endereco('a', 'b', 'c', 'd', 'e', 'f');


const cliente1 = new Cliente("Ricardo", 11122233309, enderecoCliente1);


const contaCorrenteCliente1 = new ContaCorrente(0, cliente1, 1001);
const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);




