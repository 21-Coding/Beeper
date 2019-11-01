// business logic
var beepArray = [];
// for loop for 4
for (var i =0; i < 5; i++  ) {
  beepArray.push(i);console.log(beepArray);
}














// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());

  })
})
