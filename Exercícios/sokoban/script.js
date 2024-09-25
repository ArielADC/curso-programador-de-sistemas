const player = new Player(0, 0);
const cells = document.querySelectorAll('.cell');
const jogador = document.querySelector('.jogador');

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

jogador.style.top = "64px"
jogador.style.left = "64px"


window.addEventListener("keydown", function (event) {
   console.log(event.code);
   player.move(event.code, cells, jogador);
});


function Player(posX, posY) {
   this.x = posX;
   this.y = posY;

   this.move = function(keycode, cells, playerElement) {
       if (keycode === "ArrowUp") this.x--;
       if (keycode === "ArrowDown") this.x++;
       if (keycode === "ArrowLeft") this.y--;
       if (keycode === "ArrowRight") this.y++;
       
       console.log(keycode, this);
       const K = this.x * 8 + this.y;

     
   };

   this.verifyPosition = function() {
       return this.x >= 0 && this.x < 4 && this.y >= 0 && this.y < 4;
   };
}

function calculaPosicao(qtd) {
   return  `${qtd + DIST_SALTO + MARGIN_FIX } px`;
}

console.log(calculaPosicao(0, 64) === "0px");
console.log(calculaPosicao(1, 64) === "64px");
console.log(calculaPosicao(2, 32) === "64px");
console.log(calculaPosicao(10, 60) === "600px");
console.log(calculaPosicao(-3, 45) === "-135px");