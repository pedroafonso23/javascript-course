function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>' // Break Row (html)
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido. Considerando passo 1.')
            p = 1
        }
        if (i < f) { // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else { // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

/*
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
*/