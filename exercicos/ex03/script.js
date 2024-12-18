function contar(){

   let inic = document.getElementById('inic')
   let fim = document.getElementById('fim')
   let pass = document.getElementById('pass')
   let res = document.getElementById('res')

   if(inic.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
    alert("[ERRO] Falta dados !")
   }else{
        res.innerHTML = 'contando'
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(p <=0){
            alert('Passo invalido')
            p=1
        }
            if(i < f){
                //contagem crescente
            for( let c = i; c <=f; c +=p){
                res.innerHTML += `${c} \u{1F61B}`
            }
            
            } else{
                for(let c =i; c >= f; c-= p ){
                    res.innerHTML += `${c} \u{1F61B}`
                }
            }
    }
  

}