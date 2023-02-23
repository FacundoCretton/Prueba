const products = document.querySelector('.product-container');
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const categoriaDefault = 'todos';
const categoriaList = document.querySelectorAll(".bts-fil")
const btnLoad = document.querySelector(".btn-load");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
	localStorage.setItem("cart", JSON.stringify(cartList));
};


const renderProduct = (product) => {
  const { id, nombre, precio, duracion, itinerario, backgroundImg } = product;

  return `
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
            <button class="btn-buy" 
            data-id="${id}"
            data-name="${nombre}"
            data-bid="${precio}"
            data-img="${backgroundImg}">Add</button>
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
        <div class="flip-icon"><i class="fas fa-arrow-circle-left"></i></div>
      </div>
    </div>
  </div>
  `;
}
const renderDividedProducts = (index = 0) => {
	products.innerHTML += productsController.dividedProducts[index]
		.map(renderProduct)
		.join("");
};

const renderFilteredProducts = (categoria) => {
	const productsList = productsData.filter((product) => {
		return product.categoria === categoria;
	});
	products.innerHTML = productsList.map(renderProduct).join("");
};



const renderProducts = (index=0, categoria = undefined) => {
  if (!categoria) {
    renderDividedProducts(index);
    return;
    
  }
  renderFilteredProducts(categoria)
}

window.addEventListener('load', function() {
   const flipIcons = document.querySelectorAll('.flip-icon');

   flipIcons.forEach(flipIcon => {
     flipIcon.addEventListener('click', function() {
       const card = flipIcon.closest('.card');
       card.classList.toggle('flipped');
     });
   });
  
});

const init =()=>{
  renderProducts()
 
}
init();
