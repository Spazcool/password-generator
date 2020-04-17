let copyBtn = document.querySelector("#copy");
let generateBtn = document.querySelector("#generate");
let passwordTxt = document.querySelector('#password');
let slider = document.querySelector("#numberCharacters");
let toastBdy = document.querySelector(".toast-body");
let tooltip = document.querySelector("#displayNumberCharacters");
let toggle = document.querySelector("#all");
let specials = document.querySelector("#specials");
let numbers = document.querySelector("#numbers");
let uppers = document.querySelector("#uppers");
let lowers = document.querySelector("#lowers");

// CHECK USER HAS MADE A SELECTION
function checkDirtyFields(obj){
  for(charType in obj){
    if(obj[charType]["value"] === true){
      return true;
    }
  }
  return false;
}

function copyToClipboard() {
  navigator.clipboard.writeText(passwordTxt.value)
  .then(() => {
    toastBdy.textContent = "Password Copied!";
  })
  .catch(() => {
    toastBdy.textContent = "Something went wrong.";
  })
  .then(() =>{
    $('.toast').toast("show");
  });
}

function generatePassword(){
  let charset = [];
  let pass = [];
  let numberOfChars = slider.value;
  let include = {
    specials : {
      value : specials.checked,
      min : 33, 
      max : 48
    },
    numbers : {
      value : numbers.checked,
      min : 48,
      max : 58
    },
    uppers : {
      value : uppers.checked,
      min : 65,
      max : 91
    },
    lowers : {
      value : lowers.checked,
      min : 97,
      max : 123
    },
    all : {
      value : all.checked,
      min : 33,
      max : 126
    }
  }

  if(checkDirtyFields(include)){
    while(pass.length < numberOfChars){
      // DONT BOTHER WITH THE FOR...IN LOOP BELOW IF all IS CHECKED AS TRUE
      if(include.all.value){
        pass.push(String.fromCharCode(randoChar(include.all["min"], include.all["max"])));    
      }else{
        for(charType in include){
          if(include[charType]["value"] === true && pass.length < numberOfChars){    
            pass.push(String.fromCharCode(randoChar(include[charType]["min"], include[charType]["max"])));    
          }
        }
      }
    }
  
    return pass.join('');

  }else{
    toastBdy.textContent = "You need to make a selection!";
    $('.toast').toast("show");
  }
}

function randoChar(min, max) {
  return Math.random() * (max - min) + min;
}

// CHECK ALL CHECKBOXES IF all IS CHECKED AS TRUE
function checkAll(){
  let onOff;
  toggle.checked ? onOff = true : onOff = false;
  specials.checked = onOff;
  numbers.checked = onOff;
  uppers.checked = onOff;
  lowers.checked = onOff;
}

// TOOLTIP SLIDER UPDATER THINGY
function updateTooltip(){
  tooltip.children[0].innerHTML = slider.value;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  // IF USER DOESN'T MAKE A SELECTION ASSIGN NOTHING 
  password == undefined ? passwordText.value = '' : passwordText.value = password;
}

// LISTENERS
copyBtn.addEventListener("click", copyToClipboard);
generateBtn.addEventListener("click", writePassword);
slider.addEventListener("change", updateTooltip);
toggle.addEventListener("change", checkAll);