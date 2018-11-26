const genBtn = document.getElementById('generate');
const displayPassword = document.getElementById('password-display');

// user clicks button
genBtn.onclick = generatePassword;

// generate a password
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";

function generatePassword() {
    // create password
    let password = "";
    
    for(let i = 0; i < 10; i++) {
        const n = Math.floor(Math.random() * alphabet.length);
        // randomize uppercase vs lowercase
        password +=alphabet[n]; 
    }
        for(let i = 0; i < 9; i++) {
        const n1 = Math.floor(Math.random() * numbers.length);
        password +=alphabet[n1]; 
        }

    // display password 
    displayPassword.textContent= password;
}