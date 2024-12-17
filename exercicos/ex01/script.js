//alert('ola')
function carregar() {
    var mgs = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   
    var hora = data.getHours()
    mgs.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        window.document.body.style.background = '#C6B79A'
   } else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = "#D7692A"
   } else{
        img.src ='img/noite.png'
        document.body.style.background = "#0A2627"
   }
}
