// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle Hiragana characters >> Testing
$('.n-column-n.eigo').on('click', function() {
  $('.n-column-n.eigo').addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animate flipOutY');
  });
});
