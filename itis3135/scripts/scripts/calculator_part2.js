document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('result');

    // Attach event listeners to all buttons
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', function() {
            switch (this.id) {
                case 'clear':
                    resultInput.value = '';
                    break;
                case 'equals':
                    try {
                        resultInput.value = eval(resultInput.value);
                    } catch (error) {
                        resultInput.value = 'Error';
                    }
                    break;
                default:
                    if (['add', 'subtract', 'multiply', 'divide'].includes(this.id)) {
                        resultInput.value += ` ${this.textContent} `;
                    } else {
                        resultInput.value += this.textContent;
                    }
            }
        });
    });
});
function toggleCSS() {
    var stylesheet = document.getElementById('mainStyle');
    stylesheet.disabled = !stylesheet.disabled;
}

