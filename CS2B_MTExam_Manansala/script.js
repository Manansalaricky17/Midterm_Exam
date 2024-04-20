// JavaScript for form validation (example)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (nameValue === '') {
            setErrorFor(nameInput, 'Name cannot be empty');
        } else {
            setSuccessFor(nameInput);
        }

        if (emailValue === '') {
            setErrorFor(emailInput, 'Email cannot be empty');
        } else if (!isValidEmail(emailValue)) {
            setErrorFor(emailInput, 'Invalid email format');
        } else {
            setSuccessFor(emailInput);
        }

        if (messageValue === '') {
            setErrorFor(messageInput, 'Message cannot be empty');
        } else {
            setSuccessFor(messageInput);
        }
    });

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector('.error-message');

        formControl.classList.add('error');
        errorMessage.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
    }

    function isValidEmail(email) {
        // Simple email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
