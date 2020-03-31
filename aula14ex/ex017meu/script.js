function calcular() {
    var txtnum = document.getElementById('txtnum')
    var num = txtnum.value
    var res = document.getElementById('res')
    res.innerHTML = ''
    for (i = 0; i <= 10; i++) {
        res.innerHTML += `${num} x ${i} = ${num*i}<br>`
    }
}