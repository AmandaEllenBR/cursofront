//const container = document.querySelector('.container')

//console.log(container)

//const div = document.createElement('div')

//div.classList.add('quadrado')

//container.appendChild(div)

//const circulo = document.createElement('div')

//circulo.classList.add('circulo')

//container.appendChild(circulo)

//const botao = document.querySelector('button')

//botao.addEventListener('click', ()=>{
 //   circulo.classList.toggle('hide')
//})

const item = Array.from(document.querySelectorAll('li'))

console.log(item)

//item[2].innerText = 'amanda'

//const item2 = [...document.getElementsByTagName('li')]

//console.log(item2)

for(let i = 0; i < item.length; i++){
    item[i].innerText = 'Aula top javascript'
}

item.forEach((elemento)=>{
    elemento.innerText = 'Amanda Ellen'
})

item.map((elemento)=>{
    elemento.innerText = 'Gatao'
})