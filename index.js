const container =   document.querySelector('#container');

 for (let i = 0; i < 1024; i++) {
    let div = document.createElement('div')
    div.classList.add('block')
    container.appendChild(div);

}

//const test = document.getElementById('1');
//test.addEventListener('click', () => test.style.backgroundColor = 'red');

const blocks = document.getElementsByClassName('block');
const randomcolor = () => {
		return Math.floor(Math.random() * 255);
	}



console.log(blocks);

let isDragging = false;

for (let element of blocks) {
    element.addEventListener('mousedown', () => isDragging = true);
    element.addEventListener('mouseup', () => isDragging = false);

    element.addEventListener('mousemove', () => {
        if (isDragging) {
        //element.style.backgroundColor = `rgba(${randomcolor()},${randomcolor()},${randomcolor()})`
        element.style.backgroundColor = 'black';
    }})
}

let number;
//TODO -> create function that takes user inputs, and CHANGES styling of container
//grid-template-columns and squares created to the given number 
document.getElementById("myButton").addEventListener('click', () => {
    number = document.getElementById('gridValue').value;
    console.log(number);
})