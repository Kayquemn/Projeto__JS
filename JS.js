var titulo=document.querySelector('.Titulo');
titulo.textcontent="Lista de encomendas";



var linhastabela = document.querySelectorAll(".item");




for (i = 0 ; i < linhastabela.length; i++){
   var qtde = linhastabela[i].querySelector(".quantidade");
    var valor = linhastabela[i].querySelector(".preco-unitario");

    if(qtde.textContent<1 || isNaN(qtde.textContent)){
        //Quantidade NOK, avisa o usuário
        // clientes[count].querySelector(".quantidade").textContent = "QTDE INVALIDA!"; 
        qtde.textContent="QTDE INVALIDO";
        qtde.style.color="red"
        //Clientes[count].style.color="red";
        
    }else{
        linhastabela[i].querySelector(".preco-total").textContent=calculaTotal(valor.textContent,qtde.textContent);
    }

    // linhastabela[i].querySelector(".preco-total").textContent=linhastabela[i].querySelector(".preco-unitario").textContent * linhastabela[i].querySelector(".quantidade").textContent;
    if(valor.textContent<1 || isNaN(valor.textContent)){
        //Quantidade NOK, avisa o usuário
        // clientes[count].querySelector(".quantidade").textContent = "QTDE INVALIDA!"; 
        valor.textContent="VALOR INVALIDO";
        linhastabela[i].style.backgroundColor = "red"
        //Clientes[count].style.color="red";
        
    }
else{
    linhastabela[i].querySelector(".preco-total").textContent=calculaTotal(valor.textContent,qtde.textContent);
}
}




//Criando função para calcular o valor total da encomenda 
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}
