$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 

$(function() {

  var note = $('#note'),
    ts = new Date(2016, 7, 5),
    newYear = true;

  if ((new Date()) > ts) {
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
    newYear = false;
  }

  $('#countdown').countdown({
    timestamp: ts,
    callback: function(days, hours, minutes, seconds) {

      var message = "";

      message += days + " day" + (days == 1 ? '' : 's') + ", ";
      message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
      message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
      message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

      if (newYear) {
        message += "left until Rio 2016!";
      } else {
        message += "left to Rio 2016!";
      }

      note.html(message);
    }
  });

});
