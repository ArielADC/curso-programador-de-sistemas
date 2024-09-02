function ehPalindromo(str) {
    // Remover caracteres não alfanuméricos e converter para minúsculas
    const stringLimpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let esquerda = 0;
    let direita = stringLimpa.length - 1;
    
    while (esquerda < direita) {
        if (stringLimpa[esquerda] !== stringLimpa[direita]) {
            return false;
        }
        esquerda++;
        direita--;
    }
    
    return true;
}

// Testes
console.log(ehPalindromo("racecar")); 
console.log(ehPalindromo("hello"));  
console.log(ehPalindromo("madam"));   
