
function soma(n1, n2){
    return n1 + n2;
}

var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);

//alert(soma(5, 10));


/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count <=5; count++){
    console.log(count);
    //alert(count);
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    //alert(count);
    count = ++;
}
*/
/*
var idade = prompt("Qual a sua idade");
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade");
}
*/


/*
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Anielton José";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frade.replace("Japão","Brasil"));