//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./sample.csv').toString();

const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);

console.log(headers);
console.log(conteudo);
const json = parteDificil(headers, conteudo);

console.table(json, ["Filme", "Ano", "Gênero"]);

/////////////////////////////

function quebraLinhas(csv) {
    let linhas = csv.trim().split('\n');
    return linhas;
}

function separaColunas(linha) {
    let colunas = linha.trim().split(';')
    return colunas;
}

function separaConteudo(lines) {
    let obj ={};

    for(let j=0; j<headers.length; j++);{
        let titulo = headers [j];
        let coluna = linha[j];
        
        obj[titulo] = coluna;
    }

    return obj;
}

function parteDificil(headers,conteudo) {
    const result = [];

    for(let i=0; i<conteudo.length; i++) {
    const linhatabla = conteudo [i];
    const obj = constroiObjeto(headers,linhatabla);
    
    result.push(obj);

 
    }

    return result;
}
