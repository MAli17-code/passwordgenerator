const input_password = document.getElementById("Password")
const length = 12;
const copy = document.getElementById("copy")
const upperCase = "ABCDEFGHIJKLMNOPKQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbol = "@!{}[]?/\|<>,.-_()*&^%$#@";

const addAll = upperCase + lowerCase + Numbers + Symbol;

function generatePassword() {
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)]
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    Password += Numbers[Math.floor(Math.random() * Numbers.length)]
    Password += Symbol[Math.floor(Math.random() * Symbol.length)]

    while (length > Password.length) {
        Password += addAll[Math.floor(Math.random() * addAll.length)]
    }
    input_password.value = Password;
    console.log(input_password.value);
}  
