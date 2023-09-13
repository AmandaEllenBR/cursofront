// onmouseenter = "azul()"
//onmouseout = "vermelho()"
//onmousedown="Clicou()"
//onmouseup="soltou()


//const div  =  document.getElementById('quadrado')

//div.addEventListener('mouseenter', azul)
//div.addEventListener('mouseout', vermelho)
//div.addEventListener('mousedown', Clicou)
//div.addEventListener('mouseup', soltou)

//function azul(){
 //   div.style.backgroundColor = 'blue'
  //}

  //function vermelho(){
   // const div  =  document.getElementById('quadrado')
  
 //   div.style.backgroundColor = 'red'
 // }
  
 // function Clicou(){
   //   const div  =  document.getElementById('quadrado')
  
   //   div.innerHTML = `
    //  <ul>
      //   <li> item 1 </li>
      //    <li> item 2 </li>
      //    <li> item 3 </li>
      //    <li> item 4 </li>
      //    <li> item 5 </li>
      //  </ul>  
      //`
 // }
  
 // function soltou(){
   //   const div  =  document.getElementById('quadrado')
   //   div.innerText = ''
 // }
  




  const soma = document.getElementById('soma')
  const div = document.getElementById('resposta')

  soma.addEventListener('click', somar)

  function somar(){
      var valor1 = document.getElementById('n1').value
      var valor2 = document.getElementById('n2').value
      var resposta = Number(valor1) + Number(valor2)
            output.innerText = resposta
    }
    
    
  