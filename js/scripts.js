$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var gender = $("#gender").val();
    var quality = $("#quality").val();
    var date = $("#date").val();

    if (gender === "male") {
      if (quality === "quality-1" && date === "date-1") {
        $("#kevin").show();
      }
    }

    event.preventDefault();
  });
});
