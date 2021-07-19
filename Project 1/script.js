
// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    //get overall form-control, you can say get parent element
    const formControl = input.parentElement;
    //Overide the function
    formControl.className = 'form-control error';
    //Get Small Element
    const small = formControl.querySelector('small');
    //Override the small text 
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// function to check email is valid
function isValidEmail(email) {
    // JS email regex (Regular Expressions)

}


// Get event listener for submit button
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Stop page from reloading on submit button
    //can get value by username.value e.g: console.log(username.value);

    //Check if username is empty
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSucces(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else {
        showSucces(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSucces(password);
    }

    if (password2.value === '') {
        showError(password2, 'Confirmation is required');
    } else {
        showSucces(password2);
    }


});