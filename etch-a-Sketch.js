const superContainer=document.querySelector("#superContainer");
let grid=undefined;
let play=document.querySelector("#play");


let yellow="yellow";
let green="green";
let black="black";
let pink="pink";
let blue="blue";

let colorBefore=undefined;
let colorAfter=blue;

play.addEventListener("click",getPlayerChoice);
play.addEventListener("click",getColorChoice);


function getPlayerChoice (){
   grid= prompt("Please enter a number");
}

function getColorChoice () {
   alert("Please, choose one color");

   button1=document.createElement("button");
   button1.textContent="yellow";
   button1.setAttribute("style", "color: black; background: yellow;");
   button1.addEventListener("click",toYellow);
   button1.addEventListener("click",createHetchASketch);
   superContainer.appendChild(button1);

   button2=document.createElement("button");
   button2.textContent="green";
   button2.setAttribute("style", "color: black; background: green;");
   button2.addEventListener("click",toGreen);
   button2.addEventListener("click",createHetchASketch);
   superContainer.appendChild(button2);

   button3=document.createElement("button");
   button3.textContent="black";
   button3.setAttribute("style", "color: white; background: black;");
   button3.addEventListener("click",toBlack);
   button3.addEventListener("click",createHetchASketch);
   superContainer.appendChild(button3);

   button4=document.createElement("button");
   button4.textContent="pink";
   button4.setAttribute("style", "color: black; background: pink;");
   button4.addEventListener("click",toPink);
   button4.addEventListener("click",createHetchASketch);
   superContainer.appendChild(button4);

}


function toYellow () {
   colorBefore=yellow;
}

function toGreen () {
   colorBefore=green;
}

function toBlack () {
   colorBefore=black;
}

function toPink () {
   colorBefore=pink;
}
 
function createHetchASketch () {

const gridColumn= [];
const gridRaw=[];

let container=document.createElement("div");
superContainer.appendChild(container);

for(let i=0 ; i<grid ; i++) {
   gridColumn[i] = document.createElement("div");
   gridColumn[i].classList.add("column");
   container.appendChild(gridColumn[i]);

      for (let a=0; a<grid; a++ ) {
         gridRaw[a] = document.createElement("div");
         gridRaw[a].classList.add(colorBefore);
         gridColumn[i].appendChild(gridRaw[a]);
         }
   }

button1.removeEventListener("click",createHetchASketch);
button2.removeEventListener("click",createHetchASketch);
button3.removeEventListener("click",createHetchASketch);
button4.removeEventListener("click",createHetchASketch);

container.addEventListener("mouseover", marker);

function marker (event) {

   let target=event.target;  //event.target è una propietà che indica l' elemento appena raggiunto dal mouse
   target.classList.remove(colorBefore);
   target.classList.add(colorAfter);
}
play.addEventListener("click",clear);


function clear () {
   superContainer.removeChild(container);
   superContainer.removeChild(button1);
   superContainer.removeChild(button2);
   superContainer.removeChild(button3);
   superContainer.removeChild(button4);
}
}