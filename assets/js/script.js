// Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Inputs
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");

// Get random lower case letters
function getLetterLowerCase() {
    const lowerCase = "abcdefghijklmnopqrstuvxz";
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(lowerCase);
}

// Get random upper case letters
function getLetterUpperCase() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXZ";
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

// gent random numbers
function getNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

// Get random symbols
function getSymbol() {
    const symbols = "!@#$%&*(){}[]";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate password function
function generatePassword (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
) {
    // Set a password to a empty string
    let password = "";

    // Get the user choice for length from the length input
    const passwordLength = +lengthInput.value;

    // Set a generator to receiving the push if checkbox input is checked
    const generators = [];

    // Checking the letters checkbox and pushing a random letter to the generators array
    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    }

    // Checking the number checkbox and pushing a random number to the generators array
    if (numbersInput.checked) {
        generators.push(getNumber);
    }

    // Checking the symbol checkbox and pushing a random symbol to the generators array
    if (symbolsInput.checked) {
        generators.push(getSymbol);
    }

    // Checking if NO checkbox is checked and showing an alert to the user
    if (generators.length === 0) {
        alert("No caracteres selected! Select your options and generate again!");
        generatedPasswordElement.querySelector("#password").innerText =
        "Select your options and generate again!";
        return;
    }

    // Making a loop to set the password length as user choice
    for (let i = 0; i < passwordLength; i++) {
        password += generators[Math.floor(Math.random() * generators.length)]();
    }

    // Sending the password value to the generatedPasswordElement to be shown to user
    generatedPasswordElement.querySelector("#password").innerText = password;
    };


// Events
// Call generatePassword function when the button is clicked
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});
