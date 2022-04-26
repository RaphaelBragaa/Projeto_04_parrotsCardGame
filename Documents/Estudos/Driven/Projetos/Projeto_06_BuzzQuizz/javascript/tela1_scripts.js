//Variáveis Globais
const meuQuiz = document.querySelector(".meu-quizz");
const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");
const tela3 = document.querySelector(".tela3");
let quizzGeral = [];
let quizzesSelecionados = [];
let titulo;
let imagemURL;
let idQuizz;
let levelQuizz;
let questionsQuizz;
let idElemento;
let quizzUsuario = JSON.parse(localStorage.getItem(""));

function renderizarMensagemTela1() {
  inserirTela1();
  inserirMeuQuiz();
  inserirTodosQuizz();
}

function inserirTela1() {
  document.querySelector(".tela1").innerHTML += `
    <main>
      <section class="meu-quizz">

      </section>

      <section class="todos-quizz">

      </section>
    </main>
  `
}

function inserirMeuQuiz() {
  document.querySelector(".meu-quizz").innerHTML = `
    <div class="quizz-vazio ">
      <p>Você não criou nenhum quiz ainda :(</p>
      <button onclick="criarBotao()">Criar Quizz</button>
    </div>
    <div class="quizz-completo oculto">
      <div class="titulo">
        <h3>Seus Quizzes</h3>
        <ion-icon name="add-circle" onclick="criarBotao()"></ion-icon>
      </div>
      <div class="tela1-quizzes">
        <div class="tela1-quizz simpsons" onclick="selecionarQuizz(this)">
          <p>
            Acerte os personagens corretos dos Simpsons e prove seu amor!
          </p>
        </div>
        <div class="tela1-quizz de-boas" onclick="selecionarQuizz(this)">
          <p>
            O quanto você é de boas?
          </p>
        </div>
      </div>
    </div>
  `
}

function inserirTodosQuizz() {
  let espacoTodosQuizz = document.querySelector(".todos-quizz");
  espacoTodosQuizz.innerHTML = `
    <h3>Todos os Quizzes</h3>
    <div class="tela1-quizzes" id="tela1-quizzes">

    </div>
    `

    let cardQuizzes = document.querySelector("#tela1-quizzes");
    cardQuizzes.innerHTML = ``;      
    
    for (let i = 0; i < 6; i ++) {
      if(quizzUsuario.indexOf(quizzGeral[i].id) === -1){
        titulo = quizzGeral[i].title;
        imagemURL = quizzGeral[i].image;
        idQuizz = quizzGeral[i].id;
        levelQuizz = quizzGeral[i].levels;
        questionsQuizz = quizzGeral[i].questions;
  
        cardQuizzes.innerHTML += `
        <div class="tela1-quizz ${idQuizz}" onclick="selecionarQuizz(this)" id="${i}">
          <img
            src=${imagemURL}
            alt=""
          />
          <p>
            ${titulo}
          </p>
        </div>
        `;
        armazenarQuizz()
      }
    }
}

function criarBotao() {
  tela1.classList.add("oculto");
  tela3.classList.remove("oculto");
}

function selecionarQuizz(quizz) {
  tela1.classList.add("oculto");
  tela2.classList.remove("oculto");
  idElemento = quizz.id
  console.log(quizzesSelecionados[idElemento])
  inserirTituloTela2();
  inserirQuestoes();
}

function pegarTodosQuizz() {
  const promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");
  promisse.then(carregarQuizz);
  promisse.catch(tratarErro);
}

function carregarQuizz(response) {
  quizzGeral = response.data 
  renderizarMensagemTela1();
}

function tratarErro() {
  console.log("Deu ruim (Erro)");
}

function armazenarQuizz() {
  quizzesSelecionados.push({id: idQuizz, titulo: titulo, imagem: imagemURL, questions: questionsQuizz, levels: levelQuizz})
}

function inserirTituloTela2() {
  document.querySelector(".tela2").innerHTML = "";

  document.querySelector(".tela2").innerHTML += `
  <div class="topbar">
    <h1 class="tela2-h1">BuzzQuizz</h1>
  </div>
  <div class="banner">
      <div class="titulo">
          <h3>${quizzesSelecionados[idElemento].titulo}</h3>
      </div>
      <img
          src=${quizzesSelecionados[idElemento].imagem}
          alt=""
      />
  </div>

  <div class="pagina">
  
  </div>
  `
}

function inserirQuestoes () {
  let questoes = quizzesSelecionados[idElemento].questions;
  for (let i = 0; i < questoes.length; i++) {
    document.querySelector(".pagina").innerHTML += `
    <div class="tela2-container">
      <div class="cabecalho">
          <p class="estilo1">${questoes[i].title}</p>
      </div>
      <div class="quizzes">
          <div class="caixa margem">
            <div class="quizz">
              <img src=${questoes[i].answers[0].image}/>
            </div>
              <p class="estilo2">${questoes[i].answers[0].text}</p>
          </div>
          <div class="caixa">
              <div class="quizz">
                <img src=${questoes[i].answers[1].image}/>
              </div>
              <p class="estilo2">${questoes[i].answers[1].text}</p>
          </div>
      </div>
      <div class="quizzes">
          <div class="caixa margem">
              <div class="quizz">
                <img src=${questoes[i].answers[0].image}/>
              </div>
              <p class="estilo2">${questoes[i].answers[0].text}</p>
          </div>
          <div class="caixa">
              <div class="quizz">
                <img src=${questoes[i].answers[1].image}/>
              </div>
              <p class="estilo2">${questoes[i].answers[1].text}</p>
          </div>
      </div>
    </div>
    `
  }
} 

pegarTodosQuizz();
