const labels = document.querySelectorAll('label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, index) =>
				`<span style="transition-delay:${index * 50}ms">${
					letter === ' ' ? '\xa0' : letter
				}</span>`
		)
		.join('');
});
