'use strict';
const btn = document.querySelector('button');
let activeBtns = 1;

const stepsUp = function (p, s, l) {
	activeBtns++;
	for (let i = 1; i < p; i++) {
		const transitionTime =
			activeBtns === p && i === p - 1
				? 'all 0.3s ease-in-out'
				: `all 0.3s ease-in-out ${0.3 * i}s`;
		l[i - 1].style.transition = transitionTime;
		s[i].style.transition = transitionTime;
		l[i - 1].style.width = '100%';
		s[i].classList.add('active');
	}
};
const stepsDown = function (p, s, l, a) {
	let increaseDelay = 0;
	for (let i = a; i > p; i--) {
		s[i - 1].style.transition = `all 0.3s ease-in-out ${0.3 * increaseDelay}s`;
		l[i - 2].style.transition = `all 0.3s ease-in-out ${0.3 * increaseDelay}s`;
		s[i - 1].classList.remove('active');
		l[i - 2].style.width = '0';
		increaseDelay++;
	}
};
btn.parentElement.addEventListener('click', function (e) {
	if (e.target.localName === 'button') {
		const parentElement = e.target.parentElement;
		const siblings = parentElement.querySelectorAll('button');
		const line = parentElement.querySelectorAll('hr');
		const pageNumbers = Number(e.target.dataset.page);
		const activeSiblings =
			parentElement.querySelectorAll('button.active').length;

		if (pageNumbers < activeSiblings) {
			stepsDown(pageNumbers, siblings, line, activeSiblings);
		}

		stepsUp(pageNumbers, siblings, line);
	}
});
