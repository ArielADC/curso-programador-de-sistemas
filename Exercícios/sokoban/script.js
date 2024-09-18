let x
let y

const jogador = document.querySelector('.jogador');
console.log(jogador);

jogador.addEventListener("click", function(){
   window.alert("clicou no jogador");
})

window.addEventListener("keydown", function(event){
//window.alert("presionou tecla");
console.log(event);

if (event.code == "ArrowUp" ){
     x += -1;
}

if (event.code == "ArrowRight" ){
    x += -1;
}

if (event.code == "ArrowDown" ){
    x += -1;
}

if (event.code == "ArrowLeft" ){
    x += -1;
}
})