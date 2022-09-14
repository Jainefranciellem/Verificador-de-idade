function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >=0 && idade <15){
                //criança
                img.setAttribute('src', 'imagens/criança H.jpg')
            } else if(idade < 45){
                //jovem ou adulto
                img.setAttribute('src', 'imagens/jovem H.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso H.jpg')
            }
        } else if(fsex[1].checked){
            gênero = 'mulher'
            if(idade >=0 && idade <15){
                //criança
                img.setAttribute('src', 'imagens/criança M.jpg')
            } else if(idade <45){
                //jovem ou adulto
                img.setAttribute('src', 'imagens/jovem M.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosa M.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
   
} 