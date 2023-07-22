// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordChar = ""

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharacters = "0123456789"
var specialCharacters = "!@#$%^&*()/*-+=[]{};:<>?"

function generatePassword() {
  console.log("Clicked")
  //click generate password - prompt generate password criteria
  var userChoiceLength = window.prompt("How many characters do you want? Choose between 8-128");

  if (userChoiceLength < 8 || userChoiceLength > 128) {
    window.alert("Number must be > 8 characters & < 128 characters")
    return;
  }
  else if (userChoiceLength > 8 || userChoiceLength < 128) {
    window.alert("You got it!")
  }

  var userChoiceLowercase = window.confirm("Want some lowercase letters?")
  if (userChoiceLowercase) {
    passwordChar += lowercaseCharacters
    console.log("adding lowercase letters")
  }
  else if (!userChoiceLowercase) {
    window.alert("OK")
    console.log("no lowercase letters")
  }

  var userChoiceUppercase = window.confirm("Want any uppercase letters?")
  if (userChoiceUppercase) {
    passwordChar += uppercaseCharacters
    console.log("adding uppercase letters")
  }
  else if (!userChoiceUppercase) {
    window.alert("OK")
    console.log("no uppercase letters")
  }

  var userChoiceNumbers = window.confirm("Want any numbers?")
  if (userChoiceNumbers) {
    passwordChar += numberCharacters
    console.log("adding numbers")
  }
  else if (!numberCharacters) {
    window.alert("OK")
    console.log("no numbers")
  }

  var userChoiceSpecCharacters = window.confirm("Want some special characters?")
  if (userChoiceSpecCharacters) {
    passwordChar += specialCharacters
    console.log("adding special characters")
  }
  else if (!specialCharacters) {
    window.alert("OK")
    console.log("no special characters")
  }

  window.alert("Ready to see your password?")
}
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
