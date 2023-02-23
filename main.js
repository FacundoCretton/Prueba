// Contenedor de productos
const products = document.querySelectorAll('.categoria-container');
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const aside = document.querySelector("aside");
const categoriaDefault = 'todos';


botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const categoriaSeleccionada = e.currentTarget.dataset.categoria;

    const productosFiltrados = categoriaSeleccionada === "todos" ? 
      productsData : 
      productsData.filter(product => product.categoria === categoriaSeleccionada);

    if (categoriaSeleccionada) {
      tituloPrincipal.innerText = categoriaSeleccionada;
      renderFilteredProducts(productosFiltrados);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      renderDividedProducts(productsData, 0);
    }
  });
}); 



const renderFilteredProducts = (productos, categoriaSeleccionada) => {
  const containers = document.querySelectorAll('.categoria-container');
  containers.forEach((container) => {
    container.innerHTML = productos.map(renderProduct).join('');
    console.log("Hiciste click en el botón de la categoría: ", categoriaSeleccionada);

  });
};






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

// const renderFilteredProducts = (categoria) => {
// 	const productsList = productsData.filter((product) => {
// 		return product.categoria === categoria;
// 	});
// 	products.innerHTML = productsList.map(renderProduct).join("");
// };

const renderProducts = (categoria = "todos") => {
  if (categoria === "todos") {
    // Si la categoría es "todos", mostrar todos los productos
    tituloPrincipal.innerText = "Todos los productos";
    renderDividedProducts(productsController, 0);
  } else {
    // Si la categoría es distinta a "todos", filtrar los productos y mostrarlos
    const productosBoton = productsData.filter(producto => producto.categoria.nombre === categoria);
    const categoriaNombre = productosBoton.length > 0 ? productosBoton[0].categoria.nombre : "";
    tituloPrincipal.innerText = categoriaNombre;
    renderFilteredProducts(productosBoton);
  }
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

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderDividedProducts(products, currentPage);
  }
});

arrowRight.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderDividedProducts(products, currentPage);
  }
});


 
const init = () => {
	renderProducts();
  renderFilteredProducts(productsData.filter(product => product.categoria === categoriaDefault));

	categories.addEventListener("click", applyFilter);
	btnLoad.addEventListener("click", showMoreProducts);
	barsBtn.addEventListener("click", toggleMenu);
	cartBtn.addEventListener("click", toggleCart);
	barsMenu.addEventListener("click", closeOnClick);
	window.addEventListener("scroll", closeOnScroll);
	overlay.addEventListener("click", closeOnOverlayClick);
};

init();
