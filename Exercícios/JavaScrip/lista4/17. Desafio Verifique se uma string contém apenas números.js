function contemApenasNumeros(str) {
 
    const regex = /^\d+$/;
   
    return regex.test(str);
}


console.log(contemApenasNumeros("12345")); 
console.log(contemApenasNumeros("abc123"));  
console.log(contemApenasNumeros("67890"));