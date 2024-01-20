// ---------- Elements
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

// ---------- Functions

/**
 * Generate a random character
 * @param {String} character A string with all characters selected
 * @returns {String} A character randomly chosen
 */
function getCharacter(character) {
    return character[Math.floor(Math.random() * character.length)];
}

/**
 * Copy the value of generatedPasswordElement and write it on clipboard
 */
function copyPassword() {
    const password = generatedPasswordElement.querySelector("#password").innerText;

    // Checking if the password is not the default generic password or error message
    if ( password === "🔒🔒🔒🔒🔒🔒" || password === "Select your options and generate again!" ) {
        return window.alert("Generate a password before copying!");
    }

    // Copy password to clipboard
    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Password copied to clipboard!";

        setTimeout(() => {
            copyPasswordButton.innerText = "Click to copy the password!";
        }, 2500);
    });
}

/**
 * Generate a random array of characters to build a password based on
 * user choices.
 */
function generatePassword() {
    let password = "";
    const passwordLength = +lengthInput.value;
    const generators = [];

    while (generators.length <= passwordLength) {
        // Checking letters checkbox and add to generators array
        if (lettersInput.checked) {
            for (i = 0; i <= passwordLength; i++) {
                generators.push(getCharacter(lowerCase), getCharacter(upperCase));
            }
        }
        // Checking numbers checkbox and add to generators array
        if (numbersInput.checked) {
            for (i = 0; i <= passwordLength; i++) {
                generators.push(getCharacter(numbers));
            }
        }
        // Checking symbols checkbox and add to generators array
        if (symbolsInput.checked) {
            for (i = 0; i <= passwordLength; i++) {
                generators.push(getCharacter(symbols));
            }
        }
        // If no options were selected by user, the length of the array will be 0
        // then it will show an alert to user try again
        if (generators.length === 0) {
            alert("No characters selected!");
            generatedPasswordElement.querySelector("#password").innerText = "Select your options and generate again!";
            return;
        }
    }

    // Loop to add a random character from the generators array and build a password
    for (let i = 0; i < passwordLength; i++) {
        password += generators[Math.floor(Math.random() * generators.length)];
    }

    // Sent the value of password to be shown on website
    generatedPasswordElement.querySelector("#password").innerText = password;
}

// ---------- Events
// Call generatePassword function when the button is clicked
generatePasswordButton.addEventListener("click", () => {
    generatePassword();
});

// CopyPassword event listener
copyPasswordButton.addEventListener("click", () => {
    copyPassword();
});
