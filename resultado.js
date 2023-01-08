function verifique_identidade(callback) {
//LocalStorage
  let Nome = localStorage.getItem("Nome");
  let About = localStorage.getItem("About");
  let Contato = localStorage.getItem("Contato");
  let Nascimento = localStorage.getItem("Nascimento");
  let Escolaridade = localStorage.getItem("Escolaridade");

//Errors 
  if (
    Nome === null ||
    About === null ||
    Contato === null ||
    Nascimento === null ||
    Escolaridade === null
  ) {
    alert("Nenhum dado disponível para Gerar o currículo");
    let body = document.getElementsByTagName("body")[0];
    body.innerHTML = "Error [Base de Dados]";
  } else {
    return gerarCurriculo( {Nome, About, Contato, Nascimento, Escolaridade});
  }
}

function gerarCurriculo(dados){
//DOM
  let title = document.querySelector("#titulo");
  title.innerHTML = dados.Nome;

  let about = document.querySelector(".about");
  about.innerHTML = dados.About;
  
  let Nascimento = document.querySelector('.date');
  Nascimento.innerHTML = dados.Nascimento;

  let Escolaridade = document.querySelector('.Escolaridade');
  Escolaridade.innerHTML = dados.Escolaridade;

  let Contato = document.querySelector('.contato');
  Contato.innerHTML = dados.Contato;

}