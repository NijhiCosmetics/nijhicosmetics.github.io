'use strict';

function ocultarMostrarElemento() {
 
    var x = document.getElementById("mielemento");
 
    if (x.style.display === "none") {
 
      x.style.display = "block";
 
    } else {
 
      x.style.display = "none";
 
    }
 
} 
 
 
// Menú de la Página Web 
function miMenu() {
    
  var x = document.getElementById("menu"); // Variable 'x' 
 
  if (x.className === "mimenu") {
      x.className += " responsive";
  } else {
      x.className = "mimenu";
  }
}


// Create a lightbox
(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());
