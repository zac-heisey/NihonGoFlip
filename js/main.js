// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle Hiragana characters >> Testing
$('.flex-item').on('click', function() {
  $(this).addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipOutY').addClass('animated flipInY');
    $('.hiragana').show();
  });
});
