var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adiciona valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            media = soma / 2
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

       

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados </p>`
        res.innerHTML += `<p> O maior número informado foi o ${maior}</p>`
        res.innerHTML += `<p> O menor número informado foi o ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores foi ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`


    

    }   
}   