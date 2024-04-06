function contar() {
    var num1 = document.getElementById('iinicio')
    var num2 = document.getElementById('ifim')
    var res = document.getElementById('res')
    var soma = num1 + num2
    res.innerHTML(`a respota é${soma}`)
}