function Player {
  this.Player = Player;
  this.turnscore = turnscore;
  this.totalscore = totalscore;
}

$(document).ready(function() {
$("form#question").submit(function(event) {

var random = Math.floor((Math.random()*6) + 1);
var superarray = [];

superarray.push(random);
 // return superarray;

console.log(superarray);
// $("#sth").append(<li );

event.preventDefault();
});
});
