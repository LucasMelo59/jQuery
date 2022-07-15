var frase = jQuery(".frase").text()
var tamanho =  frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(tamanho);