function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
