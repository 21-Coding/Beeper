// business logic
// for loop for 3
var beepArray = [];

for (var i =0; i < 4; i++  ) {
  beepArray.push(i);
  console.log(beepArray);
}

// for loop for 4
//
// var beep4 = [];
//
// for (var i =0; i < )







// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());

  })
})
