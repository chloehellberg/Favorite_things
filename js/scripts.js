



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    
    let list1 = ["person1","person2", "animal", "exclamation" ,"verb" ,"noun"];
    list1.forEach(function(input) {
      let story =  $("input#" + input).val();
      $("." + input).text(story);
    });
    $("#arrays").show();
    event.preventDefault();
    
  });
});    
    
    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();

    // $(".person1").text(list1[0]);
    // $(".person2").text(list1[1]);
    // $(".animal").text(list1[2]);
    // $(".exclamation").text(list1[3]);
    // $(".verb").text(list1[4]);
    // $(".noun").text(list1[5]);

    // let list1 = []
    // let story= "One day,"+  + "and";
    // list1.forEach(function(element) {
    // story = story.concat(element);
    // });
    
    // console.log (story)

    // list1.forEach(function(element) {
    //   story = story.concat(" " + element + "!");
    // });
    // console.log(story);

    
    // $(".tale").text(story);

   
