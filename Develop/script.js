// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  let charset = [];
  let pass = [];
  let include = {
    numberOfChars : document.querySelector("#numberCharacters").value,
    specials : document.querySelector("#specials").checked,
    numbers : document.querySelector("#numbers").checked,
    uppers : document.querySelector("#uppers").checked,
    lowers : document.querySelector("#lowers").checked,
    all : document.querySelector("#all").checked
  }

  if(include.specials){
    for(let i = 33; i < 48; i++){
      charset.push(String.fromCharCode(i));
    }
  }
  if(include.numbers){
    for(let i = 48; i < 58; i++){
      charset.push(String.fromCharCode(i));
    }
  }
  if(include.uppers){
    for(let i = 65; i < 91; i++){
      charset.push(String.fromCharCode(i));
    }
  }
  if(include.lowers){
    for(let i = 97; i < 123; i++){
      charset.push(String.fromCharCode(i));
    }
  }
  if(include.all){
    for(let i = 33; i < 123; i++){
      charset.push(String.fromCharCode(i));
    }
  }

  for(let i = 0; i < include.numberOfChars; i++){
    pass.push(charset[Math.floor(Math.random() * include.numberOfChars)]);
  }
  
  return pass.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// todo
// try filter for funsies
// cleanup the front, the checkboxes sttacked looks weird
// make the front sexy
// tooltip for slider