$(document).ready(function() {

  $('#calc-app').on('submit', function(event) {
    event.preventDefault();
    var problem = {};



    $.each($("#calc-app").serializeArray(), function(i, field) {
      problem[field.name] = field.value;
    });
    console.log('problem: ', problem);

    // $('.operator').on('click', function(event) {
    //   // create "type of operator" property on problem object
    //   problem.type = $(this).attr('id');
    //   console.log('operator: ' + problem.type);
    //   return problem;
    // });

    $.ajax({
      type: 'POST',
      url: '/problemsolve',
      data: problem,
      success: function(data) {
        console.log('post request successful!');
        // mathAnswer();
      },
      error: function() {
        console.log('post failed');
        alert("hey, it didn't work!");
      }
    });

    // function mathAnswer() {
    //   $.ajax({
    //     type: 'GET',
    //     url: '/problemsolve',
    //     success: function(response) {
    //       $("#answer").empty();
    //       response.forEach(function(problem) {
    //         appendDom(problem);
    //       });
    //     }
    //   })
    // }

  });
});
