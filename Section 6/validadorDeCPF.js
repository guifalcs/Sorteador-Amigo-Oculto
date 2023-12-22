 let cpf = '1'
 
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

console.log(validaCpf(cpf))