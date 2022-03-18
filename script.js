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
    all = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

var userPass = ""
console.log(userPass);

var userPassLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"))
console.log(userPassLength);

//* can use return or rewrite the function after the alert

if (isNaN(userPassLength)) {
alert ("Must be a number") 
return
}

if (userPassLength < 8) {
alert ("Must be at least 8 characters long")
return
}

if (userPassLength > 128) {
alert ("Must be less than 128 characters")
return
}

//*New variables made to go through new prompts

var hasNum = confirm("Press ok if you want numbers in your password.")
    if (hasNum) {
        all = all.concat(numbers)
    }
    console.log(hasNum);
    


var hasUpper = confirm("Press ok if you want uppercase letters in your password.")
    if (hasUpper) {
    all = all.concat(lettersUpper)
    }
    console.log(hasUpper)
  

var hasLower = confirm("Press ok if you want lowercase letters in your password.")
    if (hasLower) {
    all = all.concat(lettersLower)
    }
    console.log(hasLower);

var hasSymbols = confirm("Press ok if you want to have symbols in your password.")
    if (hasSymbols) {
    all = all.concat(symbols)
    }
    console.log(hasSymbols);
    console.log(all);
//*Must select one of the criteria if selected false for all of the prompts
if (hasNum === false && hasUpper === false && hasLower === false && hasSymbols === false) {
    alert ("Must meet one of the criteria")
    generatePassword()
    } else {
        for (let i = 0; i < userPassLength; i++) {
            userPass=userPass.concat(all[Math.floor((Math.random()*all.length))])
    } 
    return userPass
    }
}
