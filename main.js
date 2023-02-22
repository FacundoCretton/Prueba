// Contenedor de productos
const products = document.querySelectorAll('.categoria-container');
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const aside = document.querySelector("aside");



botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
}))

const renderProduct = (product) => {
  const { id, nombre, precio, duracion, itinerario, backgroundImg, categoria } = product;

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
        <div class="flip-icon"><i class="fas fa-arrow-circle-left"></i></div>
      </div>
    </div>
  </div>
  `;
}

const renderDividedProducts = (container, index = 0) => {
  container.innerHTML = productsController.dividedProducts[index]
    .map(renderProduct)
    .join("");
};

products.forEach((productContainer, index) => {
  renderDividedProducts(productContainer, index);
});

const renderFilteredProducts = (categoria) => {
	const productsList = productsData.filter((product) => {
		return product.categoria === categoria;
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

// const changeShowMoreBtnState = (categoria) => {
// 	if (!categoria) {
// 		btnLoad.classList.remove("hidden");
// 		return;
// 	}
// 	btnLoad.classList.add("hidden");
// };

// const changeBtnActiveState = (selectedCategory) => {
// 	const categories = [...categoriesList];
// 	categories.forEach((categoryBtn) => {
// 		if (categoryBtn.dataset.category !== selectedCategory) {
// 			categoryBtn.classList.remove("active");
// 			return;
// 		}
// 		categoryBtn.classList.add("active");
// 	});
// };

// const changeFilterState = (e) => {
// 	const selectedCategory = e.target.dataset.category;
// 	changeShowMoreBtnState(selectedCategory);
// 	changeBtnActiveState(selectedCategory);
// };

// const applyFilter = (e) => {
// 	if (!e.target.classList.contains("category")) {
// 		return;
// 	} else {
// 		changeFilterState(e);
// 	}
// 	if (!e.target.dataset.category) {
// 		products.innerHTML = "";
// 		renderProducts();
// 	} else {
// 		renderProducts(0, e.target.dataset.category);
// 		productsController.nextProductsIndex = 1;
// 	}
// };

// const isLastIndexOf = () => {
// 	return (
// 		productsController.nextProductsIndex === productsController.productsLimit
// 	);
// };





window.addEventListener('load', function() {
  const flipIcons = document.querySelectorAll('.flip-icon');

  flipIcons.forEach(flipIcon => {
    flipIcon.addEventListener('click', function() {
      const card = flipIcon.closest('.card');
      card.classList.toggle('flipped');
    });
  });
  
});
// ------------------------------------------------------ARROW---------------------------------

// // Obtener todas las categorías
// const categorias = document.querySelectorAll('.categoria-container');

// // Recorrer cada categoría y agregar los listeners a las flechas
// categorias.forEach(categoria => {
//   // Obtener los botones de flecha
//   const leftArrow = categoria.previousElementSibling.querySelector('.arrow-left');
//   const rightArrow = categoria.previousElementSibling.querySelector('.arrow-right');

//   // Obtener el contenedor de productos
//   const categoriaContainer = categoria;

//   // Calcular el ancho total de los productos
//   let productWidth = 0;
//   const products = categoriaContainer.children;
//   for (let i = 0; i < products.length; i++) {
//     productWidth += products[i].offsetWidth;
//   }

//   // Agregar listeners a las flechas
//   leftArrow.addEventListener('click', () => {
//     categoriaContainer.scrollLeft -= 300;
//   });

//   rightArrow.addEventListener('click', () => {
//     categoriaContainer.scrollLeft += 300;
//   });
// });


 
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
