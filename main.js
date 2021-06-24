const textElement = document.getElementById("text").innerHTML;
const regexp = /'/gm;

const text = textElement.replaceAll(regexp, '"');

document.getElementById("text").innerHTML = text;
