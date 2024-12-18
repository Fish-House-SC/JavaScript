let valores = ['B', 'C', 'A', 9, 12, "k"]

/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
valores.sort()
for(let pos in valores ){
    console.log(`A posição${pos} tem o valor ${valores[pos]}`)
}


