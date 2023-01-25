let numberLove = localStorage.getItem("numberLove") || 0;
document.querySelector(".number-love").innerText = numberLove;

document.querySelector(".love-btn").addEventListener("click", function () {
  ++numberLove;
  localStorage.setItem("numberLove", numberLove);
});

let numberSad = localStorage.getItem("numberSad") || 0;
document.querySelector(".number-sad").innerText = numberSad;

document.querySelector(".sad-btn").addEventListener("click", function () {
  ++numberSad;
  localStorage.setItem("numberSad", numberSad);
});
