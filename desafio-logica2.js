let vitoria = 150
let derrotas = 24
let nivel = "não ranqueado"
let contador = 0

function calcularSaldo(vitoria, derrotas) {
    let saldo = vitoria - derrotas
    return saldo
}
function sorteioDeNivel(vitoria) {
    while (contador < 5) {
        contador++
        Math.random()
        if (Math.random() < 0.5) {
            vitoria += 4
        } else {
            vitoria -= 1
        }
    }
    return vitoria
}
sorteioDeNivel(vitoria)
let saldo = calcularSaldo(vitoria, derrotas)

if (saldo < 10) {
    elo = "ferro"
}
else if (saldo >= 10 && saldo < 21) {
    elo = "bronze"
}
else if (saldo >= 21 && saldo < 51) {
    elo = "prata"
}
else if (saldo >= 51 && saldo < 81) {
    elo = "ouro"
}
else if (saldo >= 81 && saldo < 91) {
    elo = "diamante"
}
else if (saldo >= 91 && saldo < 101) {
    elo = "lendário"
}
else if (saldo >= 101) {
    elo = "imortal"
}


console.log("O herói tem saldo de " + saldo + " e esta no nivel de " + elo)
