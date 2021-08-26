import { carregaTarefa } from "./carregaTarefa.js"
import botaoConclui from "./concluiTarefa.js"
import botaoDeleta from "./deletaTarefa.js"

export const handleNovoItem = (evento) => {
    evento.preventDefault()
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')

    const dataFormatada = data.format('DD/MM/YYYY')
    const concluida = false

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "
    carregaTarefa()
}

export const Tarefa = ({valor, horario, concluida}, id) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if(concluida){
        tarefa.classList.add('done')
    }
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoConclui(carregaTarefa, id))
    tarefa.appendChild(botaoDeleta(carregaTarefa, id))
    
    return tarefa

}