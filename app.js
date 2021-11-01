// selcting elements
const matricInput = document.querySelector('#matric-marks');
const interInput = document.querySelector('#inter-marks');
const hafizInput = document.querySelector('#hafiz-e-Quran');
const form = document.querySelector('.aggregate-form');
const output = document.querySelector('#output');

// defining vars
let matricMarks;
let interMarks;
let hafizQuran;
const matricTotal = 1100;
const interTotal = 1100;

// Form submit event
form.addEventListener('submit', generateResult);

// generateResult
function generateResult(e) {

    getInputValues();
    const aggregate = calculateAggregate();
    displayResult(aggregate);


    e.preventDefault();
}

// getInputValues
function getInputValues() {

    // checking for empty input
    if (matricInput.value === '' || interInput.value === '') {
        alert('Please enter both degree marks');
    }
    // checking for greater input
    if (matricInput.value > 1100 || interInput.value > 1100) {
        alert('Enter valid marks below 1100.');
        return;
    } else {
        matricMarks = Number(matricInput.value);
        interMarks = Number(interInput.value);
        hafizQuran = Number(hafizInput.value);
    }
    matricInput.value = '';
    interInput.value = '';
    hafizInput.value = 0;
}

function calculateAggregate() {
    let marksEarned = (matricMarks / 4) + interMarks;
    if (hafizQuran) {
        marksEarned += 20;
    }
    const totalMarks = (matricTotal / 4) + interTotal;

    const aggregate = ((marksEarned / totalMarks) * 100).toFixed(2);

    return aggregate;
}

// 
function displayResult(aggregate) {
    output.textContent = `${aggregate}%.`;
}