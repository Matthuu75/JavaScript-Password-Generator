


function generatePassword() {
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"]
  var passwordChar = [];

  var userChoiceLength = getPasswordLength();


  function getPasswordLength() {
    console.log("Clicked")
  //click generate password - prompt generate password criteria
  var userChoiceLength = 0
  while (userChoiceLength < 8 || userChoiceLength > 128) {
    userChoiceLength = parseInt(window.prompt("How many characters do you want? Choose between 8-128"));
    if (isNaN(userChoiceLength)) {
    userChoiceLength = 0
  }
  }
  return userChoiceLength;
}

  var userChoiceLowercase = window.confirm("Want some lowercase letters?");
  if (userChoiceLowercase) {
    passwordChar = passwordChar.concat(lowercaseCharacters);
    console.log("adding lowercase letters");
  } else if (!userChoiceLowercase) {
    console.log("no lowercase letters");
  }

  var userChoiceUppercase = window.confirm("Want some uppercase letters?");
  if (userChoiceUppercase) {
    passwordChar = passwordChar.concat(uppercaseCharacters);
    console.log("adding lowercase letters");
  } else if (!userChoiceUppercase) {
    console.log("no uppercase letters");
  }

  var userChoiceNumbers = window.confirm("Want some numbers?");
  if (userChoiceNumbers) {
    passwordChar = passwordChar.concat(numberCharacters);
    console.log("adding lowercase letters");
  } else if (!userChoiceNumbers) {
    console.log("no numbers");
  }

  var userChoiceSpecials = window.confirm("Want some special characters");
  if (userChoiceSpecials) {
    passwordChar = passwordChar.concat(specialCharacters);
    console.log("adding special characters");
  } else if (!userChoiceSpecials) {
    console.log("no special characters");
  }

  var passwordGenerate = "";
  for (var i = 0; i < userChoiceLength; i++) {
    passwordGenerate += passwordChar[Math.floor(Math.random() * (passwordChar.length))];
  }

  

  return passwordGenerate;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)