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
const domandeChieste = [];
const creaGruppoDomande = function () {
  for (let i = 0; i < 5; i++) {
    const domandaRandom =
      questions[Math.floor(Math.random() * questions.length)];
    if (!domandeChieste.includes(domandaRandom)) {
      domandeChieste.push(domandaRandom);
    }
  }
  //   while (domandeChieste.length <= 5) {
  //     const domandaRandom =
  //       questions[Math.floor(Math.random() * questions.length)];
  //     if (!domandeChieste.includes(domandaRandom)) {
  //       domandeChieste.push(domandaRandom);
  //     }
  //   }
  console.log("arrey fuori", domandeChieste);
  console.log("singola domanda", domandaRandom);
};

console.log("11", domandeChieste);
let numeroD = 1; //massimo6
const risposteGiuste = [];
const risposteSbaglaite = [];
let numeroDomGiuste = 0;
let numeroDomSbagliate = 0;

const domanda = function (indice) {
  creaGruppoDomande();

  const domandaOra = domandeChieste[indice];
  console.log("aquesta è il vaore di domandaOra", domandaOra);
  console.log("questo è il valore di domendechiestei", domandeChieste[indice]);

  let numeroDomCorrente = document.getElementById("numeroDomanda");
  numeroDomCorrente = numeroD;

  const quesitoDom = document.getElementById("domanda");
  quesitoDom.innerText = domandaOra.question;

  const opzione1 = document.getElementById("opzione1");
  opzione1.innerText = domandaOra.correct_answer;

  const opzione2 = document.getElementById("opzione2");
  opzione2.innerText = domandaOra.incorrect_answers[0];

  const opzione3 = document.getElementById("opzione3");
  opzione3.innerText = domandaOra.incorrect_answers[1];

  const opzione4 = document.getElementById("opzione4");
  opzione4.innerText = domandaOra.incorrect_answers[2];
  console.log("aaa", domandeChieste);

  console.log("bbb", opzione1);
  console.log("ccc", quesitoDom);
  console.log("ddd", opzione3);
};
console.log("eee", domandeChieste);

const controllRisposta = function () {
  const domandaCurr = domandeChieste[numeroD - 1];
  console.log("domandaCurr", domandaCurr);
  const rispostaCoretta = domandaCurr.correct_answer;
  const risposte = document.querySelectorAll(".risposte>button");
  risposte.onclick = function (event) {
    console.log(event);
    event.cuurrentTarget.classList.add(".rispostaSelezionata");
  };
  let rispostaSelezionata = document.querySelector(
    ".risposte .rispostaSelezionata"
  );
  if (rispostaCoretta === rispostaSelezionata.innerText) {
    numeroDomGiuste++;
    risposteGiuste.push(domandaCurr);
  } else {
    numeroDomSbagliate++;
    risposteSbaglaite.push(domandaCurr);
  }
};
console.log("eee2", domandeChieste);
const prossimaDomanda = function () {
  controllRisposta();
  if (numeroD <= 7) {
    domanda(numeroD - 1);
  } else {
    console.log("esame terminato");
  }
};
