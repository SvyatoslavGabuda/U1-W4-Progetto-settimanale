let params = new URLSearchParams(location.search);
let giuste = params.get("numDomCorrette");
let sbagliate = params.get("numDomSbagliate");
let totali = params.get("numeroTotaleDomande");
console.log(giuste, sbagliate, totali);
const testoazz = document.getElementById("azurr");
console.log("azzurro", testoazz);
const testorosso = document.getElementById("rosso");
console.log("rosso", testorosso);
const congrad = document.getElementById("congratulation");
const cerchio = document.getElementById("cerchio");

const addValuestoHtml = function () {
  const textWrongPercentage = document.querySelector("#wrongPercentage");
  const textWrongAnswers = document.querySelector("#wrongAnswers");
  const textCorrectAnswers = document.querySelector("#correctAnswers");
  const textCorrectPercentage = document.querySelector("#correctPercentage");
  const wrongpercentage = (sbagliate * 100) / totali;
  const correctpercentage = (giuste * 100) / totali;
  textWrongPercentage.innerText = `${wrongpercentage}%`;
  textCorrectPercentage.innerText = `${correctpercentage}%`;
  textCorrectAnswers.innerText = `${giuste} / ${totali} answers`;
  textWrongAnswers.innerText = `${sbagliate} / ${totali} answers`;
  if (correctpercentage > 60) {
  } else {
    testoazz.classList.add("hide");
    testorosso.classList.remove("hide");
    congrad.classList.add("hide");
    cerchio.style.border = "50px solid #c01494";
  }
};

const pulsante = document.getElementById("btn");
pulsante.onclick = function () {
  console.log("ok");
  location.href = "./Feedback Page.html";
};

addValuestoHtml();
