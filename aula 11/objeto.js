const inputTarefa = document.getElementById('tarefa')
const btnAdicionar = document.getElementById('adicionar')
const lista = document.getElementById('lista')

btnAdicionar.addEventListener('click', () =>{
    const tarefa = inputTarefa.value.trim()

    if(tarefa !==''){
        const item = document.createElement('li')
        item.textContent = tarefa

        // Marcar como concluída
        item.addEventListener('click', ()=>{
            item.classList.toggle('concluida')
        })


        // botão de remover

        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.addEventListener('click',() =>{
            lista.removeChild(item)
        })
        item.appendChild(btnRemover)
        lista.appendChild(item)

        inputTarefa.value = ''
    }
})

