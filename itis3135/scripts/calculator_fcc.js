document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.calculator__display');
    const keys = calculator.querySelector('.calculator__keys');

    keys.addEventListener('click', e => {
        if (!e.target.matches('button')) return;

        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.';
            }
        }

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === 'clear') {
            display.textContent = '0';
            calculator.dataset.previousKeyType = 'clear';
        }

        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }

        Array.from(keys.children).forEach(k => k.classList.remove('is-depressed'));
    });

    function calculate(n1, operator, n2) {
        const firstNum = parseFloat(n1);
        const secondNum = parseFloat(n2);
        if (operator === 'add') return firstNum + secondNum;
        if (operator === 'subtract') return firstNum - secondNum;
        if (operator === 'multiply') return firstNum * secondNum;
        if (operator === 'divide') return firstNum / secondNum;
    }
});
