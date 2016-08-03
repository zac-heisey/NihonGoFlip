// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle Hiragana characters
$('.flex-item').on('click', function() {
  $(this).addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipOutY');
    $('.n-column-n.eigo').hide();
    $('.n-column-n.hiragana').show().addClass('animated flipInY');
  });
});
