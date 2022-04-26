let titlePerg;
let corFundo;
let respCorreta;
let URLresp;
let respIncorreta;
let URLresp1;
let respIncorreta2;
let URLresp2;

let analise = []

const padraoURL = /^https?:\/\/.+\/.+$/
const padraoCor = /^#[0-9A-F]{6}$/

function InserirTela3 (){
    const tela3 = document.querySelector(".tela3")
        tela3.innerHTML = `<header>BuzzQuizz</header>
        <!-- PARTE 1 -->
        <div id="começo" class="questionario">
        <h1>Comece pelo começo</h1>
        <div class="container">
            <input class="titleQuizz"  placeholder="Título do seu quizz"></input>
            <input class="URLQuizz" placeholder="URL da imagem do seu quizz"></input>
            <input  class="pergQuizz" placeholder="Quantidade de perguntas do quizz"></input>
            <input class="nivelQuizz" placeholder="Quantidade de níveis do quizz"></input>
        </div>
        <div onclick="validacaoTela1()" class="botao"> <div class="next">Prosseguir pra criar perguntas</div></div>
        </div>
        <!-- PARTE 1 -->

        <!-- PARTE 2 -->
        <div id="perguntas" class="questionario oculto">
            <h1>Crie suas perguntas</h1>
            <div id="bug" class="container">
            
            </div>
    <div onclick="SelecionarElemento(this)"class="botao marginb"> <div class="next">Prosseguir pra criar níveis</div></div>
            </div>
        </div>
        <!-- PARTE 2 -->

        <!-- PARTE 3 -->
        <div class="questionario tres oculto"> 
            <h1>Seu quizz está pronto!</h1>
            <div class="imagens"><img src="imagens/hp.png"><figcaption>quão Potterhead é você?</figcaption></div>
            <div class="botao marginb margint"> <div class="next">Acessar Quizz</div></div>
            <h2>Voltar pra o home</h2>
        </div>
        <!-- PARTE 3 -->`
        
        
        
}
InserirTela3 ()


function validacaoTela1(){
    let title = document.querySelector(".titleQuizz").value
    let url = document.querySelector(".URLQuizz").value
    let perg = document.querySelector(".pergQuizz").value
    let nivel = document.querySelector(".nivelQuizz").value    
    //variavel de padrao da url utilizando Expressões Regulares
    const padrao = /^https?:\/\/.+\/.+$/
    //variavel de padrao da url utilizando Expressões Regulares
    
    //Arrays de preenchimento dos níveis e perguntas
    const quantPerguntas=[];
    const quantniveis=[]
    //Arrays de preenchimento dos níveis e perguntas

    //validação do titulo
    if((title.length >= 20 && title.length <= 65) && (padrao.test(url) == true) && perg >= 3 && nivel >= 2){
        const quest1 = document.querySelector("#começo")
        quest1.classList.add("oculto")
        const quest2 = document.querySelector("#perguntas")
        quest2.classList.remove("oculto")
        MostrarPerguntas()
    } else{
       alert("Dados Incorretos")
     }

}

function MostrarPerguntas(){
    let perg = document.querySelector(".pergQuizz").value
    
const coletor = document.querySelector("#bug")
for (let i = 1; i <= perg; i++){
            
            coletor.innerHTML += `           
            <div class="topicos margint">Pergunta ${i} <img class="icon"src="imagens/edit.svg"></div>
            <div class="caixona">
                <input onclick="selecionarElemento(this)" class="titlePergunta marginb" placeholder="Texto da pergunta"></input>
                <input onclick="selecionarElemento(this)" class="corFundo" placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos marginl">Resposta Correta</div>
                <input onclick="selecionarElemento(this)" class="respCorreta marginb" placeholder="Resposta correta"></input>
                <input onclick="selecionarElemento(this)" class="URLresp" placeholder="URL da imagem"></input>
                <div class="topicos marginl">Resposta Incorreta</div>
                <input onclick="selecionarElemento(this)" class="respIncorreta marginb" placeholder="Resposta incorreta 1"></input>
                <input onclick="selecionarElemento(this)" class="URLresp1 marginb " placeholder="URL da imagem 1"></input>
                <input onclick="selecionarElemento(this)" class="respIncorreta2 marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  onclick="selecionarElemento(this)" class="URLresp2 marginb" placeholder="URL da imagem 2"></input>
                </div>`
        
            analise.push(coletor.innerHTML)
            console.log(analise)
}
            }
            
