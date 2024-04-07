function contar() {
    var ini = parseInt(document.getElementById('txti').value)
    var fim = parseInt(document.getElementById('txtf').value)
    var passo = parseInt(document.getElementById('txtp').value)
    var res = document.getElementById('res')

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br> '
        if (passo <=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        // Contagem crescente
        if (ini < fim) {           
            for(var c = ini; c <= fim; c+= passo) {
                res.innerHTML += ` ${c} \u{1F449}` 
        }
        // Contagem decrescente
        } else {
            for (c = ini; c >= fim; c-= passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }           
        }
    }
    res.innerHTML += `\u{1F3C1}`
}