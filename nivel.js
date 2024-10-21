// informações do Heroi 
const nomeHeroi = "MAGNUS";
const xpHeroi = 7500;

// Usando função para ajudar na mensagem final 
function verificarNivel(xpHeroi) {
  if (xpHeroi <= 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 1 (Ferro)");
  } else if (xpHeroi <= 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 2 (Bronze)");
  } else if (xpHeroi <= 5000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 3 (Prata)");
  } else if (xpHeroi <= 7000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 4 (Ouro)");
  } else if (xpHeroi <= 9000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 5 (Platina)");
  } else if (xpHeroi <= 13000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 6 (Ascendente)");
  } else if (xpHeroi <= 15000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível 7 (Imortal)");
  } else {
    console.log("O herói de nome " + nomeHeroi + " está no nível 8 (Radiante)");
  }
}

verificarNivel(xpHeroi);



