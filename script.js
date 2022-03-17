// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "[", "]", "{", "}", "|", "/", "?", ".", ">", ",", "<", ";"];
var all = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

var userPass = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"))
console.log(userPass);

//* can use return or rewrite the function after the alert

if (isNaN(userPass)) {
alert ("Must be a number") 
generatePassword()
}

if (userPass < 8) {
alert ("Must be at least 8 characters long")
generatePassword()
}

if (userPass > 128) {
alert ("Must be less than 128 characters")
generatePassword()    
}

//*New variables made to go through new prompts

var hasNum = confirm("Press ok if you want numbers in your password.")
    console.log(hasNum);

var hasUpper = confirm("Press ok if you want uppercase letters in your password.")
    console.log(hasUpper)

var hasLower = confirm("Press ok if you want lowercase letters in your password.")
    console.log(hasLower);

var hasSymbols = confirm("Press ok if you want to have symbols in your password.")
    console.log(hasSymbols);

//*Must select one of the criteria if selected false for all of the prompts
if (hasNum === false && hasUpper === false && hasLower === false && hasSymbols === false) {
    alert ("Must meet one of the criteria")
    return;
    } 

}
