// Assignment Code

// establish variables

var generateBtn = document.querySelector("#generate");

var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~']

var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z'
] ;  
var lowerCase = upperCase.map(upperCase => upperCase.toLocaleLowerCase());
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// establish password criteria
var passwordCriteria = {
  length : 8,
  lowerCase : true,
  upperCase : true,
  numeric : true,
  specialChar : true
}



// Write password to the #password input
function writePassword() {

  // accept user input to set password criteria
  function passwordLength() {
    var length = window.prompt("How long would you like your password? (8-128)");
    
    if (length >= 8 && length <= 128){
      passwordCriteria.length = length;
    } else {
      window.alert("please input a number between 8 and 128.");
      passwordLength();
      return;
    }
  }
  function passwordUpper() {
    var upper = window.confirm("Do you want your password to include uppercase?");
    passwordCriteria.upperCase = upper;
  }
  function passwordLower() {
    var lower = window.confirm("Do you want your password to include lowercase?");
    passwordCriteria.lowerCase = lower;
  }
  function passwordspecialchar() {
    var specialchar = window.confirm("Do you want your password to include special characters?");
    passwordCriteria.specialChar = specialchar;
  }
  function passwordnumeric() {
    var numeric = window.confirm("Do you want your password to include numbers?");
    passwordCriteria.numeric = numeric;
  }

  passwordLength();
  passwordUpper();
  passwordLower();
  passwordspecialchar();
  passwordnumeric();

  if (
    passwordCriteria.numeric === false &&
    passwordCriteria.specialChar === false &&
    passwordCriteria.lowerCase === false &&
    passwordCriteria.upperCase === false 
    ) {
      alert("To generate password must select one character type");
      return null;
    };
  


  function generatePassword() {
    
    var generatePass = [];
    var finalPass = [];

    // concat the arrays to match the criteria 
    if (passwordCriteria.upperCase){
    generatePass = generatePass.concat(upperCase);  
    }
  
    if (passwordCriteria.lowerCase){
    generatePass = generatePass.concat(lowerCase);
    }
  
    if (passwordCriteria.specialChar){
    generatePass = generatePass.concat(special);
    }
  
    if (passwordCriteria.numeric) {
    generatePass = generatePass.concat(numbers);
    }

    // adds random chars to array then turns it into a string
    for (var i = 0; i < passwordCriteria.length ; i++) {  
      finalPass.push(generatePass[Math.floor(Math.random() * generatePass.length)]); 
    }

      return finalPass.join("") ;
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
