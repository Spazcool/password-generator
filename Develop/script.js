// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  let include = {
    specials : document.querySelector("#specials").checked,
    numbers : document.querySelector("#numbers").checked,
    uppers : document.querySelector("#uppers").checked,
    lowers : document.querySelector("#lowers").checked,
    all : document.querySelector("#all").checked
  }
 
  switch(include['specials']){
    case true:
      return "`-=+_)(*&^%${#@!~})`";
  }
  // if(include.specials){
  // }else if()
  

  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Specials
// (e.g. ()!@#$%^&*_+-={}[]|\:";',./<>?~`)
// Numbers
// (e.g. 0 - 9)
// Uppers
// (e.g. A - Z)
// Lowers
// (e.g. a - z)
// All
// (e.g. Specials, Numbers, Uppers & Lowers)

