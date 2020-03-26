$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var gender = $("#gender").val();
    var quality = $("#quality").val();
    var date = $("#date").val();

    if (date === "date-1") {
      $("#meredith").show();
    } else if (quality === "quality-2" && date === "date-2") {
      $("#pam").show();
      $("#meredith").hide();
    } else if (quality === "quality-3" && date === "date-3") {
      $("#dwight").show();
      else if (quality === "quality-1" && date === "date-3") {
       $("#") 
      }
    } else {
      $("#michael").show();
    }
    event.preventDefault();
  });
});

//   if (gender === "male") {
//     if (quality === "quality-1" && date === "date-1") {
//       $("#kevin").show();
//     }
