document.addEventListener("DOMContentLoaded", function() {
    const imageFull = document.getElementById("image-full");
    const quiSommeNous = document.getElementById("Qui-somme-nous");
  
    imageFull.addEventListener("mouseover", function() {
      quiSommeNous.classList.add("hovered");
    });
  
    imageFull.addEventListener("mouseout", function() {
      quiSommeNous.classList.remove("hovered");
    });
  });
  