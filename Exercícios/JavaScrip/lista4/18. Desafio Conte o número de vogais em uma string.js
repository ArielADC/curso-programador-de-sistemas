function contavogais(palavra){
    let comtador = 0;
 for (let i=0; i< palavra. length; i++){
     
    let char = palavra .charAt(i);

    if(char == "a") comtador++;
    if(char == "e") comtador++;
    if(char == "i") comtador++;
    if(char == "o") comtador++;
    if(char == "u") comtador++;
 } 
    


    return comtador;
}
console.log (contavogais("hello")==2);
console.log (contavogais("javaScript")==3);
console.log (contavogais("aeiao")==5);
console.log (contavogais("xyz")==0);