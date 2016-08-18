// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle ALL Hiragana characters
$('#hiragana-trigger').on('click', function() {
  $('li').addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('li').removeClass('animated flipOutY');
  });
  $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('li').removeClass('animated flipInY');
    $('.hiragana, .eigo').toggle();
  });
});

/*
Flip/toggle INDIVIDUAL Hiragana characters -> Still working on this...
$('li').on('click', function() {
  $(this).addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipOutY');
    $('.n-column-n.hiragana, .n-column-n.eigo').toggle().addClass('animated flipInY');
  });
});
*/
