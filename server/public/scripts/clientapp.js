$(document).ready(function() {
  var problem = {};

  $('.operator').on('click', function(event) {
    event.preventDefault();
    // create "type of operator" property on problem object
    problem.type = $(this).attr('id');
    // console.log('Operator: ', problem.type);
  });

  $('.numberinputs').on('submit', function(event) {
    event.preventDefault();
    $.each($(".numberinputs").serializeArray(), function(i, field) {
      problem[field.name] = field.value;
    });
    console.log('Problem: ', problem);

    $.ajax({
      type: 'POST',
      url: '/problemsolve',
      data: problem,
      success: function(data) {
        getAnswer();
        // console.log('post request successful!');
      },
      error: function() {
        console.log('post failed');
        alert("hey, it didn't work!");
      }
    });

    $('#clear').click(function() {
      $('#answer').empty();
      $('form').find("input[type=text], textarea").val("");
    });

    function getAnswer() {
      $.ajax({
        type: 'GET',
        url: '/problemsolve',
        success: function(solution) {
          $('#answer').empty();
          $('#answer').append(solution.answer);
          // console.log (solution.answer);

        },
        error: function () {
          console.log('Calculator did not work');
        },
      })
    }

  });
});
