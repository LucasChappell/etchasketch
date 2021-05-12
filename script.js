
const container = document.querySelector('#container')
let root = document.documentElement;
let penColor = 'black'
let color = '#FFFFFF'
function newColor(){
    color = '#' + Math.floor(Math.random()*16777125).toString(16);
    penColor = color
}
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
        newColor()
        penColor=color
        console.log(color)
        
    }
    )
    document.getElementById('large').addEventListener("click", function(){
        createBox(250)
    }
    )
    document.getElementById('medium').addEventListener("click", function(){
        createBox(150)
    }
    )
    document.getElementById('small').addEventListener("click", function(){
        createBox(75)
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
clear()
alert('select small medium or large to begin');