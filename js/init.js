(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
        shift: -20,
        padding: 0,
        indicators: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
