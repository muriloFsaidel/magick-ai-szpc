/*
    O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botão de aplicar filtros do HTML e mandar pro JS.
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que pessoa digitou
*/

// P1
const botaoFiltrar = document.querySelector('.btn-filtrar');

//P2
botaoFiltrar.addEventListener('click', function () {
    //P3
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoSelecionado = document.querySelector('#preco').value;

    //P4
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoSelecionado !== '';
        const cartaNaoBateComFiltroDePreco = parseFloat(precoCarta) > parseFloat(precoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePreco) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    })
})