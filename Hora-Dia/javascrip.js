function info() { 
    var msg = document.getElementById('div_one')
    var img = document.getElementById('img')
    var data = new Date() 
    var hora = data.getHours()

    msg.innerHTML = `Agora é ${hora} horas.`

    if(hora > 0 && hora <= 12) {
        img.src = 'imagens/manha_img.png'
        msg.innerHTML += " Bom-Dia"
        document.body.style.backgroundColor =  '#fdba38'
    } else if(hora > 12 && hora <= 18) {
        img.src = "imagens/tarde_img.png"
        msg.innerHTML += ' Boa-Tarde'
        document.body.style.backgroundColor =  '#e1b77b'
    } else {
        img.src = "imagens/noite_img.png" 
        msg.innerHTML += ' Boa-Noite'
        document.body.style.backgroundColor =  '#866ba2'
    }
}

