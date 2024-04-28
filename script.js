function getRandomColor() {
    var color = '';
    let randomIntOne = Math.floor(Math.random() * 255);
    let randomIntTwo = Math.floor(Math.random() * 255);
    let randomIntThree = Math.floor(Math.random() * 255);

    for(var i = 0; i < 3; i++){
        color = 'rgb(' + randomIntOne + ", " + randomIntTwo + ", " + randomIntThree + ")";
    }
    return color;
}

function changeColor() {
    var footer = document.querySelector('footer');
    var h1 = document.querySelector('h1');
    h1.style.color = getRandomColor();
    footer.style.color = getRandomColor();
}

setInterval(changeColor, 3000);
