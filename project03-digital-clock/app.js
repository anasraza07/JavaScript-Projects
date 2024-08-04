setInterval(() => {
    const date = new Date();
    document.querySelector('.clock').innerText = date.toLocaleTimeString();
}, 1000)
let date = new Date();
document.querySelector('.date').innerText = date.toDateString();