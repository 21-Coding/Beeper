// business logic

function boopsBeep(input){
  let beepArrays = [];

  for (let i = 0; i <= input; i++) {
    let result = i.toString();
      if (result.includes(3)){
        beepArrays.push('Im sorry dave Im afraid I cant do that');
      } else if (result.includes(2)){
        beepArrays.push('Boop');
      } else if (result.includes(1)){
        beepArrays.push('Beep');
      } else {
        beepArrays.push('');
        console.log(beepArrays);

      }
    }
}



  // $("#list-prepend").prepend("<li>" + "Beep!" + "</li>");
// $("#list-prepend").prepend("<li>" + "Boop!" + "</li>");

    //     $("#list-prepend").prepend("<li>" + i + "</li>");







// user interface logic
$(document).ready(function() {
  $("form#form").submit(function (event){
    event.preventDefault();

    var input = parseInt($("#input").val());
    var beeper = boopsBeep(input);
    console.log(beeper);
  });

 });
