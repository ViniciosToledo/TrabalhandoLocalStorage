let formulario = document.getElementById('forms')

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let dados = {
        nome: nome,
        email: email,
    }
    let dadosConvert = JSON.stringify(dados)
    localStorage.setItem('dados',dadosConvert)
})