document.addEventListener('DOMContentLoaded', function() {
    const currentDateTime = new Date();
    document.getElementById("currentDateTime").innerHTML = "Today is " + currentDateTime.toLocaleTimeString() + " on " + currentDateTime.toLocaleDateString();
    
    document.getElementById("htmlValidationLink").href = "https://validator.w3.org/check?uri=" + encodeURIComponent(document.location.href);
    document.getElementById("cssValidationLink").href = "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(document.location.href);
});

function submitUserInfo() {
    const name = document.getElementById("userName").value;
    const mood = document.getElementById("userMood").value;
    let number = Math.abs(Math.round(document.getElementById("favNumber").value));
    let polygons = ["none", "henagon", "digon", "triangle", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    let polygonName = number <= 10 ? polygons[number] : "complex polygon";

    document.getElementById("userOutput").innerHTML = `Jovial Lion welcomes you, ${name}! We're glad you are feeling ${mood} today. Your favorite polygon is a ${polygonName}.`;
}

function provideAccessibilityTip() {
    alert("Ensure all images have descriptive alt text.");
}

function demoVoiceRecognition() {
    alert("Demonstrating how voice recognition can enhance website accessibility.");
}

function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
    alert("High contrast mode has been " + (document.body.classList.contains("high-contrast") ? "enabled" : "disabled"));
}

function shareAccessibilityResource() {
    alert("Check out our latest blog on accessibility best practices.");
}

function performHealthCheck() {
    alert("All system functionalities are operational!");
}