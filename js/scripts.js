// business logic
// for loop for 4
function boopsBeep(input){
  // var newArray = [];
  let beepArrays = [];

  for (let i = 0; i < input + 1; i++) {
    let results = i.toString();
  // console.log(beepArrays);

    if (results.includes("1")) {
      beepArrays.push("Boop!");
      console.log("1: "+ beepArrays);


      // $("#list-prepend").prepend("<li>" + "Beep!" + "</li>");

    }
    else (results.includes("2"))
      beepArrays.push("Beep!");
      console.log("2: "+beepArrays);
      // $("#list-prepend").prepend("<li>" + "Boop!" + "</li>");
}

    //   else (beepArrays.includes("3"))
    //     beepArrays.push(newArray);
    //     $("#list-prepend").prepend("<li>" + i + "</li>");


 // }
 return beepArrays = [];
 // console.log(alert(beepArrays.toString()));
 // console.log(beepArrays);

}














// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());
    var beeper = boopsBeep(input);
    console.log(beeper);
  });

 });
