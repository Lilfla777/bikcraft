const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}
links.forEach(ativarLinks)


//Ativar itens do Orçamento
const parametros = new URLSearchParams(location.search);
parametros.forEach(ativarProduto);
function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if (elemento) {

        elemento.checked = true;
    }

}
ativarProduto();

//Menu acordion (perguntas frequentes);
const pergunta = document.querySelectorAll(".js-faq dt");
const resposta = document.querySelectorAll(".js-faq dd")

function faq() {
    

   
    function activeResp(index) {

        resposta[index].classList.toggle("ativar");

    }

  

    pergunta.forEach((itemPerg, index) => {
        itemPerg.addEventListener('click', function () {
            activeResp(index);
        })
    })
}
faq();


//galeria de bicicletas
const galeria = document.querySelector(".bicicletas-img img");
console.log(galeria)
const galeriaContainer = document.querySelectorAll


