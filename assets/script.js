// Module 3, Challenge 3

var ultimatePassword = {
  length: 0,
  capitalization: 0,
  numbers: 0,
  characters: 0,
}
var password = "";

var getLength = function() {
  //ask user how many characters to include in password
  var passwordLength = window.prompt("How long do you want your password to be? Choose a number between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    //confirm
    var confirmLength = window.confirm("Please confirm that you would like your password to be " + passwordLength + " characters.");
    if (confirmLength) {
      ultimatePassword.length = passwordLength;
      getCapitalization();
    }
    else {
      getLength();
    }
  }
  else {
    window.alert("Invalid entry. Please try again.");
    getLength();
  }
}

var getCapitalization = function() {
  var capitalPrompt = window.prompt("Do you want your password to include lowercase characters, uppercase characters, or both? Choose 1 for only lowercase, 2 for only uppercase, or 3 for a combination of both.");
  capitalPrompt = parseInt(capitalPrompt);
  var passwordCase;

  switch(capitalPrompt) {
    case 1:
      passwordCase = "all lowercase";
      ultimatePassword.capitalization = 1;
      break;
    case 2:
      passwordCase = "all uppercase";
      ultimatePassword.capitalization = 2;
      break;
    case 3:
      passwordCase = "a combination of uppercase and lowercase";
      ultimatePassword.capitalization = 3;
      break;
    default:
      window.alert("Invalid entry. Please try again.");
      getCapitalization();
      break;
    }

    //confirm capitalization choice 
    var confirmCapital = window.confirm("Please confirm that you would like your password to include " + passwordCase + " characters.");
    if(confirmCapital) {
      getNumbers();
    }
    else {
      getCapitalization();
    }


}

var getNumbers = function() {
  var numberPrompt = window.prompt("Do you want your password to include numbers? Choose 1 for yes, 2 for no.");
  numberPrompt = parseInt(numberPrompt);
  var passwordNum;

  switch(numberPrompt) {
    case 1:
      passwordNum = "do";
      ultimatePassword.numbers = 1;
      break;
    case 2:
      passwordNum = "do not";
      ultimatePassword.numbers = 2;
      break;
    default:
      window.alert("Invalid entry. Please try again.");
      getNumbers();
      break;
  }

  //confirm numbers choice 
  var confirmNumbers = window.confirm("Please confirm that you " + passwordNum + " want numbers included in your password.");
  if(confirmNumbers) {
    getCharacter();
  }
  else {
    getNumbers();
  }
}

var getCharacter = function() {
  var charPrompt = window.prompt("Do you want your password to include special characters? Choose 1 for yes, 2 for no.");
  charPrompt = parseInt(charPrompt);
  var passwordChar;

  switch(charPrompt) {
    case 1:
      passwordChar = "do";
      ultimatePassword.characters = 1;
      break;
    case 2:
      passwordChar = "do not";
      ultimatePassword.characters = 2;
      break;
    default:
      window.alert("Invalid entry. Please try again.");
      getCharacter();
      break;
  }

  //confirm special characters choice 
  var confirmNumbers = window.confirm("Please confirm that you " + passwordChar + " want special characters included in your password.");
  if(confirmNumbers) {
    ultimateGenerate();
  }
  else {
    getNumbers();
  }
}

var ultimateGenerate = function() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!#$%&()*+?@^_~";

  var passwordCriteria = "";

  //assign capitalization string to password criteria
  if (ultimatePassword.capitalization === 1) {
    passwordCriteria = passwordCriteria + lowercaseChars;
  }
  else if (ultimatePassword.capitalization === 2) {
    passwordCriteria = passwordCriteria + uppercaseChars;
  }
  else if (ultimatePassword.capitalization === 3) {
    passwordCriteria = passwordCriteria + lowercaseChars + uppercaseChars;
  }
  else {
    window.confirm("An error has occurred. Goodbye.");
  }

  //assign numbers string to password criteria
  if (ultimatePassword.numbers === 1) {
    passwordCriteria = passwordCriteria + numberChars;
  }
  else if (ultimatePassword.numbers === 2) {
    //no change to password criteria
  }
  else {
    window.confirm("An error has occurred. Goodbye.");
  }

  //assign characters string to password criteria
  if (ultimatePassword.characters === 1) {
    passwordCriteria = passwordCriteria + specialChars;
  }
  else if (ultimatePassword.characters === 2) {
    //no change to password criteria
  }
  else {
    window.confirm("An error has occurred. Goodbye.");
  }

  for (var i = 0; i <= ultimatePassword.length; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCriteria.length);
    password += passwordCriteria.substring(randomNumber, randomNumber +1);
  }
  document.getElementById("password").value = password;

  console.log(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getLength();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
