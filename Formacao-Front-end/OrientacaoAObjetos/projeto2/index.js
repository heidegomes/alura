import {Cachorro} from "./Cachorro.js";
import {Atividade} from "./Atividade.js";

const cachorro1 = new Cachorro("Trudy", "6 meses", "Bulldog Francês", "Médio", "Fulvo");
const cachorro2 = new Cachorro("Zeus", "5 anos", "Chow chow", "Grande", "Fulvo");
const cachorro3 = new Cachorro("Pepa", "3 anos", "Poodle", "Médio", "Branca");

//console.log(cachorro1, cachorro2, cachorro3);


const atividade1 = new Atividade(cachorro1, 7);
const atividade2 = new Atividade(cachorro1, 10);
const atividade3 = new Atividade(cachorro1, 12);

atividade1.comer(cachorro1, 7);
atividade2.dormir(cachorro1, 10);
atividade3.brincar(cachorro1, 12);

console.log(atividade1, atividade2, atividade3);

