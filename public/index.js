// Obtenemos los elementos del DOM
const btn = document.getElementById('btnNav');
const navItem = [...document.querySelectorAll('li.nav_item')];

/**
 * Agrega la clase active
 * al nav
 */
const addClassActiveNav = () => {
	const nav = document.querySelector('nav');
	nav.classList.toggle('active');
};

/**
 * Agrega y remueve la clase
 * nav_item--active de los
 * elementos del nav
 * @param {Element} item 
 */
const addClassActiveItem = (item) => {
	navItem.forEach((i) => i.classList.remove('nav_item--active'));
    item.classList.add('nav_item--active');
};

// Agregamos los eventos
btn.addEventListener('click', addClassActiveNav);
navItem.forEach((item) => item.addEventListener('click', () => addClassActiveItem(item)));
