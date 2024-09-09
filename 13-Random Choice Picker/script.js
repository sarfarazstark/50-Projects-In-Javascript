const textArea = document.querySelector('textarea');
const section = document.querySelector('section');
let choices = [];

function renderChoices(arr) {
	section.innerHTML = '';
	arr.forEach((choice) => {
		if (choice.trim() === '') return;
		const html = `<div class="choice">${choice}</div>`;
		section.insertAdjacentHTML('beforeend', html);
	});
}

function randomChoice(n) {
	return Math.floor(Math.random() * n);
}

textArea.addEventListener('input', () => {
	const trimmedText = textArea.value.trim();
	if (trimmedText === '') {
		choices = [];
		renderChoices(choices);
		return;
	}
	choices = trimmedText.split(',');
	renderChoices(choices);
});

function renderChoose(chosen) {
	if (section.children.length === 0) return;
	const choice = section.children[chosen];
	choice.classList.add('selected');
	setTimeout(() => {
		choice.classList.remove('selected');
	}, 50);
}

textArea.addEventListener('keydown', (e) => {
	if (e.key !== 'Enter') return;
	if (textArea.value.trim() === '') return;
	e.preventDefault();
	textArea.value = '';
	let choiceTime = 100;

	const choose = setInterval(() => {
		let chosen = randomChoice(choices.length);
		if (choiceTime === 1000) {
			clearInterval(choose);
			console.log(chosen);
			section.children[chosen].classList.add('selected');
			choices = [];
			return;
		}
		renderChoose(chosen);
		choiceTime += 100;
	}, choiceTime);
});
