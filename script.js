// Assignment Code
let generateBtn = document.querySelector("#generate");
let slider = document.querySelector("#numberCharacters");
let tooltip = document.querySelector("#displayNumberCharacters");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  // IF USER DOESN'T MAKE A SELECTION ASSIGN NOTHING 
  password == undefined ? passwordText.value = '' : passwordText.value = password;
}

function generatePassword(){
  let charset = [];
  let pass = [];
  // let numberOfChars = document.querySelector("#numberCharacters").value;
  let numberOfChars = slider.value;
  let include = {
    specials : {
      value : document.querySelector("#specials").checked,
      min : 33, 
      max : 48
    },
    numbers : {
      value : document.querySelector("#numbers").checked,
      min : 48,
      max : 58
    },
    uppers : {
      value : document.querySelector("#uppers").checked,
      min : 65,
      max : 91
    },
    lowers : {
      value : document.querySelector("#lowers").checked,
      min : 97,
      max : 123
    },
    all : {
      value : document.querySelector("#all").checked,
      min : 33,
      max : 126
    }
  }

  if(checkDirtyFields(include)){
    while(pass.length < numberOfChars){
      for(charType in include){
        if(include[charType]["value"] === true && pass.length < numberOfChars){    
          pass.push(String.fromCharCode(randoChar(include[charType]["min"], include[charType]["max"])));    
        }
      }
    }
  
    return pass.join('');

  }else{
    // TODO SOMETHING SEXIER THAN AN ALERT
    alert('need to make a selection');  
  }
}

function randoChar(min, max) {
  return Math.random() * (max - min) + min;
}

// CHECK USER HAS MADE A SELECTION
function checkDirtyFields(obj){
  for(charType in obj){
    if(obj[charType]["value"] === true){
      return true;
    }
  }
  return false;
}

// TOOLTIP SLIDER UPDATER THINGY
function updateTooltip(){
  tooltip.children[0].innerHTML = `${slider.value}`;
}


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


// LISTENERS
generateBtn.addEventListener("click", writePassword);
slider.addEventListener("click", updateTooltip);