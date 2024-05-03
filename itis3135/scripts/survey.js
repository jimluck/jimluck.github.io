document.getElementById('introForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const formData = new FormData(this);
    const resultDisplay = document.createElement('div');
    resultDisplay.innerHTML = '<ul>';
    formData.forEach((value, key) => {
        if(value !== '') {
            resultDisplay.innerHTML += `<li><strong>${key.replace(/([A-Z])/g, ' $1').trim()}:</strong> ${value}</li>`;
        }
    });
    resultDisplay.innerHTML += '</ul>';
    document.querySelector('main').appendChild(resultDisplay);
});

function addCourse() {
    const container = document.getElementById('coursesContainer');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'course';
    newCourseInput.classList.add('course');
    newCourseInput.placeholder = "Course Name";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.classList.add('deleteCourseButton');
    deleteButton.onclick = function() {
        container.removeChild(newCourseInput);
        container.removeChild(deleteButton);
    };

    container.appendChild(newCourseInput);
    container.appendChild(deleteButton);
}
