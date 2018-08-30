// Hide Hiragana and Katakana characters
// $('.hiragana').hide();
// $('.katakana').hide();
//
// // Flip/toggle ALL Hiragana characters
// $('#hiragana-trigger').on('click', function() {
//   if ($('.katakana').is(':visible')) {
//     $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//       $('li').removeClass('animated flipInY');
//     });
//       $('.katakana, .hiragana').toggle();
//   } else {
//     $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//       $('li').removeClass('animated flipInY');
//     });
//       $('.hiragana, .eigo').toggle();
//   }
// });
//
// // Flip/toggle ALL Katakana characters
// $('#katakana-trigger').on('click', function() {
//   if ($('.hiragana').is(':visible')) {
//     $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//       $('li').removeClass('animated flipInY');
//     });
//       $('.hiragana, .katakana').toggle();
//   } else {
//     $('li').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//       $('li').removeClass('animated flipInY');
//     });
//       $('.katakana, .eigo').toggle();
//   }
// });

/***
Flip/toggle individual characters -> Still working on this...
***/

// Select all <li> flex items (i.e. character squares) -> Returns a NodeList
var listItems = document.querySelectorAll('li.flex-item');
var hiragana = document.querySelectorAll('.hiragana');
var katakana = document.querySelectorAll('.katakana');

// Loop through NodeList items -> Add click event listener to individual items -> Add animate.css classes
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    this.classList.add('animated', 'flipInY');
  }, false);
}
