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
       cells[K].append(playerElement);
   };

   this.verifyPosition = function() {
       return this.x >= 0 && this.x < 4 && this.y >= 0 && this.y < 4;
   };
}

const player = new Player(0, 0);
const cells = document.querySelectorAll('.cell');
const jogador = document.querySelector('.jogador');

window.addEventListener("keydown", function (event) {
   console.log(event.code);
   player.move(event.code, cells, jogador);
});
