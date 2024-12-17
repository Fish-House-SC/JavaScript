function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var FAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (FAno.value.length == 0 || FAno.value > ano ) {
        window.alert('[ERRO] Verifique os datos e tente novamente:')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(FAno.value)
        var genero = ''
        var img = document.createElement('img')  // inserindo imagems em JS
        img.setAttribute('id','foto')            // Insereindo imagem em JS
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','criancah.png')
            } else if (idade < 21 ){
                img.setAttribute('src','boy.png')
                //Jovem
            }else if (idade < 60){
                img.setAttribute('src','man.png')
                //Adulto
            } else{
                img.setAttribute('src','oldman.png')
                //Idose
            }
                

        } else{
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                img.setAttribute('src','crincam.png')
                //criança

            } else if (idade < 21 ){
                img.setAttribute('src','girl.png')
                //Jovem
            }else if (idade < 60){
                img.setAttribute('src','woman.png')
                //Adulto
            } else{
                img.setAttribute('src','oldwoman.png')
                //Idose
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} idade`
        res.appendChild(img)   // inserindo img na tela
        
    }

}