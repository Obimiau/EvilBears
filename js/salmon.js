function Salmon (x, y, board, life) {

  this.xPosition = x;
  this.yPosition = y;
  this.board = board;
  this.life = life;
  this.path = [];

  this.template = document.createElement('div');
  this.template.className = "salmon";
  document.querySelector('.riverBoard').appendChild(this.template);

  this.updatePos();
}

Salmon.prototype.move = function() {
  var x = this.xPosition;
  var y = this.yPosition;
  this.path.push(x+"-"+y);

  if(this.board[x-1] != null && this.path.indexOf((x-1)+"-"+y) == -1 && this.board[x-1][y] === 'R') {
    this.xPosition = x-1;
    return this.updatePos();
  } else if (this.board[x][y+1] != null && this.path.indexOf(x+"-"+(y+1)) == -1 && this.board[x][y+1] === 'R') {
    this.yPosition = y+1;
    return this.updatePos();
  } else if (this.board[x+1] != null && this.path.indexOf((x+1)+"-"+y) == -1 && this.board[x+1][y] === 'R') {
    this.xPosition = x+1;
    return this.updatePos();
  } else if (this.board[x][y-1] != null && this.path.indexOf(x+"-"+(y-1)) == -1 && this.board[x][y-1] === 'R') {
    this.yPosition = y-1;
    return this.updatePos();
  }
  setTimeout( function() {
    this.template.className = this.template.className + ' happy-salmon';
  }.bind(this), 500);
};

Salmon.prototype.updatePos = function() {
  setTimeout( function() {
    this.receiveDamage();
    this.template.style.left = (10 * this.yPosition +5) + '%';
    this.template.style.top = 10 * this.xPosition + '%';
    this.move();
  }.bind(this), 500);

};


Salmon.prototype.receiveDamage = function() {
  var x = this.xPosition;
  var y = this.yPosition;

  if(this.board[x-1] != null && this.board[x-1][y] === 'B') {
    this.life = this.life-10;
  } if (this.board[x][y+1] != null && this.board[x][y+1] === 'B') {
    this.life = this.life-10;
  } if (this.board[x+1] != null && this.board[x+1][y] === 'B') {
    this.life = this.life-10;
  } if (this.board[x][y-1] != null && this.board[x][y-1] === 'B') {
    this.life = this.life-10;
  }
  this.checkDeath();
};

Salmon.prototype.checkDeath = function() {
  if (this.life>0){
  } else {
  this.template.remove();
  }
};
