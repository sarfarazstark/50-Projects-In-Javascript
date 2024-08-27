// adding bg images to button

const buttons = document.querySelectorAll('button');

let currentAudio = null;

const play = (src) => {
	if (currentAudio) {
		currentAudio.pause();
	}
	const audio = new Audio(`./assets/music/${src}.mp3`);
	currentAudio = audio;
	audio.play();
};

buttons.forEach((button) => {
	button.style.background = `url('./assets/images/${button.dataset.sound}.jpg') center/cover no-repeat`;
});
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		play(button.dataset.sound);
	});
});
