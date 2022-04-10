
let click2;
let click1;

let quantidadeCards = Number(prompt("Com quantas cartas você quer jogar?"));

while(quantidadeCards < 4 || quantidadeCards > 14 || quantidadeCards % 2 != 0){
    quantidadeCards = Number(prompt("Com quantas cartas você quer jogar?"));
}

const fundoCartas = ["bobrossparrot.gif", 
                    "explodyparrot.gif", 
                    "fiestaparrot.gif", 
                    "metalparrot.gif", 
                    "revertitparrot.gif", 
                    "tripletsparrot.gif", 
                    "unicornparrot.gif",]

const fundoRandom = []

for (let i = 0; i < quantidadeCards/2; i++) {
    fundoRandom.push(fundoCartas[i]);
    fundoRandom.push(fundoCartas[i]);
}

fundoRandom.sort(comparador); 

function comparador() { 
return Math.random() - 0.5; 
}

console.log(fundoRandom)

function gerarCartas() {
    let cards = document.querySelector(".cards");
    console.log(cards)

    for (let i = 0; i < quantidadeCards; i++){
        cards.innerHTML += `<div class="card" onclick="virar(this)">
                                <img src="imagens/front.png" alt="" class="front-face face">
                                <img src="imagens/${fundoRandom[i]}" alt="" class="back-face face">
                            </div>`;
    }
}
gerarCartas();


function virar(elemento){
    if (click1 === undefined){
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        let versoImagem = elemento.querySelector(".back-face").classList.add("desrodar-back-face");
        click1 = versoImagem.src
    }
    else {
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        let versoImagem = elemento.querySelector(".back-face").classList.add("desrodar-back-face");
        click2 = versoImagem.src
    }

    if (click1 === click2) {
        console.log("São iguais, mantenha a carta virada");
    }
    else {
        console.log("Diferentes, desvire as cartas")
    }
}


