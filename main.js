const products = document.querySelector(".products-container");
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



// Función para renderizar un producto
const renderProduct = (product) => {
  const { id, nombre, precio, duracion, itinerario, backgroundImg, categoria } = product;
  return `
    <div class="product-cards" data-categoria="${categoria}">
      <div class="card-container">
        <div class="card">
          <div class="card-front">
            <div class="product-card-image" style="background-image: url(${backgroundImg})">
              <h2 class="product-name">${nombre}</h2>
            </div>
            <div class="product-price">
              <p>Precio</p>
              <span>$${precio}</span>
            </div>
            <div class="product-duration">
              <p>Duracion</p> 
              <span>${duracion} noches</span> 
            </div>
            <div class="product-bot">
              <div class="btn-flip">
              <button class="btn-buy">Add</button>
              <div class="flip-icon"><i class="fas fa-arrow-circle-right"></i></div>
            </div>                  
          </div>
        </div>
        <div class="card-back">
          <div class="itinerario">
            <h2>Itinerario</h2>
            <ul>
              ${itinerario.map((dia) => `<li><span>${dia}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;}

// Agrupar los productos por categoría en un objeto
const productosPorCategoria = productsData.reduce((acc, producto) => {
  const categoria = producto.categoria;
  if (!acc[categoria]) {
    acc[categoria] = [];
  }
  acc[categoria].push(producto);
  return acc;
}, {});

categorias.forEach((categoria) => {
  const categoriaContainer = document.querySelector(`#${categoria.id}`);
  const productosFiltrados = producto.filter((producto) => producto.categoria === categoria.nombre);

  productosFiltrados.forEach((producto) => {
    const productoHtml = renderProduct(producto);
    categoriaContainer.innerHTML += productoHtml;
  });
});

