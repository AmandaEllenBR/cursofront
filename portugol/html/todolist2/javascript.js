const btnAdicionar = document.getElementById('Adicionar')
const valorTarefa = document.getElementById('texto-input')

btnAdicionar.addEventListener('click', (evento)=>{
    evento.preventDefault();

    if (valorTarefa.value == ''){
        alert('Digite uma tarefa valida')
    } else{

        const tarefa = criarTarefa(valorTarefa.value)
        renderizarTarefa(tarefa)
    }

   valorTarefa.valeu = ''

 
})
const listaTarefa = document.querySelector('ul')
   listaTarefa.addEventListener('click', (elemento)=>{

    const itemClicado = elemento.target
    if(itemClicado.classList.contains('excluir')){
        itemClicado.parentElement.parentElement.remove()

    }

    if(itemClicado.classList.contains('realizar')){
        itemClicado.parentElement.parentElement.classList.toggle('concluido')
    
    }

    console.log(itemClicado)

   })

function criarTarefa (valorTarefa){
    const li = document.createElement('li')

    

li.innerHTML = ` ${valorTarefa}<div>
<button class="excluir"></button>
<button class="realizar"></button>
</div>`

return li
   

}

function renderizarTarefa(tarefa){
    const listaTarefa = document.querySelector('ul')
    listaTarefa.appendChild(tarefa)
}