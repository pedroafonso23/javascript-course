let v = []

function adicionar() {
    let numtxt = document.getElementById('txtnum')
    let num = Number(numtxt.value)
    let sel = document.getElementById('sel')
    if (num < 1 || num > 100 || num.length == 0 || v.indexOf(num) != -1) {
        window.alert('[ERRO] Numero invalido ou ja esta na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        //item.value = `tab${}`
        sel.appendChild(item)
        v.push(num)
    }
}

function finalizar() {
    let res = document.getElementById('res')
    var soma = 0
    v.sort()
    for(let c = 0; c < v.length; c++) {
        soma += v[c]
    }
    res.innerHTML = `Ao todo, temos ${v.length} numeros cadastrados.`
    res.innerHTML += `<br>O maior valor informado foi ${v[v.length - 1]}.`
    res.innerHTML += `<br>O menor valor informado foi ${v[0]}.`
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}.`
    res.innerHTML += `<br>A media dos valores digitados eh ${soma/v.length}.`
}