let num = [8, 3, 0, 1]
num[4] = 2
num.push(5)

console.log(num)
console.log(`O primeiro valor do vetor: ${num[0]}`)
console.log(`Comprimento do vetor: ${num.length}`)

num.sort()
console.log(num)

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}.`)
}

// Melhor jeito pra mostrar o array

for(let pos in num) {
    console.log(num[pos])
}

// Buscar valores dentro de arrays
let p = num.indexOf(5)
if (p == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor ${num[p]} esta na posicao ${p}`)
}
