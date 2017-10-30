var board = [
  ['G','G','G','G','G','G','G','G','G','G'],
  ['R','R','R','G','G','R','R','R','R','G'],
  ['G','G','R','R','R','R','G','G','R','G'],
  ['G','G','G','G','G','G','G','G','R','G'],
  ['G','R','R','R','R','R','R','R','R','G'],
  ['G','R','G','G','G','G','G','G','G','G'],
  ['G','R','G','G','G','G','G','G','G','G'],
  ['G','R','G','R','R','R','R','R','G','G'],
  ['G','R','R','R','G','G','G','R','R','R'],
  ['G','G','G','G','G','G','G','G','G','G'],
  ];

var grass = '<div class="grass square"></div>';
var river = '<div class="river square"></div>';

var boardHTML = '';

//For para generar el background
for(var x = 0; x < board.length; x++) {
  boardHTML = boardHTML + '<div class="row">';
  for(var y = 0; y < board[x].length; y++) {
      switch(board[x][y]) {
        case 'G':
          boardHTML = boardHTML + grass;
          break;
        case 'R':
          boardHTML = boardHTML + river;
      }
  }
  boardHTML = boardHTML + '</div>';
};

document.querySelector('.riverBoard').innerHTML = boardHTML;
  var jon = new Salmon(1,0, board);
