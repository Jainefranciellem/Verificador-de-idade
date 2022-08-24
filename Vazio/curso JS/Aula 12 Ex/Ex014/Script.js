function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()  
    var minutos = data.getMinutes()
    var hora = data.getHours()
    
    if(hora >= 0 && hora< 12){
        msg.innerHTML = `agora são ${hora}:${minutos}, tenha um bom dia!`
        img.src = 'manha.png'
        document.body.style.backgroundColor = 'rgba(220, 185, 11, 0.808)'
    } else if(hora >=12 && hora < 18){
        msg.innerHTML = `agora são ${hora}:${minutos}, tenha uma boa tarde!`
        img.src = 'tarde.png'
        document.body.style.backgroundColor =  'rgba(173, 62, 11, 0.808)' 
    }else if(hora > 18){
        msg.innerHTML = `agora são ${hora}:${minutos}, tenha uma boa noite!`
        document.body.style.backgroundColor = ' rgba(10, 14, 140, 0.808)'
        img.src = 'noite.png'
    }
}

