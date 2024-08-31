const main = document.querySelector('main');
document.addEventListener('keydown', (event) => {
	console.log(event.key);
	console.log(event.code);
	console.log(event.which);
	const html = `
    <div>
      <small>event.key</small>
      <p class="box">${event.key === ' ' ? 'Space' : event.key}</p>
    </div>
    <div>
      <small>event.keyCode</small>
      <p class="box">${event.keyCode}</p>
    </div>
    <div>
      <small>event.code</small>
      <p class="box">${event.code}</p>
    </div>
  `;
	main.innerHTML = '';
	main.insertAdjacentHTML('beforeend', html);
});
