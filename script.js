$(document).ready(function(){
    console.log("game ready")
    // game init
      $(".msg").text("Welcome, hit start game to play!")
      $(".response").hide();
      $("#new").hide();
      var questions = ["The 'Gang' consists of Charlie, Dee, Mac, Dennis, and Frank","The show is about 5 friends and their bar Philly's Pub","Mac is in love with the Waitress", "Dee is the original inventor of Kitten Mittons", "Charlie's favorite meal is milksteak", "Mac realizes his dream of having a catch with Chase Utley", "Dennis runs for political office, only to drop out later", "Special Agent Jack Bauer is actually a junkyard cat", "Originally, Dennis is the wildcard, Mac is the muscle, and Charlie is the looks", "The D.E.N.N.I.S. system is way to methodically win the heart of any woman"]
      var answers =  ['true','false','false','false','true','false','true', 'true', 'false','true']
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
        //  var themeSong = new Audio('https://archive.org/download/nyannyannyan/NyanCatoriginal.mp3');
        //  themeSong.play();
      }
    })
    // new game
    $("#new").on("click", function(){
      window.location.reload(false);
    })
})
