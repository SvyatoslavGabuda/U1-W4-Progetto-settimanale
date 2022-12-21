const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
const startButton = document.getElementById("startBtn");
const nextButton = document.getElementById("nextBtn");
const finishButton = document.getElementById("finishBtn");
const contenitoreDomande = document.getElementById("domanda");
const titoloDomanda = document.getElementById("testoDomanda");
const bottoniRisposta = document.getElementById("risposte");
const contenitoreGenerale = document.getElementById("contenitoreQuiz");
const valoreIndice = document.getElementById("indiceDomanda");
const valoreDomandeTotali = document.getElementById("domandetotali");
const pvaloriIndiciDom = document.getElementById("contatoredomanda");
const domandeMescolate = [];
let indexDomandaCorrente = 0;
let numDomCorrette = 0;
let numDomSbagliate = 0;
const arrDomGiuste = [];
const arrDomSbagliate = [];
let numeroTotaleDomande = 0;

const timer = function () {
  let sec = 30;
  const intervallo = setInterval(() => {
    const orologio = document.getElementById("displyTimer");
    orologio, (innerText = "00:" + sec);
    sec--;
    if (sec < 0) {
      clearInterval(intervallo);
    }
  }, 1000);
};

const creaGruppoDomande = function () {
  let n = Math.floor(Math.random() * 6 + 3);
  numeroTotaleDomande = n + 1;
  valoreDomandeTotali.innerText = numeroTotaleDomande;
  while (domandeMescolate.length <= n) {
    const domandaRandom =
      questions[Math.floor(Math.random() * questions.length)];
    if (!domandeMescolate.includes(domandaRandom)) {
      domandeMescolate.push(domandaRandom);
    }
  }
};

const inizia = function () {
  creaGruppoDomande();
  indexDomandaCorrente = 0;
  startButton.classList.add("hide");
  contenitoreDomande.classList.remove("hide");
  pvaloriIndiciDom.classList.remove("hide");

  proxDomanda();
};

startButton.addEventListener("click", inizia);
nextButton.addEventListener("click", () => {
  indexDomandaCorrente++;
  proxDomanda();
});
const proxDomanda = function () {
  reset();

  mostraDomanda(domandeMescolate[indexDomandaCorrente]);
  valoreIndice.innerText = indexDomandaCorrente + 1;
};

const mostraDomanda = function (domande) {
  titoloDomanda.innerText = domande.question;
  const rispostaGiusta = [];
  rispostaGiusta.push(domande.correct_answer);

  const arrDiRisposte = rispostaGiusta.concat(domande.incorrect_answers);

  console.log(arrDiRisposte);
  const arrDiRisposteMescolate = [];
  const lunghezza = arrDiRisposte.length;
  const risposteRimescolate = function () {
    while (arrDiRisposteMescolate.length != lunghezza) {
      const rispostaRandom =
        arrDiRisposte[Math.floor(Math.random() * lunghezza)];

      if (arrDiRisposteMescolate.includes(rispostaRandom)) {
      } else {
        arrDiRisposteMescolate.push(rispostaRandom);
      }
    }
  };

  risposteRimescolate();
  console.log(arrDiRisposteMescolate);

  arrDiRisposteMescolate.forEach((risp) => {
    const button1 = document.createElement("button");
    button1.innerText = risp;
    button1.classList.add("btn");
    button1.addEventListener("click", selezionaRisposta);
    bottoniRisposta.appendChild(button1);
  });
};

const reset = function () {
  nextButton.classList.add("hide");
  while (bottoniRisposta.firstChild) {
    bottoniRisposta.removeChild(bottoniRisposta.firstChild);
  }
};
const selezionaRisposta = function (e) {
  const bottoneSelezionato = e.target;
  console.log("evento bottone", bottoneSelezionato);

  const btncreati = document.querySelectorAll(".btngrid .btn");
  console.log(btncreati);

  btncreati.forEach((btn) => btn.classList.remove("rispostaSelezionata"));

  bottoneSelezionato.classList.add("rispostaSelezionata");

  if (
    bottoneSelezionato.innerText ===
    domandeMescolate[indexDomandaCorrente].correct_answer
  ) {
    numDomCorrette++;
    arrDomGiuste.push(domandeMescolate[indexDomandaCorrente]);
  } else {
    numDomSbagliate++;
    arrDomSbagliate.push(domandeMescolate[indexDomandaCorrente]);
  }
  if (domandeMescolate.length > indexDomandaCorrente + 1) {
    nextButton.classList.remove("hide");
  } /*else {
    const rispostegiuste = document.createElement("h2");
    const rispostegiustetesto = document.createElement("h2");

    rispostegiustetesto.innerText = "Questo sono le vostre risposte esatte:";
    rispostegiuste.innerText = numDomCorrette;
    contenitoreGenerale.appendChild(rispostegiustetesto);
    contenitoreGenerale.appendChild(rispostegiuste);
    contenitoreDomande.classList.add("hide");
    startButton.classList.add("hide");
    valoreIndice.classList.add("hide");
    finishButton.classList.remove("hide");
    pvaloriIndiciDom.classList.add("hide");
    finishButton.onclick = function () {
      location.assign(
        //apicistorti
        `/results Page.html?numDomCorrette=${numDomCorrette}&numDomSbagliate=${numDomSbagliate}&numeroTotaleDomande=${numeroTotaleDomande}`
      );
    };
  }
  */
};
