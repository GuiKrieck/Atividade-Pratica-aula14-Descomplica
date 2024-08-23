import { Funcionario } from "../js/funcionario.js"

export class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento
    }

    gerenciar(){
        alert(`Sou Gerente do departamento: ${this.departamento}`);
    }
}
