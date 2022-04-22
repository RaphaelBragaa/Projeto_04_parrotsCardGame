const meuQuiz = document.querySelector(".meu-quizz");
const todosQuizz = document.querySelector(".todos-quizz");
const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");
const tela3 = document.querySelector(".tela3");

function renderizarMensagemTela1() {
  inserirTela1();
  inserirMeuQuiz();
  inserirTodosQuizz();
}

function inserirTela1 () {
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
  document.querySelector(".todos-quizz").innerHTML += `
    <h3>Todos os Quizzes</h3>
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
  `
}

function criarBotao() {
  tela1.classList.add("oculto");
  tela3.classList.remove("oculto");
}

function selecionarQuizz(quizz) {
  tela1.classList.add("oculto");
  tela2.classList.remove("oculto");
}

renderizarMensagemTela1();

