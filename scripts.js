let slideIndex = 0;
showSlides();

function showSlides() { //funcion que muestra las imagenes
  const slides = document.querySelectorAll('.carousel-content img');//Funciona para hacer una lista de elementos no ordenados
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++;
  
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 2000); 
}
