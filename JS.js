var titulo=document.querySelector('.Titulo');
titulo.textcontent="Lista de encomendas";



var linhastabela = document.querySelectorAll(".item");

for (i = 0 ; i < linhastabela.length; i++){
   
    linhastabela[i].querySelector(".preco-total").textContent=linhastabela[i].querySelector(".preco-unitario").textContent * linhastabela[i].querySelector(".quantidade").textContent;


}