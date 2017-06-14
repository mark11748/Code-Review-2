//var name  = "ERR" ;
//var title = "ERR" ;
//var age   = "ERR";

$(document).ready(function() {
  $('#SCREEN-1').show();
  $('#SCREEN-2').hide();
  $('#SCREEN-3').hide();

  $('#SCREEN-1 form').submit(function (event){
    $('#SCREEN-1').toggle();
    $('#SCREEN-2').toggle();

    var name  = $("input#name").val();
    var title = $("input#title").val();
    var age   = $("input#age").val();

    $('span#name').empty().append(name);
    $('span#title').empty().append(title);

    event.preventDefault();
  });

  $('#SCREEN-2 form').submit(function (event){
    $('#SCREEN-2').toggle();
    $('#SCREEN-3').toggle();

    var area         = $("select#area").val();
    var participants = $("select#participants").val();
    var tripType     = $("select#tripType").val();
    var price        = $("input#price").val();


    $('span#area').empty().append(area);
    $('span#tripType').empty().append(tripType);
    $('span#price').empty().append("$"+(parseInt(price)*.8).toString());

    $("#FINAL").fadeIn(3000);


    event.preventDefault();
  });

});
