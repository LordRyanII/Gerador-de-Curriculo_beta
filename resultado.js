function gerar_Curriculo(){
        //Dom
    let header = document.querySelector('#nome');
    let date = document.querySelector('.nascimento p'); //pega a classe e o paragrafo junto
    let escola = document.querySelector('.escolaridade p');
    let cont = document.querySelector('.ctt p')

    let resultado_nome = localStorage.getItem('Nome');
    let res_escolaridade = localStorage.getItem('Escolaridade');
    let date_local = localStorage.getItem('Nascimento');
    let contato = localStorage.getItem('Contato')

    //atribuiçoes
    header.innerHTML = resultado_nome;
    date.innerHTML = date_local;
    escola.innerHTML = res_escolaridade
    cont.innerHTML = contato

  }

