
var hora = agora.gethours()
console.log(`Agora são axatamente ${hora}horas`)

if (hora < 12) {
    console.log(`Bom Dia`)
}else if (hora <=18) {
    console.log(`Boa Tarde`)
}else {
    console.log('Boa Noite!')
}