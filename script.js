$(document).ready(function(){
  console.log("Jquery is ready");
  // game init
  $(".true").hide();
  $(".false").hide();

  // Event listeners for picking question
  //   When user selects point value
  //     If point value = 100
      $("#test").on("click", function(){
          // Hide game board,
        $("#gameBoard").hide();
          // setup question
          var question = "Javascript was constructed in 13 days in 1995?";
          var choices = [true, false];
          var answer = true;
          // Append question to question div
        $(".question").append(question);
        // Append answers to choices div
        for(i=0; i < choices.length; i++){
          $(".choices").append("<div class='choice" + i + "'>" + choices[i] + "</div>");
        }
        $(".choices").children().on("click",function(){
          console.log( $(this) );

        })

        // setup event listeners for each choices

      })


      // Question div with 4 options
      // When user selects answer
        // Check to se if correct
          // If correct, reward points
      // Show game board, hide question prompt
      // Erase selected cell.

      // $("#test").on("click", function(){
      //     // Hide game board,
      //   $("#gameBoard").hide();
      //     // setup question
      //     var q1 ={
      //        question: "Javascript was constructed in 13 days in 1995?",
      //        answer: true }
      //   // Append question to question div
      //   $(".question").append(q1.question);
      //   // Reveal answers
      //     $(".true").show();
      //     $(".false").show();
      //         // setup event listeners for each choices
      //
      // })



})
