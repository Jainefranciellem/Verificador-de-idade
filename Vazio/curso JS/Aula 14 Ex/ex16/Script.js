function contador(){
   let ini = document.getElementById('initxt')
   let fim = document.getElementById('fimtxt')
   let passo = document.getElementById('passotxt')
   let res = document.getElementById('res')
   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      window.alert('[ERRO] insira os dados corretamente')
   } else{   
      res.innerHTML = 'contando:'
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if(i < f){
         for(let c= i; c <= f; c += p ){
            res.innerHTML += `${c} `
         }
      } else if( i > f){
         for(let c= i; c >= f; c -= p){
            res.innerHTML += `${c} `
         }
      }
        
   }
}