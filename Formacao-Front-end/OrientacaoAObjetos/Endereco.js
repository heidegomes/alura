
export class Endereco {
    estado;
    cidade;
    bairro;
    rua;
    numero;
    complemento;


constructor(estado, cidade, bairro, rua, numero, complemento){
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
}
}