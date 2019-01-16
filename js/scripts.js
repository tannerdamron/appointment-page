$(document).ready(function(){
  $("form#appointment").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var times = $("#times").val();
    $(".nameOutput").text(name);
    $(".descriptionOutput").text(description);
    $(".dateOutput").text(date);
    $(".timesOutput").text(times);
    $('#myModal').show();

    $("#closeModal").click(function(){
      $("#myModal").hide();
    });

    $("#xModal").click(function(){
      $("#myModal").hide();
    });
  });
});
