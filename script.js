document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Vielen Dank, dass Sie uns eine Anfrage geschickt haben!");
    });
});