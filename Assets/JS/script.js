// create object to store password criteria
var passwordCriteria = {
  // get password length option
  length: passLength = function() {
    // prompt for length
    var promptLength =  window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128.");
  
    if (Number.isInteger(parseInt(promptLength)) && parseInt(promptLength) >= 8 && parseInt(promptLength) <= 128) {
      passwordCriteria.length = parseInt(promptLength);
    } else {        
      window.alert("You did not pick a valid response. Please try again.")
      passLength();
    }
  },
  // get lower case letter option
  lowerCase: passLowerCase = function() {
    var promptLowerCase = window.prompt("Do you want to use lower case letters in the password? Enter 1 for YES or 2 for NO.");
  
    promptLowerCase = parseInt(promptLowerCase);
    switch (promptLowerCase) {
      case 1: passwordCriteria.lowerCase = "abcdefghijklmnopqrstuvwxyz";
      break;
  
      case 2: passwordCriteria.lowerCase = "";
      break;
  
      default: 
      tryAgain;
      passLowerCase();
      break;
    }
  },
  //get upper case option
  upperCase: passUpperCase = function() {
    var promptUpperCase = window.prompt("Do you want to use upper case letters in the password? Enter 1 for YES or 2 for NO.");
  
    promptUpperCase = parseInt(promptUpperCase);
    switch (promptUpperCase) {
      case 1: passwordCriteria.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
  
      case 2: passwordCriteria.upperCase = "";
      break;
  
      default: 
      tryAgain;
      passUpperCase();
      break;
    }
  },
  // get special characters option
  specialCharacters: passSpecial = function() {
    var promptSpecial = window.prompt("Do you want to use special characters in the password? Enter 1 for YES or 2 for NO.");
  
    promptSpecial = parseInt(promptSpecial);
    switch (promptSpecial) {
      case 1: passwordCriteria.specialCharacters = "!@#$%^&*()";
      break;
  
      case 2: passwordCriteria.specialCharacters = "";
      break;
  
      default: 
      tryAgain;
      passSpecial();
      break;
    }
  },
  // get numbers option
  numeric: passNumbers = function() {
    var promptNumeric = window.prompt("Do you want to use numbers in the password? Enter 1 for YES or 2 for NO.");
  
    promptNumeric = parseInt(promptNumeric);
    switch (promptNumeric) {
      case 1: passwordCriteria.numeric = "0123456789";
      break;
  
      case 2: passwordCriteria.numeric = "";
      break;
  
      default: 
      tryAgain;
      passNumbers();
      break;
    }
  }
};

// alert for invalid selection
var tryAgain = function() {
  window.alert("You did not pick a valid response. Please try again.");
};

// evaluate whether at least one character option was selected and build character set to use in password
var getPasswordProperties = function() {
  passLength();
  passLowerCase();
  passUpperCase();
  passSpecial();
  passNumbers();

  chars = (passwordCriteria.lowerCase + passwordCriteria.upperCase + 
                passwordCriteria.specialCharacters + passwordCriteria.numeric);

  if (chars === "") {
    window.alert("You didn't select any criteria.  Please try again.");
    getPasswordProperties();
  }

  return chars
};

// generate password
var generatePassword = function() {
  // retrieve password properties
  getPasswordProperties();
  
  // generate password
  var buildPass = "";

  for (i = 1; i <= passwordCriteria.length; i++) {
    var char = Math.floor(Math.random() * chars.length + 1);
    buildPass += chars.charAt(char);
  }
  return buildPass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
