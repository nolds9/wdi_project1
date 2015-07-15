$(document).ready(function(){
    console.log("game ready")
    // game init
      $(".msg").append("It's Always Sunny in Philadelphia Triva")
      $(".response").hide();
      $("#new").hide();
      var questions = ["The 'Gang' consists of Charlie, Dee, Mac, Dennis, and Frank", "Kitten Mittons", "Charlie's favorite meal is milksteak","last question"]
      var answers = ['true', 'false','true']
      var selections = []
      var i = 0;
      var numCorrect = 0;
   // start game
    $("#start").on("click", function(){
       $("#start").hide();
       $(".questions").append(questions[i])
       $(".response").show()
    })
    // click event for true or false
    $(".response").children().on("click", function(){
       var result = $(this).html()
       selections.push(result)
          i++
       if (i < questions.length ){
         $(".questions").empty();
         $(".questions").append(questions[i])
      } else {
         $(".questions").empty();
         $(".response").hide()
         $("#new").show()
      }
    })
    $("#new").on("click", function(){
      window.location.reload(false);
    })
})
