const btn = document.getElementById('surpresaBtn');
const mensagem = document.getElementById('mensagemEscondida');

btn.addEventListener('click', () => {
    mensagem.classList.toggle('hidden');
});

