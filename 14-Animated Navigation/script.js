document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.querySelector('.menu-btn');
	const nav = document.querySelector('nav');

	toggleButton.addEventListener('click', function () {
		nav.classList.toggle('active');
	});
});
