function saudacao() {
    console.log(`olá mundo`)
};

saudacao()

function saudacao2(){
    return `Olá meu Mundo`
}

let saudacaoV = saudacao2()
console.log(saudacaoV)

function saudacao3(nome){
    console.log( `Olá meu amigo ${nome}`)
}
saudacao3(`Fagner`)