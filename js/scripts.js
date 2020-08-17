
let list1 = []


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

  
    list1.push(person1Input,person2Input,animalInput,exclamationInput,verbInput,nounInput)
    // console.log(list)
    
    $(".person1").text(list1[0]);
    $(".person2").text(list[1]);
    $(".animal").text(list[2]);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);



    $("#arrays").show();

    event.preventDefault();
  });
});