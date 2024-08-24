const sections = document.querySelectorAll('section');

sections.forEach((section) => {
	section.addEventListener('mouseenter', () => {
		if (section.nextElementSibling) {
			section.nextElementSibling.style.width = '35%';
		} else {
			section.previousElementSibling.style.width = '35%';
		}
	});
	section.addEventListener('mouseleave', () => {
		if (section.nextElementSibling) {
			section.nextElementSibling.style.width = '100%';
		} else {
			section.previousElementSibling.style.width = '100%';
		}
	});
});
