//todo make arrays for each type of password option
//Upper case, lowercase, numbers, special chars
var upperCaseChoices = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"]
var lowerCaseChoices = ["a, b, c, d, e, f, g, h, i , j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]
var specialCharacterChoices = ["!,#,$,%,&,',(,)\,,*,+,-,.,/,:,;,<,=,>,?,@,[,\],^,_,`,~"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
//generate button starts process
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  confirmCritera();
  //stores the return value of generatePassword function in the password variable
  var password = generatePassword();

  //store the password textarea in index html so that we can display the password here by manipulating it
  var passwordText = document.querySelector("#password");
  


//here we are actually cvhanging the text on this textarea to whatever the password is
  passwordText.value = password;

}
function generatePassword() {}
  //todo write code that generates a password based on the confirms and prompt
  //to do get random or scrambled elements from each critera (array) that we selected from
  // how many characters? that is based on the confirm amount prompt.
  //todo valdiate if confirmspecialcharacters is true or false think conditionals if else statements
  if (confirmSpecialCharacters) {
    return specialCharacterChoices
  }
  if (confirmNumericCharacters) {
    return confirmNumericCharacters
}
  if (confirmLowerCharacters) {
    return confirmLowerCharacters
}
  if ()
//out my confirms into a function
function confirmCritera() {
  //Todo i need to validate these user inputs and i can use conditionals think if else statements
  var confirmAmount = prompt("How many characters would you like your password to contain?")
  var confirmSpecialCharacters = confirm("Click OK to confrirm including special characters.")
  console.log(confirmSpecialCharacters);
  var confirmNumericCharacters = confirm("Click OK to confrirm including numerical characters.")
  console.log(confirmNumericCharacters)
  var confirmLowerCharacters = confirm("Click OK to confrirm including lower case characters.")
  console.log(confirmLowerCharacters)
  var confirmUpperCharacters = confirm("Click OK to confrirm including upper case characters.")
  console.log(confirmUpperCharacters)
}
