function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    };
    return color;
};

let intervalId = '';

document.querySelector('.start').addEventListener('click', startChangingColor);

document.querySelector('.stop').addEventListener('click', stopChangingColor);

function startChangingColor() {
    if (!intervalId){
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 500);
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = '';
};
