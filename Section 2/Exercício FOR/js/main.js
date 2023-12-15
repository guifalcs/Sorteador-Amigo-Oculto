const objetos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'footer', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container')

for(let i = 0; i < objetos.length; i++){
    let tag = objetos[i].tag; //string
    let texto = objetos[i].texto; //string
    
    let novaTag = document.createElement(tag) //cria a tag
    novaTag.innerText = texto //coloca o texto na tag
    
    container.appendChild(novaTag) //insere a tag na section class "Container"

}

/*poderia usar desestruturação de objetos. Ex:
let {tag, texto} = elementos[1]*/