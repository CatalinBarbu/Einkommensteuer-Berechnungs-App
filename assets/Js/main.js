const submiteHeader = document.getElementById("submiteHeader");
const header = document.getElementById("header");
const main = document.getElementById("main");

submiteHeader.addEventListener("click", () => {
  header.classList.add("displayNone");
  main.classList.remove("displayNone");
});
