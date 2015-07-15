$(document).ready(function(){
    console.log("game ready")
    // game init
      $(".msg").text("Welcome, hit start game to play!")
      $(".response").hide();
      $("#new").hide();
      var questions = ["The show is centered around 5 friends and their misadventures surrounding their bar Philly's Pub","The 'Gang' consists of Charlie, Dee, Mac, Dennis, and Frank", "Kitten Mittons", "Charlie's favorite meal is milksteak","last question"]
      var answers = ['false','true', 'false','true']
      var selections = []
      var i = 0;
      var numCorrect = 0;
   // start game
    $("#start").on("click", function(){
       $(".msg").empty()
       $("#start").hide();
       $(".questions").append(questions[i])
       $(".response").show()
    })
    // click event for true or false
    $(".response").children().on("click", function(){
       var result = $(this).html()
       selections.push(result)
       console.log(selections)
       if (selections[i] == answers[i]){
         numCorrect ++
         $("#correct").text( numCorrect )
       }
          i++
       if (i < questions.length ){
         $(".questions").empty();
         $(".questions").append(questions[i])
      } else {
         $(".questions").empty();
         $(".response").hide()
         $(".msg").text('You got ' + numCorrect + ' out of ' + questions.length + ' questions right! Play again?')
         $("#new").show()
      }
    })
    $("#new").on("click", function(){
      window.location.reload(false);
    })
})
