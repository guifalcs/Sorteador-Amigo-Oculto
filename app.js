class AdicionaParticipante{
    constructor(nome){
        this.nome = document.querySelector('.inputname')
        this.lista = document.querySelector('.listParticipantes')
        this.adicionar()
    }

    adicionar(){
        let nome = this.nome.value.trim()

        for(let erro of document.querySelectorAll('.error-text')){erro.remove()}

        if(!nome){this.criaErro(this.nome, 'Digite um nome para incluir um novo participante');return}

        let participante = document.createElement('li')
        participante.innerText = nome
        participante.classList.add('participantes')
        this.lista.appendChild(participante)
        this.nome.value = ''

      }

    criaErro(campo, msg){
        let div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)

    }
}

function tiraPlaceholder(){
    const input = document.querySelector('.inputname');

    // Remover o placeholder quando o input recebe foco
    input.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

// Restaurar o placeholder se o input estiver vazio ao perder o foco
    input.addEventListener('blur', function() {
    if (!this.value.trim()) {
    this.setAttribute('placeholder', '  Digite um nome');
  }
});
}

tiraPlaceholder()

let botao = document.querySelector('.adicionar')
botao.addEventListener('click', ()=>{
    const adicionar = new AdicionaParticipante()
})


/*Perguntas a se fazer:

-Pode adicionar dois nomes completamente iguais?
-Como vai ficar disposta a lista?
-Como vai ser o display dos nomes inseridos?
-O alerta está bom?

*/