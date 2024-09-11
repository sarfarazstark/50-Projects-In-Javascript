const range = document.querySelector('.range');
const counter = document.querySelector('.counter');
const span = counter.querySelector('span');

counter.addEventListener('click', (e) => {
	const btn = e.target.closest('button');
	if (!btn) return;

	if (btn.classList.contains('decrease') && span.textContent > 1) {
		span.textContent = +span.textContent - 1;
		range.style.height = `calc((100% / 8) * ${+span.textContent})`;
	} else if (btn.classList.contains('increase') && span.textContent < 8) {
		span.textContent = +span.textContent + 1;
		range.style.height = `calc((100% / 8) * ${+span.textContent})`;
	}

	if (+span.textContent === 8) {
		alert('Great job! You have reached your goal for today!');
	}
});
