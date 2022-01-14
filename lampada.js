const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {

    lamp.src = './img/ligada.jpg';

}

turnOn.addEventListener ('click', lampOn) 

function lampOff () {

    lamp.src = './img/desligada.jpg';

}

turnOff.addEventListener('click', lampOff);


lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseout', lampOff);

function lampbroken () {

    lamp.src = './img/quebrada.jpg';

}

lamp.addEventListener('click', lampbroken);

// projeto JavaScript, HTML e CSS


