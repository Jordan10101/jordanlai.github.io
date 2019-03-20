ScrollReveal().reveal('.headline', { duration: 5000});
ScrollReveal().reveal('.fact1', {delay: 500, duration: 2000});
ScrollReveal().reveal('.fact2', {delay: 1000, duration: 2000});
ScrollReveal().reveal('.fact3', {delay: 1500, duration: 2000});
ScrollReveal().reveal('.fact4', {delay: 2000, duration: 2000});




var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);

$("body").append($overlay);

  $("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    $image.attr("src", imageLocation);

    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });









