document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nameInput').focus();
});

let persons = [];
let salaries = [];

function addSalary() {
    let name = document.getElementById('nameInput').value.trim();
    let salary = parseFloat(document.getElementById('salaryInput').value);
    if (name === '' || isNaN(salary)) {
        alert('Both name and salary fields are required, and salary must be a number.');
        return;
    }
    persons.push(name);
    salaries.push(salary);
    updateEmployeeSelect();
    document.getElementById('nameInput').value = '';
    document.getElementById('salaryInput').value = '';
    document.getElementById('nameInput').focus();
}

function modifySalary() {
    let select = document.getElementById('employeeSelect');
    let newSalary = parseFloat(document.getElementById('newSalaryInput').value);
    if (select.selectedIndex === -1 || isNaN(newSalary)) {
        alert('Select a valid employee and enter a numeric value for the new salary.');
        return;
    }
    salaries[select.selectedIndex] = newSalary;
}

function displayResults() {
    let total = salaries.reduce((acc, curr) => acc + curr, 0);
    let average = salaries.length > 0 ? total / salaries.length : 0;
    let highest = salaries.length > 0 ? Math.max(...salaries) : 0;
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Salary Results</h2>
        <p>Average Salary: ${average.toFixed(2)}</p>
        <p>Highest Salary: ${highest.toFixed(2)}</p>
    `;
}

function displaySalary() {
    let tableBody = document.getElementById('results_table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = persons.map((person, index) => `<tr><td>${person}</td><td>${salaries[index].toFixed(2)}</td></tr>`).join('');
}

function updateEmployeeSelect() {
    let select = document.getElementById('employeeSelect');
    select.innerHTML = persons.map((person, index) => `<option value="${index}">${person}</option>`).join('');
}
