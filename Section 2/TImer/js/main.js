const iniciar = document.querySelector('#iniciar')
const parar = document.querySelector('#parar')
const reiniciar = document.querySelector('#reiniciar')
let timer = document.querySelector('.timer')
let segundos = 0
let minutos = 0
let horas = 0
let contando;
let iniciou;
let segundosFormatados, minutosFormatados, horasFormatadas;

iniciar.addEventListener('click', function(){
   clearInterval(contando)
   contando = setInterval(contar, 1000)
   iniciou = true
   
})

function contar() {
   segundos++;
   if (segundos == 60) {
       minutos++;
       segundos = 0;
   }
   if (minutos == 60) {
       horas++;
       minutos = 0;
   }
   if (horas == 24) {
       horas = 0;
       minutos = 0;
       segundos = 0;
   }

   segundosFormatados = segundos < 10 ? `0${segundos}` : `${segundos}`;
   minutosFormatados = minutos < 10 ? `0${minutos}` : `${minutos}`;
   horasFormatadas = horas < 10 ? `0${horas}` : `${horas}`;

   timer.innerHTML = horasFormatadas + ':' + minutosFormatados + ':' + segundosFormatados;
}

reiniciar.addEventListener('click', function(){
    clearInterval(contando)
    iniciou = false
    segundos = 0
    minutos = 0
    horas = 0

    timer.innerHTML = '00:00:00'
    iniciar.innerHTML = '<strong>Iniciar</strong>'
} )

parar.addEventListener('click', function (){
    clearInterval(contando)
    if(iniciou === true){
      iniciar.innerHTML = '<strong>Continuar</strong>'
    }
    
    iniciou = false
})