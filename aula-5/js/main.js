function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado Por Clicar!</b>"; //innerHTML injeta html
    //console.log(document.getElementById("agradecimento"));
    
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    // window.open("https://web.digitalinnovation.one/users/Selath/"); //abre link em outra aba
    window.location.href = "https://web.digitalinnovation.one/users/Selath/"; //abre link na mesma janela
}

// função com utilização do proprio elemento dentro do HTML
function trocar(elemento){
    elemento.innerHTML = "Obrigado por Passar o Mouse!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse Aqui!"
}

/* função de alteração com documento e ID
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar Texto")
}
*/

/*
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui!";
}

*/

function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}