// Selecciona todos los elementos con la clase ".flip-icon"
const flipIcons = document.querySelectorAll('.flip-icon');

// Agrega un controlador de eventos a cada icono de flip
flipIcons.forEach((flipIcon) => {
  flipIcon.addEventListener("click", () => {
    // Encuentra la tarjeta del producto más cercana y togllea la clase 'flipped'
    const card = flipIcon.closest(".card");
    card.classList.toggle("flipped");
  });
});