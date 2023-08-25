// Lumboy, Christopher John D.


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}





let Index = 0;
show();

function show() {
  let a;
  let slides = document.getElementsByClassName("Slides");
  for (i = a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  Index++;
  if (Index > slides.length) { Index = 1 }
  slides[Index - 1].style.display = "block";
  setTimeout(show, 5000); // Change image every 2 seconds
}