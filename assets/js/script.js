// Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("password");

// Inputs
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("letters");
const numbersInput = document.querySelector("numbers")
const symbolsInput = document.querySelector("symbols");

// Get random lower case letters
function getLetterLowerCase(){
    const lowerCase = "abcdefghijklmnopqrstuvxz";
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(lowerCase);
};

// Get random upper case letters
function getLetterUpperCase() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXZ";
    return upperCase[Math.floor(Math.random() * upperCase.length)]
};

// gent random numbers
function getNumbers() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)]
};

// Get random symbols
function getSymbols() {
    const symbols = "!@#$%&*(){}[]";
    return symbols[Math.floor(Math.random() * symbols.length)]
}
