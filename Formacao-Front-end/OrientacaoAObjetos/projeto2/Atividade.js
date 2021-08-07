import {Cachorro} from "./Cachorro.js";

export class Atividade {
    cachorro;
    hora;
    podeComer;
    podeDormir;
    podeBrincar;

    constructor(cachorro, hora) {
        this.cachorro = cachorro;
        this.hora = hora;
        this.podeComer = false;
        this.podeBrincar = false;
        this.podeDormir = false;
    }


    get cachorro() {
        return this.cachorro;
    }

    comer(cachorro, hora) {
        if (this.cachorro == cachorro && this.hora == hora) {
            this.podeComer = true;
        } else {
            this.podeComer = false;
        }
    }
    dormir(cachorro, hora) {
        if (this.cachorro == cachorro && this.hora == hora) {
            this.podeDormir = true;
        } else {
            this.podeDormir = false;
        }
    }    
    brincar(cachorro, hora) {
        if (this.cachorro == cachorro && this.hora == hora) {
            this.podeBrincar = true;
        } else {
            this.podeBrincar = false;
        }
    }
}