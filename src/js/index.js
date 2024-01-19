// window.alert("oi") /*Exibe uma mensagem em tela*/

//Forma ruim de pegar dados de um botão: Vai lá no html e coloca um id="chopper"
//Aqui no javascript basta pegar o elemento pelo id:
//console.log(document.getElementById('chopper'));

//A melhor maneira de fazer isso é percorrer a classe botão. Como ela já é uma lista funciona. Dá pra adicionar mais no html que aqui já fica pronto o código...
const botoes = document.querySelectorAll('.botao');
//console.log(botoes);

//Pega a div que contém a classe .integrante e guarda em uma var.
const integrantes = document.querySelectorAll(".integrante");

//adicionar a classe "selecionado" no botão que foi clicado da página, assim ele fica descatado pelo css:
// botoes é uma UL no html, então é uma lista, por isso usa-se o foreach.
//Pegar os botões no JS pra poder verificar quando o usuário clica em cima de um deles:
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //console.log("Clicou no botão!");
        //Verificar se já existe um botão selecionado e remove sua seleção:
        desselecionarBotao();
        desselecionarintegrante();//remove a classe "selecionado" injetada no html, ai aparece certinho o que fizer abaixo!

        //Adiciona no botão que acabou de ser clicado a classe "selecionado"! Assim o CSS deixa ele destacado.
        botao.classList.add("selecionado");

        //**********************************************************************************************************
        //Este é o poder do javascript! Ele consegue editar o html mesmo após ele já ter sido carregado na página!!!!
        //**********************************************************************************************************
        //O índice passado no parâmetro é para poder saber qual botão foi clicado e mudar a imagem do integrante.
        integrantes[indice].classList.add("selecionado"); //injeto o selecionado para que o css trate e posiciona na imagem!
    });
});

function desselecionarintegrante() {
    const integranteSelecionado = document.querySelector(".integrante.selecionado");
    integranteSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

