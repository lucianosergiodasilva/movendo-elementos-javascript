// Seleciona os elementos relevantes
const container1 = document.querySelector('#container1')
const container2 = document.querySelector('#container2')
const elementos = document.querySelectorAll('.item')
const btnIncluir = document.querySelector('#btnIncluir')
const btnRemover = document.querySelector('#btnRemover')
const itensContainer = document.querySelector('#itensContainer')

// Percorre a lista de ítens 
elementos.forEach((item) => {

    // Adiciona um evento de clique no ítem para selecionar o ítem
    item.addEventListener('click', selecionarItem)
})

// Seleciona o ítem
function selecionarItem(evento) {

    // Pega o target do ítem
    const item = evento.target

    // Adiciona/Remove a classe '.selecionado' no ítem
    item.classList.toggle('selecionado')
}

// Adiciona evento de clique no botão 'btnIncluir' para incluir ítem
btnIncluir.addEventListener('click', incluirItem)

// Incluir ítem
function incluirItem() {

    // Seleciona lista com a classe '.selecionado'
    const itensSelecionados = document.querySelectorAll('.selecionado')

    // Percorre a lista de elementos selecionados
    itensSelecionados.forEach((item) => {

        // Adiciona o ítem no 'container2'
        container2.appendChild(item)

        // Remove a classe '.selecionado'
        item.classList.remove('selecionado')
    })

    // Verifica se o checkbox estiver marcado
    if(itensContainer.checked == 1){
        // Desabilita o checkbox
        itensContainer.checked = 0
    }
}



// Adiciona evento de clique no botão 'btnRemover' para remover ítem
btnRemover.addEventListener('click', removerItem)

// Remover ítem
function removerItem() {
    const itensSelecionados = document.querySelectorAll('.selecionado')
    itensSelecionados.forEach((item) => {
        container1.appendChild(item)
        item.classList.remove('selecionado')
    })
    // Verifica se o checkbox estiver marcado
    if(itensContainer.checked == 1){
        // Desabilita o checkbox
        itensContainer.checked = 0
    }
}

// Selecionar todos os ítens (input checkbox)
itensContainer.addEventListener('click', selecionarTodosItem)

// Seleciona o ítem
function selecionarTodosItem(evento) {

    // Pega o target do input
    const checkbox = evento.target

    // Se o input estiver com checked
    if (checkbox.checked) {

        // Percorre os ítens 
        elementos.forEach((item) => {

            // Adiciona a clesse '.selecionado' nos ítens
            item.classList.add('selecionado')
        })
    }
    // Se o input não estiver com checked
    else {
        // Percorre os ítens 
        elementos.forEach((item) => {

            // Remove a clesse '.selecionado' nos ítens
            item.classList.remove('selecionado')
        })
    }
}

