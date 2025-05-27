const emailNav = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const allProducts = document.querySelector('.all')
const mainContainer = document.querySelector('.main-container');
const abrirFiccion = document.querySelector('.ficcion-lista');
const ficcionLibros = document.querySelector('.ficcion');
const abrirSuspenso = document.querySelector('.suspenso-lista');
const suspensoLibros = document.querySelector('.suspenso');
const abrirJuveniles = document.querySelector('.juveniles-lista');
const juvenilesLibros = document.querySelector('.juveniles');
const abrirDesarrollo = document.querySelector('.desarrollo-lista');
const desarrolloLibros = document.querySelector('.desarrollo');
const bannerFrase = document.querySelector('.frase-banner')




emailNav.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoCompras.addEventListener('click', toggleCarroDeCompras);
allProducts.addEventListener('click', toggleMainContainer);
abrirFiccion.addEventListener('click', toggleFiccionLibros);
abrirSuspenso.addEventListener('click', toggleSuspensoLibros);
abrirJuveniles.addEventListener('click', toggleJuvenilesLibros);
abrirDesarrollo.addEventListener('click', toggleDesarrolloLibros);
menuHamIcon.addEventListener('click', toggleBannerFrase);




function toggleMainContainer() {
    mainContainer.classList.toggle('inactive');
}

function toggleFiccionLibros() {
    ficcionLibros.classList.toggle('inactive');
}

function toggleSuspensoLibros() {
    suspensoLibros.classList.toggle('inactive');
}

function toggleJuvenilesLibros() {
    juvenilesLibros.classList.toggle('inactive');
}

function toggleDesarrolloLibros() {
    desarrolloLibros.classList.toggle('inactive');
}

function toggleBannerFrase () {
    const isMobileMenuOpen = bannerFrase.classList.contains('inactive');
    
    bannerFrase.classList.toggle('inactive');
}



// comprension de los siguiente: dentro de la funcion creamos una variable refiriendose a que si el aside esta cerrado
// debe ser igual o es porque tiene
//  la clase de inactive
// Pero si no esta cerrado (osea esta abierto el aside) le agregamos la clase inactive}

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
     if (!isAsideClosed) {
        aside.classList.add('inactive');
}
    desktopMenu.classList.toggle('inactive');
}


// si tratamos de abrir el menu cerramos el carrito
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
       aside.classList.add('inactive');
}     
    mobileMenu.classList.toggle('inactive');
    // Add ARIA update
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    menuHamIcon.setAttribute('aria-expanded', isMobileMenuOpen ? 'true' : 'false');
}

// si el destok-menu esta abierto al momento de darle click al carrito entonces automaticamente se cierra el desktopMenu
function toggleCarroDeCompras() {
    const isCarritoclosed = carritoCompras.classList.contains('inactive');
    if (!isCarritoclosed) {
        desktopMenu.classList.add('inactive');
    }

    // si tratamos de abrir el carro de compras en el menu-mboile cerramos el menu
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        menuHamIcon.setAttribute('aria-expanded', 'false'); // Add this line
}
     aside.classList.toggle('inactive');
}



/* creamos un objeto para obtener una lista dinamica de los productos y asi no tener que llenar 
el html con muchos productos,asi se nos facilita para obtener productos de una base de datos */
const productList = [];
productList.push({
    name: 'Bike',
    price: 325,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Psp4',
    price: 325,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});


productList.push({
    name: 'Cumputador',
    price: 325,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});


// aca empezamos a maquetar la lista de productos desde javaScript y haciendo manupulacion del DOM //

// function renderProducts(arr) {
//     for (product of arr) {
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');
     
     
//         const productImg = document.createElement('img');
//         productImg.setAttribute('src', product.Image);
     
     
//         const productInfo = document.createElement('div');
//         productInfo.classList.add('product-info');
     
     
//         const productInfoDiv = document.createElement('div');
     
//         const productPrice = document.createElement('p');
//         productPrice.innerText = '$' + product.price;
     
//         const productName = document.createElement('p');
//         productName.innerText = product.name;
     
//         productInfoDiv.appendChild(productPrice);
//         productInfoDiv.appendChild(productName);
     
     
     
//         const productInfoFigure = document.createElement('figure');
        
//         const productImgCart = document.createElement('img');
//         productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
     
//      // A parir de aca empezamos ingresar etiqueta por etiqueta de abajo para arriba hasta llegar al contenedor principal,por ejemplo el cards-container//
//         productInfoFigure.appendChild(productImgCart);
     
     
//         productInfo.appendChild(productInfoDiv);
//         productInfo.appendChild(productInfoFigure);
     
     
     
//         productCard.appendChild(productImg);
//         productCard.appendChild(productInfo);
     
     
//         cardsContainer.appendChild(productCard);
     
        
//      }
// }

// renderProducts();

// Dark Mode Toggle Functionality
const darkModeToggleButton = document.getElementById('darkModeToggle');

// Function to apply or remove dark mode
function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        if (darkModeToggleButton) darkModeToggleButton.setAttribute('aria-pressed', 'true'); // Add this
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        if (darkModeToggleButton) darkModeToggleButton.setAttribute('aria-pressed', 'false'); // Add this
    }
}

// Event listener for the toggle button
if (darkModeToggleButton) { // Check if the button exists
    darkModeToggleButton.addEventListener('click', () => {
        const isDarkModeEnabled = document.body.classList.contains('dark-mode');
        setDarkMode(!isDarkModeEnabled);
    });
}

// Check localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const darkModeSavedPreference = localStorage.getItem('darkMode');
    if (darkModeSavedPreference === 'enabled') {
        setDarkMode(true); // This will call setAttribute via setDarkMode
    } else {
        // Ensure aria-pressed is false if not enabled or preference not set
        if (darkModeToggleButton) darkModeToggleButton.setAttribute('aria-pressed', 'false');
    }
    // Potentially initialize mobile menu aria-expanded state here if needed,
    // though it defaults to false in HTML and only changes on click.
});
