// Recursao: funcao chama ela mesma

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(6))


/*

n! = n x (n-1)!
1! = 1

*/