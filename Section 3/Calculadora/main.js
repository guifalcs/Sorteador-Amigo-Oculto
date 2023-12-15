function criaCalculadora(){
    //retornar um objeto
    return {

    display: document.querySelector('.display'),

    btnClear: document.querySelector('.btn-clear'),

    iniciar(){
        this.cliqueBotoes()
    },

    realizaConta(){
        let conta = this.display.value

        try{
        conta = eval(conta) //nuca se deve usá-lo, é perigoso por acessar as informações do cliente.

        if(!conta){
            alert('Conta inválida')
            return
        }

        this.display.value = String(conta)
        } catch(e){
          alert('Conta inválida')
          return
        }
    },

    clearDisplay(){
         this.display.value = ''
    },

    apagaUm(){
         this.display.value = this.display.value.slice(0,-1)
    },

    cliqueBotoes(){
         document.addEventListener('click', (e) => {
            const el = e.target

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay(el.innerText)
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm()
            }

            if(el.classList.contains('btn-eq')){
                this.realizaConta()
            }
         })
     },

     btnParaDisplay(valor){
        this.display.value += valor
     }
    }
}

const calculadora = criaCalculadora()
calculadora.iniciar()

