
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        let isFormValid = true;

        // Validation du nom
        const name = document.getElementById('in_Name');
        if (!isLettersOnly(name.value)) {
            showError(name, 'Le nom doit contenir uniquement des lettres');
            isFormValid = false;
        } else {
            clearError(name);
        }

        // Validation de l'email
        const email = document.getElementById('in_Email');
        if (!isValidEmail(email.value)) {
            showError(email, 'Veuillez entrer un email valide');
            isFormValid = false;
        } else {
            clearError(email);
        }

        // Validation du sujet
        const sujet = document.getElementById('in_Sujet');
        if (sujet.value.trim() === '') {
            showError(sujet, 'Veuillez entrer un sujet');
            isFormValid = false;
        } else {
            clearError(sujet);
        }

        // Validation du message
        const message = document.getElementById('in_message');
        if (message.value.trim() === '') {
            showError(message, 'Veuillez entrer un message');
            isFormValid = false;
        } else {
            clearError(message);
        }

        // Empêcher la soumission du formulaire si non valide
        if (!isFormValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const parent = input.parentElement;
        parent.classList.add('error');
        let error = parent.querySelector('.erreur');
        if (!error) {
            error = document.createElement('div');
            error.className = 'erreur';
            parent.appendChild(error);
        }
        error.textContent = message;
    }

    function clearError(input) {
        const parent = input.parentElement;
        parent.classList.remove('error');
        const error = parent.querySelector('.erreur');
        if (error) {
            parent.removeChild(error);
        }
    }

    function isLettersOnly(string) {
        return /^[a-zA-ZÀ-ÿ\s-]+$/.test(string);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
 

});