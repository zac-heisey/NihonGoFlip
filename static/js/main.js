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

// Listen for all clicks on the document
document.addEventListener('click', function() {
  // Bail if the click is NOT on a page menu link (Hiragana or Katakana)
  if (!event.target.classList.contains('page-link')) return;
  // Add .active class
  event.target.classList.add('active');
  // Get all page menu links (Hiragana or Katakana)
  var pageLinks = document.querySelectorAll('.page-link');
  // Loop through each link
  for (var i = 0; i < pageLinks.length; i++) {
    // If the link in the one clicked, skip it
    if (pageLinks[i] === event.target) continue;
    // Remove .active class
    pageLinks[i].classList.remove('active');
  }
}, false);

// Select all <li> flex items (i.e. character squares) -> Returns a NodeList
var listItems = document.querySelectorAll('li.flex-item');

// Loop through NodeList items -> Add click event listener to individual items -> Add animate.css classes
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {
    this.classList.add('animated', 'flipInY');
    // Set timeout to remove 'animated' and 'flipInY' classes -> Refactor redundant for() loop below?
    setTimeout(function() {
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('animated', 'flipInY');
      }
    }, 1000);
  }, false);
}
