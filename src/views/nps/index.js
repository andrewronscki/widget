import html from "./index.html";
import "./styles.css";

let elements = [];
let body;

export function show(params) {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = html;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  document
    .getElementById("form-radio")
    .addEventListener("submit", (e) => sendResearch(e));
}

export function close() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
}

export function sendResearch(e) {
  e.preventDefault();

  const value = document.querySelector('input[name="radio"]:checked').value;

  alert(`Formulário enviado, valor: ${value}`);

  close();
}
