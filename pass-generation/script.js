function generatePassword() {
    const length = document.getElementById("length").value;
    const useLowercase = document.getElementById("lowercase").checked;
    const useUppercase = document.getElementById("uppercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    
    let charset = "";
    if (useLowercase) charset += lowercase;
    if (useUppercase) charset += uppercase;
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
}

function updateLength() {
    document.getElementById("lengthValue").textContent = document.getElementById("length").value;
}
