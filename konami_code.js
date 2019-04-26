const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown', konamiCode);
}

function konamiCode(e){
  var key = e.key;
  if (key == codes[index] && key === "a"){
    alert ("Nice job inputting the code")
  }
}
