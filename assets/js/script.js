// Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

const lowerCase = "abcdefghijklmnopqrstuvxz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXZ";
const numbers = "0123456789";
const symbols = "!@#$%&*(){}[]";

// Functions
// Function to generate a random character
function getCharacter(character) {
    return character[Math.floor(Math.random() * character.length)];
}

// Function to generate password
function generatePassword() {
    let password = "";
    const passwordLength = +lengthInput.value;
    const generators = [];

    while (generators.length <= passwordLength) {
        // Checking letters checkbox and add to generators array
        if (lettersInput.checked) {
            for ( i = 0; i < passwordLength; i++){
                generators.push(getCharacter(lowerCase), getCharacter(upperCase));
            };
        };
        // Checking numbers checkbox and add to generators array
        if (numbersInput.checked) {
            for ( i = 0; i < passwordLength; i++){
                generators.push(getCharacter(numbers));
            };
        };
        // Checking symbols checkbox and add to generators array
        if (symbolsInput.checked) {
            for ( i = 0; i < passwordLength; i++){
                generators.push(getCharacter(symbols));
            };
        };
    };

    for (let i = 0; i < passwordLength; i++) {
      password += generators[Math.floor(Math.random() * generators.length)];
    };

    generatedPasswordElement.querySelector("#password").innerText = password;  
};

// Events
// Call generatePassword function when the button is clicked
generatePasswordButton.addEventListener("click", () => {
    generatePassword();
});

// CopyPassword event listener
copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("#password").innerText;

    // Checking if the password is not the default generic password
    if (password === "🔒🔒🔒🔒🔒🔒") {
        return window.alert("Generate a password before copying!");
    }

    // Copy password to clipboard
    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Password copied to clipboard!";

        setTimeout(() => {
            copyPasswordButton.innerText = "Click to copy the password!";
        }, 2500);
    });
});
