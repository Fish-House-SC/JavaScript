let num = [5,8,12,9,3]
let soma = (50+8)
let s = Number(soma)
num[5] = s   // adiciona elemento a variavel na chave desejada
num.push(9)  // adiciona o elemento no final da variavel
num.length
//num.sort() //colaca os variaveis em ordem
console.log(`nosso vetor é o ${num} ${num.length}`)
console.log(`${num.sort()}`)
console.log(`o segundo valor do vetor é ${num[1]}`)
let pos = num.indexOf(2)
if(pos == -1){
    console.log(`O numero não foi encontrado`)
}else{
    console.log(`O valor 2 esta na posição ${pos}`)
}
console.log(soma)
