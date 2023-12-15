function calcular(){

const peso = Number(document.querySelector('#peso').value)
const altura = Number(document.querySelector('#altura').value)
const imc = peso / altura**2
let resultado = document.querySelector('.resultado')

if(!peso || !altura){
    window.alert('Digite valores válidos')
    
} else{

if(imc >= 40){
    return resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
}  if(imc >= 35){
    return resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
}  if(imc >= 30){
    return resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
}  if(imc >= 25){
    return resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
}  if(imc >=18.5){
    return resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`
}  else {
    return resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do normal)`
}

}
}
const form = document.querySelector('.form')
form.addEventListener('submit', function(e){
    e.preventDefault();
})