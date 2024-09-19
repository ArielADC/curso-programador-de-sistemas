let x
let y

const jogador = document.querySelector('.jogador');
console.log(jogador);

jogador.addEventListener("click", function(){
   window.alert("clicou no jogador");
})

window.addEventListener("keydown",function nextPositon (event){
//window.alert("presionou tecla");
nextPositon(event.code);
})
function nextPositon('keycode'){
if (keycode == "ArrowUp" ) x--;

if (keycode == "ArrowDown" ) x++;

if (keycode == "ArrowLeft" ) y--;

if (keycode == "ArrowRight" ) y++;
console.log(event)
}