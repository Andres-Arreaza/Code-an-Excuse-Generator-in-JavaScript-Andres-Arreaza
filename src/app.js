/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

window.onload = function() {
  const frase = document.getElementById("excuse");
  frase.innerText = generador();
};

function generador() {
  const whoPosicion = Math.floor(Math.random() * who.length);
  const actionPosicion = Math.floor(Math.random() * action.length);
  const whatPosicion = Math.floor(Math.random() * what.length);
  const whenPosicion = Math.floor(Math.random() * when.length);

  let excuse = `${who[whoPosicion]} ${action[actionPosicion]} ${what[whatPosicion]} ${when[whenPosicion]}`;
  return excuse;
}
