// Contenedor de productos
const products = document.querySelector('.categoria-container');
// Selecciona todos los elementos con la clase ".flip-icon"
const flipIcons = document.querySelectorAll('.flip-icon');
const arrow = document.querySelector(".arrow");

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

// // Agrega un controlador de eventos a cada icono de flip



flipIcons.forEach(flipIcon => {
  flipIcon.addEventListener('click', function() {
    const card = flipIcon.parentNode.parentNode;
    card.classList.add('flipped');
    flipIcon.classList.add('rotate-icon');

    flipIcon.addEventListener('click', function() {
      card.classList.remove('flipped');
      flipIcon.classList.remove('rotate-icon');
    });
  });
});





const renderDividedProducts = (index = 0) => {
	products.innerHTML += productsController.dividedProducts[index]
		.map(renderProduct)
		.join("");
};

const renderFilteredProducts = (category) => {
	const productsList = productsData.filter((product) => {
		return product.category === category;
	});
	products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, categoria = undefined) => {
	if (!categoria) {
		renderDividedProducts(index);
		return;
	}
	renderFilteredProducts(categoria);
};

const changeShowMoreBtnState = (categoria) => {
	if (!categoria) {
		arrow.classList.remove("hidden");
		return;
	}
	arrow.classList.add("hidden");
};

const changeBtnActiveState = (selectedCategory) => {
	const categories = [...categoriesList];
	categories.forEach((categoryBtn) => {
		if (categoryBtn.dataset.category !== selectedCategory) {
			categoryBtn.classList.remove("active");
			return;
		}
		categoryBtn.classList.add("active");
	});
};

const changeFilterState = (e) => {
	const selectedCategory = e.target.dataset.category;
	changeShowMoreBtnState(selectedCategory);
	changeBtnActiveState(selectedCategory);
};

const applyFilter = (e) => {
	if (!e.target.classList.contains("category")) {
		return;
	} else {
		changeFilterState(e);
	}
	if (!e.target.dataset.category) {
		products.innerHTML = "";
		renderProducts();
	} else {
		renderProducts(0, e.target.dataset.category);
		productsController.nextProductsIndex = 1;
	}
};

const isLastIndexOf = () => {
	return (
		productsController.nextProductsIndex === productsController.productsLimit
	);
};

const showMoreProducts = () => {
	renderProducts(productsController.nextProductsIndex);
	productsController.nextProductsIndex++;
	if (isLastIndexOf()) {
		arrow.classList.add("hidden");
	}
};

const toggleMenu = () => {
	barsMenu.classList.toggle("open-menu");
	if (cartMenu.classList.contains("open-cart")) {
		cartMenu.classList.remove("open-cart");
		return;
	}
	overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
	cartMenu.classList.toggle("open-cart");
	if (barsMenu.classList.contains("open-menu")) {
		barsMenu.classList.remove("open-menu");
		return;
	}
	overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
	if (!e.target.classList.contains("navbar-link")) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
	if (
		!barsMenu.classList.contains("open-menu") &&
		!cartMenu.classList.contains("open-cart")
	) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};


const init = () => {
	renderProducts();
  
	categories.addEventListener("click", applyFilter);
	btnLoad.addEventListener("click", showMoreProducts);
	barsBtn.addEventListener("click", toggleMenu);
	cartBtn.addEventListener("click", toggleCart);
	barsMenu.addEventListener("click", closeOnClick);
	window.addEventListener("scroll", closeOnScroll);
	overlay.addEventListener("click", closeOnOverlayClick);
};

init();
