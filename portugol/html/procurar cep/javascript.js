//const Procurar = document.querySelector('#Procurar')
const logradouro = document.getElementById('logradouro')
const complemento = document.getElementById('complemento')
const bairro = document.getElementById('bairro')
const localidade = document.getElementById('localidade')
const uf = document.getElementById('uf')
const ddd = document.getElementById('ddd')
const inputCep = document.getElementById('input-cep')

inputCep.addEventListener('blur', (evento)=>{

    evento.preventDefault()
    let cep = inputCep.value

     fetch (`https://viacep.com.br/ws/${cep}/json/`)
     .then(response => console.log(response.text()))   

    cep = cep.replace("-", "")

   if(cep.length !=8){
      alert('CEP invalido')
    }
    else{
        fetch (`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            logradouro.value = data.logradouro
            complemento.value = data.complemento
            bairro.value = data.bairro
            localidade.value = data.localidade
            uf.value = data.uf
            ddd.value = data.ddd
        })
        .catch(err => {
            alert( err+ "cep nao encontrado")
        })
    }

})