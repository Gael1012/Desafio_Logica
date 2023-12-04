let nomeHeroi = "Arcanjo"
//let elo = ""
let exp = 10500;

if (exp < 1000){
    let elo = "ferro"
    //console.log("Seu elo é: " + elo)
    } 

else if (exp > 1000 && exp < 2001){
    elo = "bronze"
    //console.log("seu elo e "+ elo)    
    }

else if (exp > 2000 && exp < 5001){
    elo = "Prata"
    //console.log("seu elo e " + elo )    
    }

else if (exp > 6000 && exp < 7001){
    elo = "Ouro"
    //console.log("seu elo e " + elo)    
    }

else if (exp > 7000 && exp < 8001){
    elo = "Platina"
    //console.log("seu elo e "+ elo)    
    }

else if (exp > 8000 && exp < 9001){
    elo = "Ascendente"
    //console.log("seu elo e "+ elo)    
    }

else if (exp >9000 && exp < 10001){
    elo = "Imortal"
    //console.log("seu elo e "+ elo)    
    }

else if (exp >= 10001){
    elo = "Radiante"
    //console.log("seu elo e "+ elo)    
    }
else;

for (let i = 0; i < 3; i++){
    console.log("------------------------------------------------------")
}


console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + elo)

for (let a = 0; a < 3; a++){
    console.log("------------------------------------------------------")
}