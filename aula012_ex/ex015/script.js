function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if  (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique ps dados e tente novamente!')
    } else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'img/bebe-homem.png')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-homem.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}