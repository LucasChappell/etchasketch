
const container = document.querySelector('#container')
function createBox(){
    for (i = 0; i < 256; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.id = 'box'
        container.appendChild(box);
    }
}
createBox()

function addClass(){
    box.classList.add('boxBlack')
}


const mouseTarget = document.getElementById('box')
mouseTarget.addEventListener('mouseover', function() {
    plsWork()
})



function plsWork(){
    console.log('hello?')
}



//const div1 = document.createElement('div')
//div1.classList.add('box1')
//container.appendChild(div1)
