document.getElementById('introForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; // Clear previous results

    // Append each form field value to the result list
    for (let [key, value] of formData.entries()) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
        resultList.appendChild(li);
    }

    document.getElementById('resultDisplay').style.display = 'block'; // Show results
});

function resetResult() {
    document.getElementById('introForm').reset(); // Reset the form fields
    document.getElementById('resultList').innerHTML = ''; // Clear results list
    document.getElementById('resultDisplay').style.display = 'none'; // Hide the result section
}

function addCourse() {
    const container = document.getElementById('coursesContainer');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'course';
    newCourseInput.classList.add('course');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
        container.removeChild(newCourseInput);
        container.removeChild(deleteButton);
    };

    container.appendChild(newCourseInput);
    container.appendChild(deleteButton);
}
