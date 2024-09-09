// Simulate table loading
window.addEventListener('load', () => {
	const spinner = document.getElementById('spinner');
	const content = document.getElementById('content');
	setTimeout(() => {
		spinner.style.display = 'none'; // Hide the spinner
		content.style.display = 'flex'; // Show the content
	}, 1500); // Adjust the delay as needed
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('tbody > tr').forEach((tr) => {
		const status = tr.querySelector('td:nth-child(2)');
		const problemAnchor = tr.querySelector('td:nth-child(4) > a');
		const solutionAnchor = tr.querySelector('td:nth-child(5) > a');

		if (problemAnchor) {
			problemAnchor.innerHTML = `${problemAnchor.innerHTML}<i data-feather="help-circle"></i> `;
		}

		if (solutionAnchor) {
		}

		if (status && status.textContent.trim() === '❌') {
			if (solutionAnchor) {
				solutionAnchor.href = '#';
				solutionAnchor.style.color = 'gray';
				solutionAnchor.style.cursor = 'not-allowed';
				solutionAnchor.removeAttribute('target');
			}
		} else {
			solutionAnchor.innerHTML = `${solutionAnchor.innerHTML}<i data-feather="check-circle"></i>`;
		}
	});

	feather.replace();
});
