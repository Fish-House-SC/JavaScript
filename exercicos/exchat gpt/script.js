const inputTarefa = document.getElementById('tarefa');
const btnAdicionar = document.getElementById('adicionar');
const lista = document.getElementById('lista');

btnAdicionar.addEventListener('click', () => { 
    adicionarTarefa();
});

inputTarefa.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();

    if (tarefa !== '') {
        const item = document.createElement('li');
        item.textContent = tarefa;

        // Marcar como concluída
        item.addEventListener('click', () => {
            item.classList.toggle('concluida');
        });

        // Botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.addEventListener('click', () => {
            lista.removeChild(item);
        });

        item.appendChild(btnRemover);
        lista.appendChild(item);

        inputTarefa.value = ''; // Limpa o campo de entrada
    }
}

