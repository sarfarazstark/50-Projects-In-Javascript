document.addEventListener('DOMContentLoaded', () => {
	const counts = {
		youtube: 23000,
		facebook: 6080,
		twitter: 3000,
	};

	const counters = document.querySelectorAll('.incrementing');

	counters.forEach((counter, index) => {
		const target = counts[counter.dataset.social];
		for (let i = 0; i <= target; i++) {
			setTimeout(() => {
				counter.innerText = i;
			}, i / 100);
		}
	});
});
