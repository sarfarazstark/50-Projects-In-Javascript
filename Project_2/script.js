'use strict';
const btn = document.querySelector('button');
let activeBtns = 1;

const steps = function (p, s, l) {
	activeBtns++;
	for (let i = 1; i < p; i++) {
		const transitionTime =
			activeBtns === p && i === p - 1
				? 'all 0.1s ease-in-out'
				: `all 0.3s ease-in-out 0.${3 * i}s`;
		l[i - 1].style.transition = transitionTime;
		s[i].style.transition = transitionTime;
		l[i - 1].style.width = '100%';
		s[i].classList.add('active');
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
			for (let i = pageNumbers; i < activeSiblings; i++) {
				siblings[i].style.transition = 'all 0.3s ease-in-out';
				siblings[i].classList.remove('active');
				line[i - 1].style.transition = 'all 0.3s ease-in-out';
				line[i - 1].style.width = '0';
			}
		}
		steps(pageNumbers, siblings, line);
	}
});
