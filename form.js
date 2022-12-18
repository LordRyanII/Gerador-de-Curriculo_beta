    const passed_buttom = window.document.querySelector('#enviar-button');
    passed_buttom.addEventListener('click', function verifique() {
    let name = window.document.querySelector('#name').value;
    let date = window.document.querySelector('#date').value;
    let alfa = window.document.querySelector('#alfa').value;
    let contate = window.document.querySelector('#contato').value;
    //DOM (top)
    const dados = {
        Nome: name,
        nascimento: date,
        nivel_de_conhecimento: alfa,
        Contato: contate
    }
    const {Nome, nascimento, nivel_de_conhecimento, Contato} = dados
    console.log(dados);

    if(Nome.trim() === '' && Nome == null) {
    window.alert('[Erro] Preencha o nome')
    }else if(Nome.length <= 4 || Nome.length >= 37) {
    window.alert('[Erro] Nome inválido verifique o seu nome')
    }else if(nascimento === '' || nascimento == null || nivel_de_conhecimento === ''|| nivel_de_conhecimento === null || Contato === '' || Contato === null){
    window.alert('[Erro] Há dados incompletos verifique os seus dados')
    }else if(dados){
    localStorage.setItem('Nome' , JSON.stringify(Nome))
    localStorage.setItem('Nascimento' , JSON.stringify(nascimento))
    localStorage.setItem('Escolaridade' , JSON.stringify(nivel_de_conhecimento))
    localStorage.setItem('Contato' , JSON.stringify(Contato))
    passed_buttom.innerHTML = "Redirecionando..."
    location.href = 'pag02.html'
    }

}) 


