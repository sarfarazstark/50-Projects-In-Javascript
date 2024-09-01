const openAnswer = document.getElementById("open-answer");
const answer = document.querySelector(".answer");

openAnswer.addEventListener("click", () => {
  openAnswer.classList.toggle("bi-x-circle");
  if (openAnswer.classList.contains("bi-x-circle")) {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});
