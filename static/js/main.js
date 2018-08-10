// Hide Hiragana and Katakana characters
$('.hiragana').hide();
$('.katakana').hide();

// Flip/toggle ALL Hiragana characters
$('#hiragana-trigger').on('click', function() {
  if ($('.katakana').is(':visible')) {
    $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('li').removeClass('animated flipInY');
    });
      $('.katakana, .hiragana').toggle();
  } else {
    $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('li').removeClass('animated flipInY');
    });
      $('.hiragana, .eigo').toggle();
  }
});

// Flip/toggle ALL Katakana characters
$('#katakana-trigger').on('click', function() {
  if ($('.hiragana').is(':visible')) {
    $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('li').removeClass('animated flipInY');
    });
      $('.hiragana, .katakana').toggle();
  } else {
    $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('li').removeClass('animated flipInY');
    });
      $('.katakana, .eigo').toggle();
  }
});

// Flip/toggle individual characters -> Still working on this...
// $('li').on('click', function() {
//   if ($('.katakana').is(':visible')) {
//     $(this).addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//       $(this).removeClass('animated flipInY');
//     });
//       $(this).toggleClass('katakana');
//   } else {
//     $(this).addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//       $(this).removeClass('animated flipInY');
//     });
//       $('.hiragana, .eigo').toggle();
//   }
// });
