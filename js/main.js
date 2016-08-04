// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle Hiragana characters
$('li').on('click', function() {
  $(this).addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipOutY');
    $('.n-column-n.hiragana, .n-column-n.eigo').toggle().addClass('animated flipInY');
  });
});
