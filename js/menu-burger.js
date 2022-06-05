// Меню бургер
$(document).ready(function() {
	$('.menu__icon').click(function(event) {
		$('.menu__icon,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


// Меню бургер
const iconMenu = document.querySelector('.menu__icon--');
const menuBody = document.querySelector('.menu__body--');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock--');
		iconMenu.classList.toggle('_active--');
		menuBody.classList.toggle('_active--');
	});
}