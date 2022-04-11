
let click2;
let click1;
let jogadas=0;
let cartasCertas=0;

//Quantificação de cartas solicitadas
let quantidadeCards = Number(prompt("Com quantas cartas você quer jogar?"));

while(quantidadeCards < 4 || quantidadeCards > 14 || quantidadeCards % 2 != 0){
    quantidadeCards = Number(prompt("Com quantas cartas você quer jogar?"));
}
//Quantificação de cartas solicitadas

//Aleatoriedade das imagens de verso
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
//Aleatoriedade das imagens de verso

//Invocação da cartas solicitadas
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
//Invocação da cartas solicitadas

function virar(elemento) {
    console.log(elemento);

    if (click1 === undefined) {
        
        let imagemDetras = elemento.querySelector(".back-face");

        
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        imagemDetras.classList.add("desrodar-back-face");

        click1 = imagemDetras.src;
        jogadas=jogadas + 1
    }
    else {
        let imagemDetras = elemento.querySelector(".back-face");

        
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        imagemDetras.classList.add("desrodar-back-face");

        click2 = imagemDetras.src;
        jogadas=jogadas + 1

        if (click1 === click2) {
            console.log("São iguais, mantenha a carta virada");
            click1=undefined
            click2=undefined
            cartasCertas= cartasCertas+1 
           
        }
        else {
            console.log("Diferentes, desvire as cartas")
            click1=undefined
            click2=undefined
        } 
        if(quantidadeCards==cartasCertas){
                alert(`Você ganhou em ${jogadas} jogadas!`)
            }
    }
    

}



