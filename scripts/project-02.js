import {renderNavbar} from './navbar.js';
renderNavbar();

const form = document.querySelector('.js-bmi-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = Number(document.querySelector('#js-height').value);
    const weight = Number(document.querySelector('#js-weight').value);
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    form.style.marginBottom = '15px';
    document.querySelector('.js-bmi').innerHTML = `Your BMI is <span>${bmi}</span>.`;
    let bmiStatus;
    if (bmi < 18.5) {
        bmiStatus = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus = 'Healthyweight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus = 'Overweight';
    } else {
        bmiStatus = 'Obesity';
    }
    document.querySelector('.js-status').innerHTML = `<span>Status</span>: ${bmiStatus}`;
})
