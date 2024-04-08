var form = document.getElementById('form');

 form.addEventListener('submit', function(e) {
    e.preventDefault();

    var isEmailvalid = validateEmail();
    if(isEmailvalid) {
        submitForm();
    }
})

// this function checks if the email is valid
function validateEmail() {
    var email = document.getElementById('email');
    var emailValue = email.value.trim();
    var errorMessage = document.getElementById('errorMessage');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(emailValue)) {
        return true;
    } else {
        email.classList.add('error');
        errorMessage.style.display = 'block';
        return false;
    }
}

var showThanks = document.getElementById('show-thanks');

// this function submits the form if the email is valid
function submitForm() {
    var page = document.getElementById('page');

    page.style.display = 'none';
    showThanks.style.display = 'block';
}

var dismissButton = document.getElementById('dismissButton');
dismissButton.addEventListener('click', () => {
    page.style.display = 'grid';
    showThanks.style.display = 'none';
})