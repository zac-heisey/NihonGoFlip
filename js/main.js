// Get page menu links (Hiragana or Katakana)
var pageLinks = document.querySelectorAll('.page-link');
// Get all <li> flex-items -> Returns a NodeList
var listItems = document.querySelectorAll('.flex-item');
// Create flipAnimation function
var flipAnimation = function(indexPlaceholder, indexCounter) {
  listItems[indexPlaceholder].classList.remove('animated', 'flipInY');
  listItems[indexPlaceholder].setAttribute('hidden', '');
  listItems[indexPlaceholder + indexCounter].removeAttribute('hidden');
  listItems[indexPlaceholder + indexCounter].classList.add('animated', 'flipInY');
};

// Listen for all clicks on the document
document.addEventListener('click', function(event) {

  // If click is on a page menu link (Hiragana or Katakana)
  if (event.target.classList.contains('page-link')) {
    // Add .active class
    event.target.classList.add('active');
    // Loop through each link
    for (var i = 0; i < pageLinks.length; i++) {
      // If the link is the one clicked, skip it
      if (pageLinks[i] === event.target) continue;
      // Remove .active class
      pageLinks[i].classList.remove('active');
    }
  }
  // If click is on an <li> flex-item (i.e. character squares)
  if (event.target.classList.contains('flex-item')) {
    // Set timeout to remove 'animated' and 'flipInY' classes
    setTimeout(function() {
      // Loop through NodeList items -> Add animate.css classes
      for (var i = 0; i < listItems.length; i++) {
        if (listItems[i] === event.target) {
          listItems[i].classList.add('animated', 'flipInY');
          // If URL path includes 'hiragana' and the clicked character is eigo
          if (window.location.href.includes('hiragana') && listItems[i].classList.contains('eigo')) {
            flipAnimation(i, +1);
          } else if (listItems[i].classList.contains('hiragana')) {
            flipAnimation(i, -1);
          }
          // If URL path includes 'katakana' and the clicked character is eigo
          if (window.location.href.includes('katakana') && listItems[i].classList.contains('eigo')) {
            flipAnimation(i, +2);
          } else if (listItems[i].classList.contains('katakana')) {
            flipAnimation(i, -2);
          }
        }
      }
    }, 10);
    // End timeout function (creates smooth flip transition)
  }

}, false);
