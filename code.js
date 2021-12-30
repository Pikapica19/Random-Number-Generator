const random = document.querySelector(".count");
const btn = document.querySelector(".generate");

const randomNumber = () => {
  const number = Math.floor(Math.random() * 10) + 1;
  random.innerHTML = number;
};

btn.addEventListener("click", randomNumber);