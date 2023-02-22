// Contenedor de productos
const products = document.querySelector('.categoria-container');



const renderProduct = (product) => {
	if (!product) {
		return;
	  }
  const { id, nombre, precio, duracion, itinerario, backgroundImg, categoria } = product;

  // crear la tarjeta de producto
  const productCard = document.createElement('div');
  productCard.classList.add('product-cards');
  productCard.dataset.categoria = categoria;
  productCard.innerHTML = `
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

  // obtener el contenedor de categoría correspondiente
  const categoriaContainer = document.querySelector(`[data-categoria="${categoria}"]`);

  // insertar la tarjeta de producto en el contenedor de categoría
  categoriaContainer.appendChild(productCard);
};






const renderDividedProducts = (container, index = 0) => {
	container.innerHTML += productsController.dividedProducts[index]
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
		btnLoad.classList.remove("hidden");
		return;
	}
	btnLoad.classList.add("hidden");
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

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


let currentProductIndex = 0;
const productCount = 6; 
let totalProducts = productCount;




const showNextProduct = (direction, container) => {
  const cards = container.querySelectorAll('.card');
  let startIndex = currentProductIndex;

  if (direction === 'right') {
    startIndex += 5;
  } else {
    startIndex -= 5;
  }

  if (startIndex < 0) {
    startIndex = 0;
  } else if (startIndex >= cards.length) {
    startIndex = cards.length - 1;
  }

  for (let i = 0; i < cards.length; i++) {
    if (i < startIndex || i >= startIndex + 5) {
      cards[i].classList.add('hidden');
    } else {
      cards[i].classList.remove('hidden');
    }
  }

  currentProductIndex = startIndex;
};

  
rightArrow.addEventListener('click', () => {
  showNextProduct("right", containers[i]);
});

leftArrow.addEventListener('click', () => {
  showNextProduct("left", containers[i]);
});

  
 
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