//recebe os dados do DOM

function dados() {
    const nome = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    const sobre = document.querySelector('#about').value;
    const escola = document.querySelector('#escola').value;
    const celular = document.querySelector('#number').value;

    return {
      Nome: nome,
      About: sobre,
      Escolaridade: escola,
      Contato: celular,
      Nascimento: date
    };
  }

//Cria as validações
  function Verifique(callback){
    const dadosObj = dados();
    const {Nome, About, Escolaridade, Contato, Nascimento} = dadosObj;
  
    if(Nome.trim() === '' ||
     Nome === null ){
      alert('Favor, preencher campo nome');
      Nome.style.color = 'red'
  
      return Nome.value = ''

    } else if(
      Nome.length <= 5 || 
      Nome.length >= 50){

      alert('Padrão não permitido, favor verifique!');

    } else if( Nascimento === '' || 
      Nascimento == null || 
      Escolaridade === ''|| 
      Escolaridade === null || 
      Contato === '' || 
      Contato === null || 
      About === null || 
      About === ''){

      alert('[Erro] Há dados incompletos verifique os seus dados');
    
    }
    else if (dadosObj){ //envia para o localStorage 
      console.log(dadosObj);
      setInterval(function(){
        location.href = 'resultado.html'
        localStorage.setItem('Nome', dadosObj.Nome);
        localStorage.setItem('About', dadosObj.About);
        localStorage.setItem('Contato', dadosObj.Contato);
        localStorage.setItem('Nascimento', dadosObj.Nascimento);
        localStorage.setItem('Escolaridade', dadosObj.Escolaridade);
      },100)
      
    }
  }
//Envia e verifica
  function enviar() {
    Verifique(function(){
      const lista = dados();
      console.log(lista);
    });
    
  }
  

  

  


