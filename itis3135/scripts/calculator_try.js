function showNum(num) {
    document.getElementById('display').value += num;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Invalid expression');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
