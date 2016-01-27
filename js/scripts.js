$(document).ready(function() {
  $("form#question1").submit(function(event) {
  var random = Math.floor((Math.random()*6) + 1);

  var appendText = [];

  for (var i = 0; i < counter++; i+=random) {
      appendText.push(random); //This adds each thing we want to append to the array in order.
  }
  console.log(appendText);

  var new_array = appendText.concat(); //Copy initial array

  for (var i = 1; i < appendText.length; i++) {
    new_array[i] = new_array[i-1] + appendText[i];
  }

  console.log(new_array);
  appendText = appendText.join(" ");
  event.preventDefault();
  });
  });

  // event.preventDefault();
  // });
  // });
// });
