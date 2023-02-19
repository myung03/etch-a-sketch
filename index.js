const container =   document.querySelector('#container');
const blocks = document.getElementsByClassName('block');

const randomcolor = () => {
    return Math.floor(Math.random() * 255);
}

//TODO -> add a RAINBOW mode + black/white mode
//TODO -> implement slider 
let isDragging = false;

const drawingFunction = () => {

for (let element of blocks) {
element.addEventListener('mousedown', () => isDragging = true);
element.addEventListener('mouseup', () => isDragging = false);

element.addEventListener('mousemove', () => {
    if (isDragging) {
    element.style.backgroundColor = `rgba(${randomcolor()},${randomcolor()},${randomcolor()})`
    //element.style.backgroundColor = 'black';
}})
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

//const test = document.getElementById('1');
//test.addEventListener('click', () => test.style.backgroundColor = 'red');



