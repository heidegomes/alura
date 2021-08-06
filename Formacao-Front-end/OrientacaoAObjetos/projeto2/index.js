import {Cachorro} from "./Cachorro.js";
import {Atividade} from "./Atividade.js";

const cachorro1 = new Cachorro("Trudy", "6 meses", "Bulldog Francês", "Médio", "Fulvo");
const cachorro2 = new Cachorro("Zeus", "5 anos", "Chow chow", "Grande", "Fulvo");
const cachorro3 = new Cachorro("Pepa", "3 anos", "Poodle", "Médio", "Branca");

console.log(cachorro1, cachorro2, cachorro3);

const atividadeCachorro1 = new Atividade(valor);
atividadeCachorro1.comer(7)

cachorro1.comer(10);

console.log(cachorro1.comer);
