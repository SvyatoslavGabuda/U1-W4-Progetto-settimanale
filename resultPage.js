let params = new URLSearchParams(location.search);
let giuste = params.get("numDomCorrette");
let sbagliate = params.get("numDomSbagliate");
let totali = params.get("numeroTotaleDomande");
console.log(giuste, sbagliate, totali);

const addValuestoHtml=function(){
	const textWrongPercentage=document.querySelector("#wrongPercentage");
	const textWrongAnswers=document.querySelector("#wrongAnswers")
	const textCorrectAnswers=document.querySelector("#correctAnswers");
	const textCorrectPercentage=document.querySelector("#correctPercentage")

	const wrongpercentage=(sbagliate*100)/totali;
	const correctpercentage=(giuste*100)/totali;
	textWrongPercentage.innerText=`${wrongpercentage}%`
	textCorrectPercentage.innerText=`${correctpercentage}%`
	textCorrectAnswers.innerText=`${giuste} / ${totali} answers`
	textWrongAnswers.innerText=`${sbagliate} / ${totali} answers`
	
}


const pulsante = document.getElementById("btn")
	  pulsante.onclick = function(){
		console.log("ok")
		location.href="./Feedback Page.html";
	  }


addValuestoHtml()