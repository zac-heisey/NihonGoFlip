// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle Hiragana characters
$('.flex-item').click(function() {
  $('.n-column-n.eigo, .n-column-n.hiragana').fadeToggle('slow', 'linear');
});
