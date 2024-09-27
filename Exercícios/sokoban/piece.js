function piece(x, y) {
    this.x = x;
    this.y = y;
 
    this.nextPosition = function (keycode) {
       let { x, y } = this;
       if (keycode === "ArrowUp") x--;
       if (keycode === "ArrowDown") x++;
       if (keycode === "ArrowLeft") y--;
       if (keycode === "ArrowRight") y++;
       return { x, y };
       
    }
 
    this.moveTo = function (position, element) {
       this.x = position.x;
       this.y = position.y;
       element.style.top = calculaPosicao(this.x);
       element.style.left = calculaPosicao(this.y);
    }
 }
 
 function verifyPosition(position) {
    let { x, y } = position;
 
    return boardMap[x][y] !== '#';
 }