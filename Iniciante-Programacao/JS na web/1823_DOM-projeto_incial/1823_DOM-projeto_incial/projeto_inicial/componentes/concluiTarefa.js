const concluirTarefa = (atualiza, id) => {
    const tarefaCadastrada = JSON.parse(localStorage.getItem('tarefas'))

    tarefaCadastrada[id].concluida = !tarefaCadastrada[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastrada))

    atualiza()
}

const botaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui
}



export default botaoConclui