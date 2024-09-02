function removerEspacos(str) {
  
    return str.replace(/\s+/g, (match) => '');
}


console.log(removerEspacos("hello world")); 
console.log(removerEspacos(" a b c ")); 
console.log(removerEspacos(" ")); 
