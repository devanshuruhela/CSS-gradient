import{ without } from 'lodash';
console.log(without);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

function colorselector()
{
  body.style.background = "linear-gradient(to right, "+color1.value + "," + color2.value + ")";
  console.log(color1.value);
  css.textContent = body.style.background + ";";
  
}

color1.addEventListener("input" , colorselector);

color2.addEventListener("input" , colorselector);