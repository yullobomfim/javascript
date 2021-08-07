function carregar() {
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.get()
    
    if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = '../img/sol.png';
        msg.innerHTML = `Bom dia, são ${hora} .`
        
    } else if (hora >= 12 && hora < 18) {
        
        //boa tarde
        img.src = '../img/sol.png'
        msg.innerHTML = `Boa tarde, são ${hora} .`
        
    } else {
        //boa noite
        img.src = `../img/lua.png`
        msg.innerHTML = `Boa noite, são ${hora} .`
    }

}