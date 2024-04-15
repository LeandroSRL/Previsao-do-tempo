/* Passo 1 -> Saber quando o botão foi clicado no botão, quando o botão for clicado, chamar a função
Passo 2 -> Pegar o que esta dentro do INPUT
Passo 3 -> Ir no servidor e pegar as informações do tempo atualizadas
Passo 4 -> Organizar as informações que chegaram
Passo 5 -> Colocar as informações na tela*/

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) +"°C"
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity +"%"
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())

    // AWAIT = ESPERE
    // FETCH -> Ferramenta do JavaScript para acessar servidor.
    // THEN = ENTÂO
    // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)

    console.log(dados)
    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

/*
Clica no BOTÃO
    --> CHAMA A FUNÇÃO cliqueiNoBotao()
    --> Vai no INPUT e pega o que está la dentro
    --> Passar a cidade para o servidor
    Math.floor --> Arredonda um valor.
*/



