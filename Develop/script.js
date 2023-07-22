
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Clicked")
  //click generate password - prompt generate password criteria
  var userChoice = window.prompt("How many characters do you want? (8-128 characaters)");
  if (userChoice < 8) {
    window.alert("Number must be > 8 characters")
  }
  else if (userChoice > 128) {
    window.alert("Number must be < 128 characters")
  }
  if (userChoice === )


  //click generate password - password length (8-128 char.)
  //lower, upper numeric and/or spec characters
  //validate the input
  if (!userChoice) {
    return;
  }
  //password will be generated/returned below
  return "Generate password here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
