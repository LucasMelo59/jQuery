function inserePlacar() {
    var tabela = $(".placar").find("tbody");
    var usuario = "lucas";
    var numPalavras= $("#contador-palavras").text();
   
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
       tabela.append(linha, numPalavras);  // append adiociona dps na tabela
       // tabela.prepend(linha) adiociona antes na tabela
   
   }

   function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
    }



    function novaLinha(usuario, palavras) {
        var linha = $("<tr>");
        var colunaUsuario = $("<td>").text(usuario);
        var colunaPalavras = $("<td>").text(palavras);
        var colunaRemover = $("<td>");
        var link = $("<a>").addClass("botao-remover").attr("href","#");
        var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
    
        link.append(icone);
        colunaRemover.append(link);
        linha.append(colunaUsuario);
        linha.append(colunaPalavras);
        linha.append(colunaRemover);
        return linha;
    }
    