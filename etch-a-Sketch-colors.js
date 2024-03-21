const superContainer=document.querySelector("#superContainer");
let play=document.querySelector("#play");

let grid=undefined;




play.addEventListener("click",getPlayerChoice);

function getPlayerChoice (){

    

    grid= prompt("Please enter a number");

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
            gridRaw[a].classList.add("box");
            gridColumn[i].appendChild(gridRaw[a]);
        }
    }

    

    container.addEventListener("mouseover", marker);
    let color="#0000ff";      
    function marker (event) {

        const piker=document.querySelector("#piker");
        piker.addEventListener("input",changecolor);
        function changecolor() {
            color=piker.value;
        }

        let target=event.target; 
        target.style.backgroundColor=color;

    }

    play.addEventListener("click",clear);

    function clear () {
        superContainer.removeChild(container);
    }
} 

