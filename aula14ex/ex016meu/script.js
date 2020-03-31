function contar() {
    var initxt = document.getElementById('ini')
    var ini = Number(initxt.value)
    var fimtxt = document.getElementById('fim')
    var fim = Number(fimtxt.value)
    var pastxt = document.getElementById('pas')
    var pas = Number(pastxt.value)
    var res = document.getElementById('res')
    res.innerHTML = `Contando: `
    if ((initxt.value.length != 0) && (fimtxt.value.length != 0) && (pastxt.value.length != 0)) {
        while (ini <= fim) {
            res.innerHTML += `${ini}`
            if (pas == 0) {
                pas = 1
                alert ('Passo invalido. Considerando passo igual a 1.')
            }
            ini += pas
            if (ini <= fim) {
                res.innerHTML += ' - '
            }
        }
        if ((ini - pas) != fim) {
            res.innerHTML += ' - #'
        }
    } else {
        res.innerHTML = 'Impossivel contar. Preencha todos os campos!'
    }
}