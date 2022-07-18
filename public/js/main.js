var frase = jQuery(".frase").text()
var tamanho =  frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(tamanho);

var campo = $(".campo-digitacao")

campo.on("input", function(){
    var conteudo = campo.val();
    //A função .val() é para alterar os valores dos campos de input, então se queremos preencher um <input type="text"> com um valor específico, é ela quem vamos usar.
    var qtdPalavras = conteudo.split(/\S+/).lenght;
       $("#contador-palavras").text(qtdPalavras);
       $("contador-caracters").text(conteudo.lenght);
       //A função .text() do jQuery serve para modificar o conteúdo de texto das tags, então se queremos alterar o texto de um <h1>, devemos utilizá-la.
});
// evento de focus : marcado de texto presente la, campo em focu com click ou marcador
//É um evento muito utilizado quando queremos oferecer ao usuário uma experiência melhor de uso dos nosso websites, como por exemplo sugerir um autocomplete de um campo assim que ele ganhar foco.
// setInterval faça isso(function), de tanto em tanto tempo(os 1000)

var tempoR = $("#tempo").text();
campo.one("focus", function {
// função on funciona varias vezes podendo executar o msm evento de acordo com a função, e a one excuta aquele evento uma unica vez de acordo com a função
var ser = setInterval(function(){
tempoRestante--;
$("#tempo-digitacao").text(tempoRestante);
if(tempoRestante < 1) {
campo.attr("disabled",true)
clearInterval(ser); // clearInterval recebe um parametro sendo este o id do set Interval que tem como função parar o setInterval
}
}, 1000);
campo.attr("")
//E por último, a função .attr(), como o próprio nome sugere é para alterar os atributos de elemento, como os atributos rows e col de uma textarea.
});