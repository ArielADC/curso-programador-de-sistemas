function saoAnagramas(str1, str2) {
    
    if (str1.length !== str2.length) {
        return false;
    }

   
    function ordenarString(str) {
        return str.split('').sort().join('');
    }

    
    const str1Ordenada = ordenarString(str1);
    const str2Ordenada = ordenarString(str2);

  
    return str1Ordenada === str2Ordenada;
}


console.log(saoAnagramas("listen", "silent"));
console.log(saoAnagramas("hello", "world"));
console.log(saoAnagramas("evil", "vile"));