$(document).ready(function() {
  $("form#question1").submit(function(event) {
  var random = Math.floor((Math.random()*6) + 1);

  if (random === 1) {
    $("#jb").show();
  }
  else {
  $("#jb").hide();
  }
  if (random === 2){
    $("#worf").show();
  }
  else {
  $("#worf").hide();
  }
  if (random === 3) {
  $("#frodo").show();
  } else {
    $("#frodo").hide();
  }
  if (random === 4) {
    $("#got").show();
  } else {
    $("#got").hide();
  }
  if (random === 5) {
  $("#beth").show();
    } else {
  $("#beth").hide();
  }
  if (random === 5) {
  $("#beth").show();
    } else {
  $("#beth").hide();
  }
  event.preventDefault();
  });
  });

  $("form#question2").submit(function(event) {
  var random = Math.floor((Math.random()*6) + 1);

  if (random === 1) {
    $("#jb").show();
  }
  else {
  $("#jb").hide();
  }
  if (random === 2){
    $("#worf").show();
  }
  else {
  $("#worf").hide();
  }
  if (random === 3) {
  $("#frodo").show();
  } else {
    $("#frodo").hide();
  }
  if (random === 4) {
    $("#got").show();
  } else {
    $("#got").hide();
  }
  if (random === 5) {
  $("#beth").show();
    } else {
  $("#beth").hide();
  }
  if (random === 5) {
  $("#beth").show();
    } else {
  $("#beth").hide();
  }
  event.preventDefault();
  });
  });
});
