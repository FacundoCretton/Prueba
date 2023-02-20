const flipIcons = document.querySelectorAll(".flip-icon");

// Agrega un controlador de eventos a cada icono de flecha
flipIcons.forEach((flipIcon) => {
  flipIcon.addEventListener("click", () => {
    // Encuentra la tarjeta del producto más cercana y togllea la clase 'is-flipped'
    const card = flipIcon.closest(".card");
    card.classList.toggle("is-flipped");
  });
});