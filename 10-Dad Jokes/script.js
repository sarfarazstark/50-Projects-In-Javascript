const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#change');

const getJokes = async function () {
	const response = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	});

	if (!response.ok) {
		joke.innerHTML = 'Something went wrong';
		return;
	}

	const data = await response.json();
	joke.innerHTML = data.joke;
};

document.addEventListener('DOMContentLoaded', getJokes);
jokeBtn.addEventListener('click', getJokes);
