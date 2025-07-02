const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId;
const StartChangingColor = function(){
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}
}

const StopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
};

document.querySelector('#Start').addEventListener('click', StartChangingColor)

document.querySelector('#Stop').addEventListener('click', StopChangingColor )