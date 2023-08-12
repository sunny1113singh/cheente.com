function showContent(contentId) {
  // Hide all content sections
  var contentSections = document.getElementsByClassName('contents');
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].classList.remove('active-content');
  }

  // Show the selected content section
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add('active-content');
  }
}




//  Function to set the link with the specified ID as selected
function setLinkSelected(linkId) {
  var linkElement = document.getElementById('content1');
  if (linkElement) {
    linkElement.classList.add('active-content');
  }
}

//  Set the link auto-selected when the page opens
window.onload = function () {
  setLinkSelected('content1'); // Change 'selectedLink' to the ID of the link you want to auto-select.
};

