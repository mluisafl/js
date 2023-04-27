function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = "foto-dia.png"
        document.body.style.background  = '#4a5a35'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src= "foto-tarde.png"
        document.body.style.background = '#542c16'
    } else {
        //BOA NOITE!
        img.src= 'foto-noite.png'
        document.body.style.background = '#155474'
    }
}