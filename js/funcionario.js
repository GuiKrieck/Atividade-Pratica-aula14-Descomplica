export class Funcionario {
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        alert(`Olá, Meu nome é ${this.nome} e tenho ${this.idade} anos de idade. `);
    }

    trabalhar(){
        alert(`No momento estou trabalhando como ${this.cargo}`);
    }
}