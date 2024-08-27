function paridade(n){
 let reposta;
 let resto = n % 2;
if(resto== 1){
	reposta= "inpar"
}else{
	reposta="Par"
}
return reposta;
}
console.log(paridade(4))
 console.log(paridade(7))
console.log(paridade(0))
console.log(paridade(5))
