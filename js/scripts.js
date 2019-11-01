// business logic
// for loop for 4
function boopsBeep(input){
  // var newArray = [];
  var beepArrays = [];

  for (var i = 0; i < input + 1; i++) {
  console.log(beepArrays);

    // if (beepArrays.includes("1")) {
    //   beepArrays.push(newArray);
    //   $("#list-append").prepend("<li>" + "Beep!" + "</li>");
    //   console.log(newArray);
    //
    // }
    // else if (beepArrays.includes("2")) {
    //   beepArrays.push(newArray);
    //   $("#list-prepend").prepend("<li>" + i + "</li>");
    //
    // }
    //   else (beepArrays.includes("3"))
    //     beepArrays.push(newArray);
    //     $("#list-prepend").prepend("<li>" + i + "</li>");


 }
 return beepArrays = [];
 console.log(alert(beepArrays.toString()));
 // console.log(beepArrays);
}














// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());
    var beeper = boopsBeep();
    // console.log(boopsBeep);
  });

 });
