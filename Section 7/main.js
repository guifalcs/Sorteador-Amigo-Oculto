function validaCpf (cpf){
    if(cpf.length < 11) return false
    if(cpf == '11111111111') return false
    let cpfLimpo = cpf.replace(/\D+/g, '') //string
    let numerosParaPrimeiroTeste = cpfLimpo.slice(0, -2) //string
    let primeiroDigito = primeiroTeste(numerosParaPrimeiroTeste) //number
    //
    let numerosParaSegundoTeste = numerosParaPrimeiroTeste + primeiroDigito.toString() //concatenou --> string
    let segundoDigito = segundoTeste(numerosParaSegundoTeste)//number
    //
    let cpfCorreto = numerosParaSegundoTeste + segundoDigito.toString()
   
    if(cpfLimpo === cpfCorreto){return true} else{return false}
   }
   
   function primeiroTeste(numerosParaPrimeiroTeste){
        
      let cpfArray = Array.from(numerosParaPrimeiroTeste)
      let pesos = [10,9,8,7,6,5,4,3,2]
   
      let primeiroCalculo = cpfArray.reduce((ac, valor, index) => {
      return ac + valor * pesos[index]
       }, 0)
   
       let primeiroDigito = 11 - (primeiroCalculo % 11);
        
       primeiroDigito = primeiroDigito > 9? 0 : primeiroDigito
   
       return primeiroDigito
       
   }
   
   function segundoTeste(numerosParaSegundoTeste){
   
       let cpfArray = Array.from(numerosParaSegundoTeste)
       let pesos = [11,10,9,8,7,6,5,4,3,2]
   
       let segundoCalculo = cpfArray.reduce((ac, valor, index) => {
           return ac + valor * pesos[index]
            }, 0)
   
       let segundoDigito = 11 - (segundoCalculo % 11);
   
       segundoDigito = segundoDigito > 9? 0 : segundoDigito
   
       return segundoDigito
   }

class ValidaFormulario{


    constructor(){
       this.formulario = document.querySelector('.formulario')
       this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', (e) =>{
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas){
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true
        const senha = document.querySelector('.senha')
        const confirmaSenha = document.querySelector('.confirmaSenha')

        if(senha.value !== confirmaSenha.value){
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(confirmaSenha,'Campos senha e repetir senha precisam ser iguais' )
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres')
        }
        return valid
    }

    camposSaoValidos(){
        let valid = true

        for(let erro of this.formulario.querySelectorAll('.error-text')){
            erro.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML
            
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode ficar em branco`)
                valid = false
            }
            
            if(campo.classList.contains('cpf')){
                if(!this.validadorCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }
    }

    return valid
}

validaUsuario(campo){

    const usuario = campo.value
    let valid = true
    if(usuario.length < 3 || usuario.length > 12){
        this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
        valid = false
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
        valid = false;
      }

    return valid
}
    
validadorCPF(campo) {
    const cpf = validaCpf(campo.value)

    if(!cpf){
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

    

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const form = new ValidaFormulario()