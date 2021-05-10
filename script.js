
const container = document.querySelector('#container')
let root = document.documentElement;
let penColor = 'black'
let color = "#3345FF"
function events(){
    document.getElementById('blue').addEventListener("click", function(){
        penColor = 'blue'
    }
    )
    document.getElementById('black').addEventListener("click", function(){
        penColor = 'black'
    }
    )
    document.getElementById('red').addEventListener("click", function(){
        penColor = 'red'
    }
    )
    document.getElementById('green').addEventListener("click", function(){
        penColor = 'green'
    }
    )
    document.getElementById('white').addEventListener("click", function(){
        penColor = 'white'
    }
    )
    document.getElementById('rainbow').addEventListener("click", function(){
        penColor = color
    }
    )
}

function createBox(dimension){
    root.style.setProperty('--row-height',(100/dimension) + "%");
    let autos = "";
    for (k = 0; k < dimension; k++){
        autos += " auto";
    }
    root.style.setProperty('--cols',autos);
    for (j = 0; j < dimension; j++){
        const row = document.createElement("div");
        for (i = 0; i < dimension; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            
            box.addEventListener("mouseover", function() {
                box.style.backgroundColor = penColor
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    } 
}

function clear(){
   document.getElementById('clear').addEventListener("click", function(){
        container.innerHTML= '';
    })
}



events()
createBox(160)
clear()