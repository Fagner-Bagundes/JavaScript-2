function colocaBarra() {
    console.log("__________________________");
    return
}
let num1 = 20
console.log(`APRENDENDO A MANIPULAR NUMBERS`);
console.log(` `);
console.log(`Transformando um number: ${num1} da variável num1 em string com toString()`);
console.log( num1.toString(),`=`, typeof(num1.toString()));
colocaBarra();
console.log(`colocanco mostrando o numero de variavel em binário`)
console.log(num1.toString(2));
colocaBarra();
let num2 = 12.9034490230433
console.log(`deixando o número ${num2} com duas casas decimias`);
console.log(num2.toFixed(2));
colocaBarra()
console.log(`Descobrindo se o número da variável num1(${num1}) é um numero inteiro`);
console.log(`o numero ${num1} é inteiro?: ${Number.isInteger(num1)}`);
colocaBarra();
const numFalso = 8
console.log(`Descobrindo se o numero da váriavel numFalso(${numFalso}) é um NaN, um numero invalido`);
console.log(`O numero ${numFalso} é um numero inválido?: ${isNaN(numFalso)}`);












