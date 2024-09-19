function Player(posX, posY) {
   this.x = posX;
   this.y = posY;
}
const player = new Player(0, 0);
const cells = document.querySelectorAll('.cell');
console.log(cells);

const jogador = document.querySelector('.jogador');
console.log(jogador);

jogador.addEventListener("click", function () {
   window.alert("clicou no jogador");
})

window.addEventListener("keydown", function (event) {
   // console.log(event);
   console.log(event.code);
   // console.log(event.ctrlKey);
   nextPositon(event.code);
})

function nextPositon(keycode) {
   if (keycode == "ArrowUp") player.x--;

   if (keycode == "ArrowDown") player.x++;

   if (keycode == "ArrowLeft") player.y--;

   if (keycode == "ArrowRight") player.y++;

   console.log(keycode, player);
   const K = player.x * 8 + player.y;
   cells[K].append(jogador);
}

function movePlayer(Positon){

}

function verifyPositon(Positon) {

}