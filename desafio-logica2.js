//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
//
//
//
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}*

let vitoria = 68
let derrotas = 24

function calcularSaldo(vitoria, derrotas){
    let saldo = vitoria - derrotas
    return saldo
}


let saldo = calcularSaldo(vitoria, derrotas)



if (saldo < 10){
    let elo = "ferro"
    
}

if (saldo >10 && saldo < 21 ){
    let elo = "bronze"
}


if (saldo >20 && saldo < 51){
    let elo = "Prata"
}


if (saldo >50 && saldo < 81){
    let elo = "Ouro"}


if (saldo >80 && saldo < 91){
    let elo = "Diamante"
} 


if (saldo >90 && saldo < 101){
    let elo = "Lendário"}


if (saldo >= 101){
    let elo = "Imortal"
}

else {
    let elo = "nao ranqueado"
}

console.log("O heroi tem de saldo de  " + elo)