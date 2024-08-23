let perSe = 44;
let mainBlur = 56;
const main = document.querySelector('main');
const p = main.querySelector('p');
const decrementor = setInterval(() => {
	if (perSe === 100) {
		clearInterval(decrementor);
		p.style.opacity = 0;
	}
	p.textContent = `${perSe}%`;
	main.style.backdropFilter = `blur(${mainBlur}px)`;
	perSe++;
	mainBlur--;
}, 50);
