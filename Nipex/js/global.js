const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        // Alternar a visibilidade do conteúdo ao clicar no cabeçalho
        content.classList.toggle('active');

        // Rodar o ícone de seta
        item.classList.toggle('active');
    });
});


document.getElementById('cpfUsuario').addEventListener('input', function (e) {
    var cpf = e.target.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = cpf;
});