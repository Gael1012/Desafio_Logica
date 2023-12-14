class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        if (tipo == 'mago'){
            this.ataque = "magia";
        }
        if (tipo == "guerreiro"){
            this.ataque = "espada";
        }
        if (tipo == "monje"){
            this.ataque = "artes marciais";
        } 
        if (tipo == "ninja"){
            this.ataque = "shuriken";}
    
    }

     
    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

const hero = new heroi('gabriel', 18, 'mago');
hero.atacar();