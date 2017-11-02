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

  var money = 15;
  var b = document.querySelector(".board");

  drawBoard = function() {
    // PONGO LOS DATA-X Y DATA-Y PARA QUE LUEGO AL CLICKAR SEPA DONDE ESTÁ EL CUADRADO
  var row = '';
  for(var x = 0; x < board.length; x++) {
    row = row + '<div class="row">';
    for(var y = 0; y < board[x].length; y++) {
      if(board[x][y] === 'G') {
        row = row + '<div class="square grass" data-x="'+ x +'"  data-y="'+ y +'"></div>';
      } else if(board[x][y] === 'R' || board[x][y] === 'X') {
        row = row + '<div class="square river" data-x="'+ x +'"  data-y="'+ y +'"></div>';
      } else {
        row = row + '<div class="square bear-grass" data-x="'+ x +'"  data-y="'+ y +'"><div class="bear"></div></div>';
      }
    }
    row = row + '</div>';
  };

   b.innerHTML = row;

     document.querySelectorAll('.grass').forEach( function(el) {
       el.onclick = function(ev) {
         // recojo el evento de click, y accedo al elemento que he pinchado con target
        var element = ev.target;
        // ahora puedo acceder a donde esta gracias a los data
         var x = element.getAttribute('data-x');
         var y = element.getAttribute('data-y');
         if (money>=10){
         // ahora, con x e y, cambio la letra de array a B de Bear
         board[x][y] = 'B';
         money=money-10;
         // como el array ha cambiado, tengo que volver a llamar a la funcion para que pinte de nuevo el mapa
         drawBoard();
       }// ahora ya puedo hacer, que cada vez que el salmon se mueve, si alrededor tengo un 'B' la vida del salmon baje.
      };
     });
   };
  drawBoard();

  function startGame() {
    var vida = 10;
    var salmones = 0;
    var intervalo = setInterval(function(){
      vida = vida + 5;
      var salmon1 = new Salmon(1,0, board,vida);
      salmones = salmones + 1;
      if(salmones === 5) {
        clearInterval(intervalo);
        $(".salmonswin").removeClass("hide");
        document.querySelectorAll('.salmon').forEach(function(salmon) {
        salmon.remove();

        });
      }
    },2500);
    count(intervalo);

    };



  function count (interval){
    var inter = setInterval(function(){
      money++;
      document.querySelector(".counter").innerHTML=money;
      var happys = document.querySelectorAll(".happy-salmon");
      if(happys && happys.length === 4) {
        $(".gameover").removeClass("hide");
        document.querySelectorAll('.salmon').forEach(function(salmon) {
          clearInterval(interval);
          clearInterval(inter);
          salmon.remove();

        });
      }
    },1000);

  };
