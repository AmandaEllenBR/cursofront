const itemLista = [...document.querySelectorAll('li')]

const botao = document.querySelector('button')

const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')

botao.addEventListener('click', clicou)

function clicou(){
    console.log('fui clicado')
}


itemLista.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('selecionando')

    })
})

//for(let item = 0; item < itemLista.length; item++){
 //   itemLista[item].addEventListener('click', clicou2)
//}

function clicou (){
    console.log('fui clicado')
}

//function clicou2 (){
 //   console.log('fui clicado pelo 2')
//}

botao.addEventListener('click', ()=>{
    const primeiroLista = document.querySelector('.primeiro')
    const segundoLista = document.querySelector('.segundo')

    const selecionandoPrimeiro = [...primeiroLista.querySelectorAll('.selecionando')]
    const selecionandoSegundo = [...segundoLista.querySelectorAll('.selecionando')]

    selecionandoPrimeiro.forEach((item)=> {
    item.classList.remove('selecionando')
        lista2.appendChild(item)
        
    })

    selecionandoSegundo.forEach((item)=> {
        item.classList.remove('selecionando')
        lista1.appendChild(item)
    })

})