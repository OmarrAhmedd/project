document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            // You can add code here to submit the form data to the server
            // For example, using AJAX or Fetch API
            // This is just a basic example
            alert("Form submitted successfully!");
            form.reset(); // Reset the form after submission
        }
    });
});
