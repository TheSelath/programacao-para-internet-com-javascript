function soma(n1,n2){
 return n1 + n2;
}

function validaIdade(idade){
    if(idade >= 18){
        var validar = true;
    }else{
        validar = false
    }  
    return validar;
}

var idade = prompt ("Qual sua idade? ")
console.log(validaIdade(idade));
//alert(soma(5,10));

