const colorBoxes = document.getElementsByClassName('color-box');

for (let i = 0; i < colorBoxes.length; i++) {
    // console.log(colorBoxes[i].id);
    const colorBox = colorBoxes[i];
    colorBox.addEventListener('click', function (e) {
        document.body.style.backgroundColor = e.target.id;
    })
}