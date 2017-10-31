function Salmon (x, y, board) {

  this.xPosition = x;
  this.yPosition = y;
  this.board = board;
  this.life = 40;

  this.template = document.createElement('div');
  this.template.className = "salmon";
  document.querySelector('.riverBoard').appendChild(this.template);

  this.updatePos();
}

Salmon.prototype.move = function() {
  var x = this.xPosition;
  var y = this.yPosition;
  this.board[x][y] = 'X';

  if(this.board[x-1] != null && this.board[x-1][y] === 'R') {
    this.xPosition = x-1;
    return this.updatePos();
  } else if (this.board[x][y+1] != null && this.board[x][y+1] === 'R') {
    this.yPosition = y+1;
    return this.updatePos();
  } else if (this.board[x+1] != null && this.board[x+1][y] === 'R') {
    this.xPosition = x+1;
    return this.updatePos();
  } else if (this.board[x][y-1] != null && this.board[x][y-1] === 'R') {
    this.yPosition = y-1;
    return this.updatePos();
  }
  this.template.remove();
};

Salmon.prototype.updatePos = function() {
  setTimeout( function() {
    this.template.style.left = 10 * this.yPosition + '%';
    this.template.style.top = 10 * this.xPosition + '%';
    this.move();
  }.bind(this), 500);

};

//Trabajando

Salmon.prototype.receiveDamage = function() {
  var x = this.xPosition;
  var y = this.yPosition;
  this.board[x][y] = 'X';

  if(this.board[x-1] != null && this.board[x-1][y] === 'B') {
    this.life = this.life-10;
  } else if (this.board[x][y+1] != null && this.board[x][y+1] === 'B') {
    this.life = this.life-10;
  } else if (this.board[x+1] != null && this.board[x+1][y] === 'B') {
    this.life = this.life-10;
  } else if (this.board[x][y-1] != null && this.board[x][y-1] === 'B') {
    this.life = this.life-10;
  }
};

Salmon.prototype.checkDeath = function (damage) {
  this.life -= damage;
  if (this.life>0){ //continúa moviéndose
  } else {
    //actualizar vida
  }
};
