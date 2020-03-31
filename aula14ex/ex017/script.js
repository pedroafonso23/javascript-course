function calcular() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}



/*
function calcular() {
    var txtnum = document.getElementById('txtnum')
    var num = txtnum.value
    var res = document.getElementById('res')
    res.innerHTML = ''
    for (i = 0; i <= 10; i++) {
        res.innerHTML += `${num} x ${i} = ${num*i}<br>`
    }
}
*/