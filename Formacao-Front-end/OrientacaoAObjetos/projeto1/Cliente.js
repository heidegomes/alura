import { Endereco } from "./Endereco.js";

export class Cliente {
    get cpf(){
        return this._cpf;
    }

    // set endereco (novoValor){
    //     if(novoValor instanceof Endereco){
    //         this.endereco = novoValor;
    //     }
    // }

    constructor(nome, cpf, endereco, senha){
        this.nome = nome;
        this._cpf = cpf;
        this.endereco = endereco;
        this._senha = senha;
    }
    
    autenticar(){
        return true;
    } 
}
