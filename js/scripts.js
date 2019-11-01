// business logic
var beepArrays = [];
var newArray = [];
// for loop for 4
function boopsBeep(){

  for (var i =0; i < 5; i++  ) {
    beepArrays.push(i);console.log(beepArrays);

    if (("#input").includes("1")) {
      beepArrays.push(newArray);
      $("#list-append").prepend("<li>" + "Beep!" + "</li>");
      console.log(newArray);

    }
    else if (beepArrays.includes("2")) {
      beepArrays.push(newArray);
      $("#list-prepend").prepend("<li>" + i + "</li>");

    }
      else if (beepArrays.includes("3")) {
        beepArrays.push(newArray);
        $("#list-prepend").prepend("<li>" + i + "</li>");

      }
}














// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());
    var beeper = boopsBeep();
    console.log(boopsBeep);
  });

 });
};
