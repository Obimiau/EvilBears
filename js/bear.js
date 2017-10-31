var bears = [];

function Bear (x,y,board){
  this.xPosition = x;
  this.yPosition = y;
  this.board = board;
};


Bear.prototype.attack = function() {
  var x = this.xPosition;
  var y = this.yPosition;
  this.board[x][y] = 'X';
};
