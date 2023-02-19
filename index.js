const container =   document.querySelector('#container');
const blocks = document.getElementsByClassName('block');

const randomcolor = () => {
    return Math.floor(Math.random() * 255);
}

//TODO -> add a RAINBOW mode + black/white mode
let isDragging = false;
let isBlack = false;
let isRainbow = false;
let erase = false;

const blackMode = () => {
    const black = document.querySelector('#black');
    black.addEventListener('click', () => {
        isBlack = true;
    isRainbow = false;
    erase = false;});
}

const rainbowMode = () => {
    const rainbow = document.querySelector('#rainbow');
    rainbow.addEventListener('click', () => {isRainbow = true; 
        isBlack = false;
        erase = false;});
}

const eraser = () => {
    const eraser = document.querySelector('#eraser');
    eraser.addEventListener('click', () => {erase = true;
        isBlack = false;
        isRainbow = false;});
}
blackMode();
rainbowMode();
eraser();

const drawingFunction = () => {

for (let element of blocks) {
element.addEventListener('mousedown', () => isDragging = true);
element.addEventListener('mouseup', () => isDragging = false);

element.addEventListener('mousemove', () => {
    if (isDragging && isBlack) {
    element.style.backgroundColor = 'black';
}       else if (isDragging && isRainbow) {
              element.style.backgroundColor = `rgba(${randomcolor()},${randomcolor()},${randomcolor()})`;
                 }
                 else if (isDragging && erase) {
                    element.style.backgroundColor = `white`;
                    }
             }
         )       
     }
}

setInterval(drawingFunction, 5000);

 for (let i = 0; i < 1024; i++) {
    let div = document.createElement('div')
    div.classList.add('block')
    container.appendChild(div);

}
drawingFunction();

let number;
//TODO -> create function that takes user inputs, and CHANGES styling of container
//grid-template-columns and squares created to the given number 
document.getElementById("myButton").addEventListener('click', () => {
    number = document.getElementById('gridValue').value;
    container.innerHTML = ''
    
    for (let i = 0; i < (number * number); i++) {
        let div = document.createElement('div')
        div.classList.add('block')
        container.appendChild(div);
    }
    drawingFunction();
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    let info = document.getElementById('gridinfo');
    info.innerHTML = `A ${number} x ${number} grid has been created.`;


})

function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}


//const test = document.getElementById('1');
//test.addEventListener('click', () => test.style.backgroundColor = 'red');



