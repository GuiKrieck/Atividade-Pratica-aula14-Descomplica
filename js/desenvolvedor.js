import { Funcionario } from "../js/funcionario.js"

export class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
    }

    programar(){
        alert(`estou utilizando ${this.linguagem} para programar.`);
    }
}
