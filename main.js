const products = document.querySelector(".product-container");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const categoriaList = document.querySelector(".bts-fil")
const btnLoad = document.querySelector(".btn-load");
const flipIcons = document.querySelectorAll(".flip-icon");
const card = document.querySelector(".card");
const header=document.querySelector("header")
const toggleThemeButton = document.getElementById("toggle-theme");
const bodyElement = document.querySelector("body");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
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
  // renderCategoryProducts(categoria, index);

}
const changeShowMoreBtnState = (categoria) => {
	if (!categoria) {
		btnLoad.classList.remove("hidden");
		return;
	}
	btnLoad.classList.add("hidden");
};
const changeBtnActiveState = (categoriaSeleccionada) => {
	const categories = [...botonesCategorias]; // (Esto lo hago porque al no ser un array los botones, no puedo pasarle un forEach directamente)
	categories.forEach((botonCategoria) => {
		if (botonCategoria.dataset.categoria !== categoriaSeleccionada) {
			botonCategoria.classList.remove("active");
			return;
		}
		botonCategoria.classList.add("active");
	});
};

const changeFilterState = (e) => {
	const categoriaSeleccionada = e.target.dataset.categoria;
	changeShowMoreBtnState(categoriaSeleccionada);
	changeBtnActiveState(categoriaSeleccionada);
};

const flipCard = () => {
  const flipIcons = document.querySelectorAll('.flip-icon');

  flipIcons.forEach(flipIcon => {
    flipIcon.addEventListener('click', function() {
      const card = this.closest('.card');
      if (!card) return;  

      card.classList.toggle('flipped');
    });
  });
}

// const renderCategoryProducts = (categoria, index = 0) => {
//   const productsList = productsData.filter((product) => {
//     return product.categoria === categoria;
//   });
//   const dividedProducts = splitProducts(productsController.dividedProducts[index].length);

//    if (index >= productsController.productsLimit) {
//      return;
//    }
  
//    products.innerHTML = dividedProducts[index].map(renderProduct).join("");
// }
const renderCategoryProducts = (categoria, index = 0) => {
  const productsList = productsData.filter((product) => {
    return product.categoria === categoria;
  });

  const startIndex = index * productsController.productsLimit;
  const endIndex = startIndex + productsController.productsLimit;
  const productsToRender = productsList.slice(startIndex, endIndex);

  products.innerHTML = productsToRender.map(renderProduct).join("");
}





const applyFilter = (e) => {
	if (!e.target.classList.contains("boton-categoria")) {
		return;
	} else {
		changeFilterState(e);
	}
	if (!e.target.dataset.categoria) {
		products.innerHTML = "";
		renderProducts();
	} else {
		renderProducts(0, e.target.dataset.categoria);
		productsController.nextProductsIndex = 1;
	}
  flipCard()
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
		btnLoad.classList.add("hidden");
	}
  flipCard()
};

// ------Navbar-scroll-----
const toggleHeaderBackground =() => {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
}

// ------Modo oscuro--------
toggleTheme = () => {
  bodyElement.classList.toggle("dark");
  
  if (bodyElement.classList.contains("dark")) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    header.classList.add("dark-mode");
    toggleHeaderBackground(".dark header.scrolled");
    localStorage.setItem("modo", "dark")
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    header.classList.remove("dark-mode");
    toggleHeaderBackground("header.scrolled");
    localStorage.setItem("modo", "light");

  }
}
// botonesCategorias.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     const categoria = event.target.dataset.categoria;
//     renderCategoryProducts(categoria);
//   });
// });



const init =()=>{
  renderProducts()
  categoriaList.addEventListener("click", applyFilter);
	btnLoad.addEventListener("click", showMoreProducts);
  window.addEventListener('load', flipCard);
  toggleThemeButton.addEventListener('click', toggleTheme);
  window.addEventListener("scroll", toggleHeaderBackground);
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    toggleTheme();
  }

}
init();




