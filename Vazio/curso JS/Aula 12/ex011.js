var agora = new Date()
var diaSem = agora.getDay()

diaSem = 5
/*
 0= domingo
 1= segunda
 2= terça
 3= quarta
 4= quinta
 5= sexta
 6= sabado
*/
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[ERRO] Dia inválido')
    
}