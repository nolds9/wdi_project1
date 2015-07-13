$(document).ready(function(){
  console.log("Jquery is ready");
  //Event listeners for picking question
    //When user selects point value
      $("#test").on("click", function(){
          // Hide game board,
        $("#game").hide();
          // setup question
          var question = "What year was javascript invented?";
          var choices = [ 1995 , 2001 , 1992 , 1997 ];
          var answer = 0;
          // Append question to question div
        $(".question").append(question);
        // Append answers to choices div
        for(i=0; i < choices.length; i++){
          $(".choices").append(choices[i]);
        }

      })


      // Question div with 4 options
      // When user selects answer
        // Check to se if correct
          // If correct, reward points
      // Show game board, hide question prompt
      // Erase selected cell.





})
