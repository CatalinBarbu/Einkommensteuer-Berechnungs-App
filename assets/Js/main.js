const submiteHeader = document.getElementById("submiteHeader");
const header = document.getElementById("header");
const main = document.getElementById("main");
const jahr20 = document.getElementById("jahr20");
const jahr21 = document.getElementById("jahr21");
const jahr22 = document.getElementById("jahr22");
const singleInput = document.getElementById("singleInput");
const notSingle = document.getElementById("notSingle");
const submite = document.getElementById("submite");
const outPutGesamt = document.getElementById("outPutGesamt");
const outPutSteuer = document.getElementById("outPutSteuer");
let inPut = document.getElementsByClassName("inPut")[0];

submiteHeader.addEventListener("click", () => {
  header.classList.add("displayNone");
  main.classList.remove("displayNone");
});
submite.addEventListener("click", () => {
  let inPutValueAll = notSingle.checked ? inPut.value / 2 : inPut.value;
  console.log(inPutValueAll);
  let outPut = "";
  let outPut2 = "";
  let jahr22Abk = jahr22.checked & singleInput.checked;
  if (jahr22Abk && inPut.value <= 10347) {
    outPut = inPut.value;
    outPut2 = 0;
  } else if (jahr22Abk && inPut.value >= 10348 && inPut.value <= 14926) {
    outPut = (inPut.value - 10347) / 10000;
    outPut2 = (1088.67 * outPut + 1400) * outPut;
  } else if (jahr22Abk && inPut.value >= 14927 && inPut.value <= 58596) {
    outPut = (inPut.value - 14926) / 10000;
    outPut2 = (206.43 * outPut + 2397) * outPut + 869.32;
  } else if (jahr22Abk && inPut.value >= 58597 && inPut.value <= 277825) {
    outPut = 0.42 * inPut.value - 9336.45;
    outPut2 = outPut;
  } else if (jahr22Abk && inPut.value <= 277826) {
    outPut = 0.45 * inPut.value - 17671.2;
    outPut2 = Number(outPut);
  }
  outPutGesamt.innerHTML += inPut.value;
  outPutSteuer.innerHTML += outPut2.toFixed(2);
});
submite.addEventListener("click", () => {
  let outPut = "";
  let outPut2 = "";
  let jahr21Abk = jahr21.checked & singleInput.checked;
  if (jahr21Abk && inPut.value <= 9744) {
    outPut = inPut.value;
    outPut2 = 0;
  } else if (
    (jahr21Abk && inPut.value >= 9745 && inPut.value <= 14753) ||
    (jahr21Abk && inPut.value >= 14754 && inPut.value <= 57918)
  ) {
    outPut = (inPut.value - 9744) / 10000;
    outPut2 = (995.21 * outPut + 1400) * outPut;
  } else if (jahr21Abk && inPut.value >= 14754 && inPut.value <= 57918) {
    outPut = (inPut.value - 14753) / 10000;
    outPut2 = (208.85 * outPut + 2397) * outPut + 950.96;
  } else if (jahr21Abk && inPut.value >= 57919 && inPut.value <= 274612) {
    outPut = 0.42 * inPut.value - 9136.63;
    outPut2 = outPut;
  } else if (jahr21Abk && inPut.value >= 274613) {
    outPut = 0.45 * inPut.value - 17374.99;
    outPut2 = Number(outPut);
  }
  outPutGesamt.innerHTML = inPut.value;
  outPutSteuer.innerHTML = outPut2.toFixed(2);
});
submite.addEventListener("click", () => {
  let outPut = "";
  let parseIntoutPut2 = "";
  let jahr20Abk = jahr20.checked & singleInput.checked;
  if (jahr20Abk && inPut.value <= 9408) {
    outPut = inPut.value;
    outPut2 = 0;
  } else if (jahr20Abk && inPut.value >= 9409 && inPut.value <= 14532) {
    outPut = (inPut.value - 9408) / 10000;
    outPut2 = (972.87 * outPut + 1400) * outPut;
  } else if (jahr20Abk && inPut.value >= 14533 && inPut.value <= 57051) {
    outPut = (inPut.value - 14532) / 10000;
    outPut2 = (212.02 * outPut + 2397) * outPut + 972.79;
  } else if (jahr20Abk && inPut.value >= 57052 && inPut.value <= 270500) {
    outPut = 0.42 * inPut.value - 8963.74;
    outPut2 = outPut;
  } else if (jahr20Abk && inPut.value >= 270501) {
    outPut = 0.45 * inPut.value - 17078.74;
    outPut2 = Number(outPut);
  }
  outPutGesamt.innerHTML = inPut.value;
  outPutSteuer.innerHTML = Number(outPut2.toFixed(2));
});
