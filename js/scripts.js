// function rollin(player, dicemaster){
//       this.player = player;
//       this.dicemaster =[];
//   }
//   Order.prototype.totalPies = function(){
//     var rolling = 0;
//     this.dicemaster.forEach(function(dicers){
//       rolling = rolling + Pizza.numberPizzas;
//     });
//     return rolling;
//   }
// function testing(){

var currentPlayer = player1;

function player(name){
  this.name = name;
  this.rolls = [];
}



Player.prototype.takeTurn = function(){
  var random = Math.floor((Math.random()*6) + 1);
  this.rolls.push(random);
}

Player.prototype.endTurn = function(){


var player1 = new Player("Courtney");

player1.takeTurn()
this.rolls = [2];
player1.takeTurn()
this.rolls = [2, 4, ]



var appendText = [];
for (var i = 0; i < 1; i++) {
    appendText.push(random); //This adds each thing we want to append to the array in order.
  }
}
var new_array = appendText.concat(); //Copy initial array

for (var i = 1; i < appendText.length; i+random) {
  new_array[i] = new_array[i-1] + appendText[i];
}
}

$(document).ready(function() {
$("form#question").submit(function(event) {
  function
  var random = Math.floor((Math.random()*6) + 1);
  var appendText = [];
  for (var i = 0; i < 1; i++) {
      appendText.push(random); //This adds each thing we want to append to the array in order.
  }

  var new_array = appendText.concat(); //Copy initial array

  for (var i = 1; i < appendText.length; i+random) {
    new_array[i] = new_array[i-1] + appendText[i];
  }

  if (random === 1) {
    $("#sth").append("Next Player");
  } else {
    var dnd= random;
  console.log(dnd);
  }
// var superarray = [];
//
// superarray.push(random);
//  // return superarray;
//
// console.log(superarray);
// // $("#sth").append(<li );
//
event.preventDefault();
});
});
