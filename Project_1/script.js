const panels = document.querySelectorAll(".panel");

const removeActiveClasses = function () {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
};
panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
});
