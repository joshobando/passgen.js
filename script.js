// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var confirmAmount = prompt("How many characters would you like your password to contain?")
var confirmSpecialCharacters = confirm("Click OK to confrirm including special characters.")
var confirmNumericCharacters = confirm("Click OK to confrirm including numerical characters.")
var confirmLowerCharacters = confirm("Click OK to confrirm including lower case characters.")
var confirmUpperCharacters = confirm("Click OK to confrirm including upper case characters.")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
