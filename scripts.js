// Alterar tamanho da fonte
function ajustarTamanhoFonte(tamanho) {
    document.body.style.fontSize = tamanho + 'px';
}

// Alterar contraste para preto e branco
function alterarContraste() {
    document.body.classList.toggle('contraste-alto');
}

// Função para filtrar notícias com base na busca
function filtrarNoticias() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const noticias = document.querySelectorAll('.noticia');

    noticias.forEach(noticia => {
        const titulo = noticia.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(filter)) {
            noticia.style.display = '';
        } else {
            noticia.style.display = 'none';
        }
    });
}

// Adicionar eventos aos botões
document.getElementById('botaoAumentarFonte').addEventListener('click', function() {
    ajustarTamanhoFonte(18);
});

document.getElementById('botaoDiminuirFonte').addEventListener('click', function() {
    ajustarTamanhoFonte(14);
});

document.getElementById('botaoContraste').addEventListener('click', alterarContraste);

// Adicionar evento ao campo de busca
document.getElementById('searchInput').addEventListener('input', filtrarNoticias);