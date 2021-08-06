let botao = document.getElementById("btn-confirm")
botao.addEventListener('click',clicar)

function clicar(){

    event.preventDefault()

   const cpf = document.getElementsByTagName('input')[0]
   const senha = document.getElementsByTagName('input')[1]
   
   const dados = [
        {
        cpf:cpf.value,
        senha:senha.value,
        },
    ];
    
    const dadosStr = JSON.stringify(dados)
    localStorage.setItem('dados',dadosStr)
    
}
