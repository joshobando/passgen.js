// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var confirmAmount = prompt("How many characters would you like?")
var confirmCharacterType = 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