// function validacaoTela2(){
//      titlePerg = document.querySelector(".titlePergunta").value
//      corFundo = document.querySelector(".corFundo").value
//      respCorreta = document.querySelector(".respCorreta").value
//      URLresp = document.querySelector(".URLresp").value
//      respIncorreta = document.querySelector(".respIncorreta").value
//      URLresp1 = document.querySelector(".URLresp1").value
//      respIncorreta2 = document.querySelector(".respIncorreta2").value
//      URLresp2 = document.querySelector(".URLresp2").value

    


//     if(titlePerg.length >= 20 && (padraoCor.test(corFundo) == true) && respCorreta !== ""  && (padraoURL.test(URLresp) == true) && (respIncorreta !== "" && padraoURL.test(URLresp1) == true ) || (respIncorreta2 !== "" && padraoURL.test(URLresp2) == true)){
//         return true
//     }else{
//         return false
//     }
// }

function selecionarElemento(elemento){
        
    if (elemento == `<input onclick="selecionarElemento(this)" class="titlePergunta marginb" placeholder="Texto da pergunta"></input>`) {
        titlePerg = document.querySelector(".titlePergunta").value
        if(titlePerg.length >= 20){
            console.log("titulo certo")
        } else {
            console.log("titulo errado")
        }
    }
    if (elemento == `<input onclick="selecionarElemento(this)" class="corFundo" placeholder="Cor de fundo da pergunta"></input>`){
        corFundo = document.querySelector(".corFundo").value
        if(padraoCor.test(corFundo) == true){
            console.log("cor certo")
        } else {
            console.log("cor errado")
        }
    }
    if (elemento == `<input onclick="selecionarElemento(this)" class="respCorreta marginb" placeholder="Resposta correta"></input>`){
        respCorreta = document.querySelector(".respCorreta").value
        if(respCorreta !== ""){
            console.log("resposta certa")
        } else {
            console.log("resposta vazia")
        }
    }
    if (elemento == `<input onclick="selecionarElemento(this)" class="URLresp" placeholder="URL da imagem"></input>`){
        URLresp = document.querySelector(".URLresp")
        if (padraoURL.test(URLresp) == true){
            console.log("url certo")
        } else {
                console.log("url errado")
        }   
    }
    if (elemento == `<input onclick="selecionarElemento(this)" class="respIncorreta marginb" placeholder="Resposta incorreta 1"></input>`){
        respIncorreta = document.querySelector(".respIncorreta").value
        if (respIncorreta !== ""){
            console.log("Incorreta preenchida")
        } else {
            console.log("Incorreta Vazia")
        }

    }
    if (elemento == `<input onclick="selecionarElemento(this)" class="URLresp1 marginb " placeholder="URL da imagem 1"></input>`){
        URLresp1 = document.querySelector(".URLresp1").value
        if (padraoURL.test(URLresp1) == true){
            console.log("url resposta certo")
        } else {
            console.log("url resposta incorreta")
        }
    }
    if (elemento == `<input onclick="selecionarElemento(this)" class="respIncorreta2 marginb margint" placeholder="Resposta incorreta 2"></input>`){
        respIncorreta2 = document.querySelector(".respIncorreta2").value
        if (respIncorreta2 !== ""){
            console.log("Incorreta 2 preenchida")
        } else {
            console.log("Incorreta 2 Vazia")
        }
    }
    if (elemento == `<input  onclick="selecionarElemento(this)" class="URLresp2 marginb" placeholder="URL da imagem 2"></input>`){
        URLresp2 = document.querySelector(".URLresp2").value
        if (padraoURL.test(URLresp2) == true){
            console.log("url resposta 2 certo")
        } else {
            console.log("url resposta 2 incorreta")
        } 
    }
}

function Check(){
    selecionarElemento ()
}

