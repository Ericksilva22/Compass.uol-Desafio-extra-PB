/* Criando variáveis */
let entrada = document.querySelector('.entrada-nome');
let enviar = document.querySelector('.botao-enviar');

/* Ao clicar no botão de enviar o nome */
enviar.addEventListener('click', ()=> {

    let nome_usuario = entrada.value;

    sessionStorage.setItem('nome', nome_usuario); /* permite utilizar o nome digitado na pagina seguinte */
    window.location = '../pages/welcome-Chris.html';
})


