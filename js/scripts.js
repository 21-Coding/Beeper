// business logic
var beepArrays = [];
// for loop for 4
for (var i =0; i < 5; i++  ) {
  beepArrays.push(i);console.log(beepArrays);

  if (i["1"]) {
    $("#list-append").append("<li>" + [i] "</li>");
  }
}














// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());

  })
})
