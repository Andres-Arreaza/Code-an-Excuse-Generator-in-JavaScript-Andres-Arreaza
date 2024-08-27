/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  const p = document.getElementById("excuse");
  p.innerText = generador();
};

function generador() {
  const whoPosicion = Math.floor(Math.random() * who.length);
  const actionPosicion = Math.floor(Math.random() * action.length);
  const whatPosicion = Math.floor(Math.random() * what.length);
  const whenPosicion = Math.floor(Math.random() * when.length);
  // console.log(who[3]);
  // console.log(actionPosicion);
  // console.log(whatPosicion);
  // console.log(whenPosicion);

  const excuse = `${who[whoPosicion]} ${action[actionPosicion]} ${what[whatPosicion]} ${when[whenPosicion]}`;
  return excuse;
}
