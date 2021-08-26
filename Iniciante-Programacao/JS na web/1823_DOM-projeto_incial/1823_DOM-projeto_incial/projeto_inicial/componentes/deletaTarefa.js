const deletarTarefa = (atualiza, id) => {
    const index = id
   const tarefaCadastrada = JSON.parse(localStorage.getItem('tarefas'))
   tarefaCadastrada.splice(index, 1)
   localStorage.setItem('tarefas', JSON.stringify(tarefaCadastrada))
   atualiza()
}

const botaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return botaoDeleta
}

export default botaoDeleta