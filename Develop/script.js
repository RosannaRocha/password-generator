// Module 3, Challenge 3


var getLength = function() {
  //ask user how many characters to include in password
  var passwordLength = window.prompt("How long do you want your password to be? Choose a number between 8 and 128 characters.");
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    //confirm
    var confirmLength = window.confirm("Please confirm that you would like your password to be " + passwordLength + " characters.");
    if (confirmLength) {
      //continue to next question
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
      break;
    case 2:
      passwordCase = "all uppercase";
      break;
    case 3:
      passwordCase = "a combination of uppercase and lowercase";
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
      break;
    case 2:
      passwordNum = "do not";
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
      break;
    case 2:
      passwordChar = "do not";
      break;
    default:
      window.alert("Invalid entry. Please try again.");
      getCharacter();
      break;
  }

  //confirm special characters choice 
  var confirmNumbers = window.confirm("Please confirm that you " + passwordChar + " want special characters included in your password.");
  if(confirmNumbers) {
    window.prompt("This is far as I've gotten.");
  }
  else {
    getNumbers();
  }
}

getLength();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
