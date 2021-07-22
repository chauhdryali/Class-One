
// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions to show an error
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

// Function to show the requirements for signUp
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === '') {
            showError(input, `${getFieldId(input)} is required`);
        } else {
            showSucces(input);
        }
    });
}

// Function to get the ID's of the input field
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function to show the Green Border Color while success
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check the length of an input field
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} at least ${min} characters`);
    } else if (input.vlue.length > max) {
        showError(input, `${getFieldId(input)} at least ${max} characters`);
    } else {
        showSucces(input);
    }
}
// Function to check email is valid
function checkEmail(input) {
    // JS email regex (Regular Expressions)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input);
    } else {
        showError(input, `${getFieldId(input)} is not valid`);
    }
}

// Funcion to check/confirm the password does match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// Get event listener for submit button
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Stop page from reloading on submit button
    //can get value by username.value e.g: console.log(username.value);

    //Check if username is empty
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 8, 10);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});
