/* 
  O que preciso fazer? - quando clicar no botão do personagem na lista tenho que:
  1 - Pegar os botões de personagens
  2 - Adicionar um evento de click 
  3 - Verificar se existe algum botão de personagem com a class "selecionado" e remover
  4 - Adicionar a class "selecionado" ao botão clicado e mostrar o personagem correspondente
  5 - Pegar a descricao dos personagens
  6 - Verificar se existe alguma descrição de personagem com a class "selecionada" e remover
  7 - Adicionar a class "selecionado" a descriçao do personagem correspondente ao botão clicado e mostrar o a descrição correspondente.
*/

const pegarBotoesPersonagens = document.querySelectorAll(".botao");
const pegarDescricaoPersonagem = document.querySelectorAll(".personagem");

pegarBotoesPersonagens.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    desselecionarBotaoPersonagem();
    desselecionarDescricaoPersonagem();

    botao.classList.add("selecionado");
    pegarDescricaoPersonagem[indice].classList.add("selecionado");

  });

});

function desselecionarBotaoPersonagem() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

function desselecionarDescricaoPersonagem() {
  const descricaoPersonagemSelecionado = document.querySelector('.personagem.selecionado');
  descricaoPersonagemSelecionado.classList.remove("selecionado");
}

