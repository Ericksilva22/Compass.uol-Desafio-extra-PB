/* variável para texto que apresenta o nome do usuário */
let nome_tela = document.querySelector('.titulo-usuario');

/* Ao carregar a tela */
window.addEventListener('load', () => {
    let nome_usuario = sessionStorage.getItem('nome');
    nome_tela.innerText = `Welcome, ${nome_usuario}`; /* Apresentando welcome + nome do usuário na tela */
});