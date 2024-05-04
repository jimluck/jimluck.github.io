document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nameInput').focus();
});

let persons = [];
let salaries = [];

function addSalary() {
    let name = document.getElementById('nameInput').value.trim();
    let salary = parseFloat(document.getElementById('salaryInput').value);
    if (name === '' || isNaN(salary)) {
        alert('Please enter a valid name and a numeric salary.');
        return;
    }
    persons.push(name);
    salaries.push(salary);
    document.getElementById('nameInput').value = '';
    document.getElementById('salaryInput').value = '';
    document.getElementById('nameInput').focus();
    updateEmployeeSelect();
    displaySalary(); // Update the table display
}

function modifySalary() {
    let select = document.getElementById('employeeSelect');
    let newSalary = parseFloat(document.getElementById('newSalaryInput').value);
    if (select.selectedIndex !== -1 && !isNaN(newSalary)) {
        salaries[select.selectedIndex] = newSalary;
        displaySalary(); // Update the table display
    } else {
        alert('Invalid salary or no employee selected.');
    }
    document.getElementById('newSalaryInput').value = '';
}

function displayResults() {
    let total = salaries.reduce((acc, curr) => acc + curr, 0);
    let average = total / salaries.length;
    let highest = Math.max(...salaries);
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Salary Analysis</h2>
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
