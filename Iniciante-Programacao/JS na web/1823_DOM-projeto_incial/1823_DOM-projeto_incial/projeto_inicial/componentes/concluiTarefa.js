const botaoConclui = () => {
    const quaquerlNomeVariavel = document.createElement('button')

    quaquerlNomeVariavel.classList.add('check-button')
    quaquerlNomeVariavel.innerText = 'concluir'
    quaquerlNomeVariavel.addEventListener('click', concluirTarefa)

    return quaquerlNomeVariavel
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta =botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default botaoConclui