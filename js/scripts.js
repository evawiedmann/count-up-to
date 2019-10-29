$(document).ready(function () {
  $("form").submit(function(event) {

    var to = parseInt($("#countTo").val());
    var by = parseInt($("#countBy").val());
    var result = "";
      for (var i=by; i <= to; i += by){
        console.log(i);
result += i + " ";
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
