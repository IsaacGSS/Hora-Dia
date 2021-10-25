function info() { 
    var msg = document.getElementById('div_one')
    var img = document.getElementById('img')
    var data = new Date() 
    var hora = data.getHours()
   
    var largura = window.screen.width;

    msg.innerHTML = `Agora é ${hora} horas.`

        if(hora > 0 && hora <= 12) {
        if(largura < 420){
            img.src = 'imagens/manha_img-p.png'
            msg.innerHTML += " Bom-Dia"
            document.body.style.backgroundColor =  '#fdba38'
        } else if (largura > 420){
            img.src = 'imagens/manha_img.png'
            msg.innerHTML += " Bom-Dia"
            document.body.style.backgroundColor =  '#fdba38'
        } else(alert('ERROR!'))
        
    } else if(hora > 12 && hora <= 18) {
        if(largura < 420){
            img.src = "imagens/tarde_img-p.png"
            msg.innerHTML += ' Boa-Tarde'
            document.body.style.backgroundColor =  '#e1b77b'
        } else if (largura > 420){
            img.src = "imagens/tarde_img.png"
            msg.innerHTML += ' Boa-Tarde'
            document.body.style.backgroundColor =  '#e1b77b'
        } else {alert('ERROR!')}
        
    } else {
        if(largura < 420){
            img.src = "imagens/noite_img-p.png" 
            msg.innerHTML += ' Boa-Noite'
            document.body.style.backgroundColor =  '#866ba2'
        } else if(largura > 420){
            img.src = "imagens/noite_img.png" 
            msg.innerHTML += ' Boa-Noite'
            document.body.style.backgroundColor =  '#866ba2'
        } else(alert('ERROR!'))
            
    }

}

