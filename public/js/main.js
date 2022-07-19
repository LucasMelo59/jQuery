var tempoInicial = $("#tempo").text();
var campo = $(".campo-digitacao")

$(document).ready(function(){
atualizaTamanhoFrase();
inicializContadores();
cronometro();

}) // a função faz o que está dentro do escopo quando a pagina é carregada


// tambem funciona assim:
//*$(
//funcion(){
//atualizaTamanhoFrase();
//cronometro();
//}
//)

function atualizaTamanhoFrase() {
var frase = jQuery(".frase").text()
var tamanho =  frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(tamanho);
}



function inicializContadores() {

campo.on("input", function(){
    var conteudo = campo.val();
    //A função .val() é para alterar os valores dos campos de input, então se queremos preencher um <input type="text"> com um valor específico, é ela quem vamos usar.
    var qtdPalavras = conteudo.split(/\S+/).length -1;
       $("#contador-palavras").text(qtdPalavras);
       $("#contador-caracters").text(conteudo.length);
       //A função .text() do jQuery serve para modificar o conteúdo de texto das tags, então se queremos alterar o texto de um <h1>, devemos utilizá-la.
});
}
// evento de focus : marcado de texto presente la, campo em focu com click ou marcador
//É um evento muito utilizado quando queremos oferecer ao usuário uma experiência melhor de uso dos nosso websites, como por exemplo sugerir um autocomplete de um campo assim que ele ganhar foco.
// setInterval faça isso(function), de tanto em tanto tempo(os 1000)

function cronometro(){
var tempoR = $("#tempo").text();
campo.one("focus", function(){
// função on funciona varias vezes podendo executar o msm evento de acordo com a função, e a one excuta aquele evento uma unica vez de acordo com a função
var ser = setInterval(function(){
tempoR--;
$("#tempo").text(tempoR);
if(tempoR < 1) {
clearInterval(ser); // clearInterval recebe um parametro sendo este o id do set Interval que tem como função parar o setInterval
finalizaJogo();
}
}, 1000);
campo.attr("")
//E por último, a função .attr(), como o próprio nome sugere é para alterar os atributos de elemento, como os atributos rows e col de uma textarea.
});
}
var frase = $(".frase").text();
campo.on("input", function() {
var digitado = campo.val();
var comparavel = frase.substr(0, digitado.length);
if(digitado == comparavel) {
console.log("oi")
campo.addClass("campo-correto");
campo.removeClass("campo-errado")
}else {
console.log("ola")
campo.addClass("campo-errado");
campo.removeClass("campo-correto")
}




})
$("#botao-reiniciar").click(function() {
    campo.attr("disabled", false);
    campo.val("");
     $("#contador-palavras").text("0");
     $("#contador-caracters").text("0");
     $("#tempo").text(tempoInicial);
     campo.toggleClass("campo-desativado");
      cronometro();
      campo.removeClass("campo-correto")
      campo.removeClass("campo-errado")
})






function finalizaJogo() {
    inserePlacar();
    campo.toggleClass("campo-desativado");
    campo.attr("disabled",true)
}

