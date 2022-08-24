let num = document.getElementById('txtnum')
let lista =document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
        
    
}
function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)

    }   
     else {
    window.alert('valor inválido ou já encontrado na lista.')
   }
} 
function finalizar(){

    if(valores. length == 0){
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
    }
}
