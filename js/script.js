//DOM

// CRIEI UMA VARIAVEL KEY QUE RECEBE A CHAVE DA API;
const key = "6f133538bee7b923b59fff3eb89ceb6a";
//ESTANCIANDO TODOS OS OBJETOS DO HTML...;
const botao = document.querySelector('.botao-busca');
const cidade = document.querySelector('.input-cidade');
const textoCidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp');
const imagem = document.querySelector('.img-previsao');
const previsao = document.querySelector('.texto-previsao');


//EVENTO//

botao.addEventListener('click',clickBotao);


//FUNÇÕES//

//primeira função{

function clickBotao(){ 
//passando o valorDigitado para função buscarCidade;
    const valorDigitado = cidade.value
    buscarCidade(valorDigitado)
// }
}

//segunda função (API){}

async function buscarCidade(valorDigitado){

    //url da api passando variavel valor digitado como parametro!!
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorDigitado}&appid=${key}&units=metric&lang=pt_br`).then(resposta=>resposta.json());//toda resposta traduz usando o then transformando em uma variavel para o metodo json;

    console.log(dados);

    mostrarNaTela(dados)
}// }


//Terceira Função -- exibição da API na tela{

function mostrarNaTela(dados){

    textoCidade.innerHTML = "Tempo em " + dados.name
    temperatura.innerHTML = Math.floor(dados.main.temp) + "°C"
    
    imagem.src=`https://openweathermap.org/img/wn/03d.png`
}