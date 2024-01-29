/*
Objetivo 1 - quando usuario cliar no botão de seleção de 
plataformas deve abrir uma caixa com os botões de seleção de plataforma
     passo 1 - Pegar o botão de seleção de plataformas no JS pra 
     poder verificar quando o usario clicar em cima dele 

     passo 2 - pegar o elemento do conteudo que preisa ser mostrado

     passo 3 - pegar o clique do usuario no JS

     Passo 4 - quando o usuario clicar, adicionar a classe ativo na linguagem de 
     plataformas dentro do botão para que o conteudo dele apareça 


Objetivo 2 - caso a lista de botões de plataformas ja esteja 
aparecendo e o usuário clicar nem cima do  botão , o conteúdo 
deve ser escondido

    passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo
    pra que ele esconda o conteúdo novamente
       

*/


    //Objetivo 1 - quando usuario cliar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

    // passo 1 - Pegar o botão de seleção de plataformas no JS prapoder verificar quando o usario clicar em cima dele 
    const botão = document.querySelector(".btn-plataforma");

    // passo 2 - pegar o elemento do conteudo que preisa ser mostrado
    const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
    console.log(elementoPlataformas);

    // passo 3 - pegar o clique do usuario no JS
    botão.addEventListener("click", () => {

    
   // Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar nem cima do  botão , o conteúdo deve ser escondido

   //passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
  // const botãoEstaAberto = elementoPlataformas.classList.contains("ativo");
        elementoPlataformas.classList.toggle("ativo");

   //if(botãoEstaAberto) {
     //  elementoPlataformas.classList.remove("ativo");
  // }else{
        
        // Passo 4 - quando o usuario clicar, adicionar a classe ativo na linguagem de  plataformas dentro do botão para que o conteudo dele apareça 
      // elementoPlataformas.classList.add("ativo");
  // }  

});




    


