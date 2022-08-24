function tabuada(){
    let tab = document.getElementById('seltab')
    let num = document.getElementById('numtxt')
    if(num.value.length == 0){
        window.alert('Digite um número!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c=0; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
    

}