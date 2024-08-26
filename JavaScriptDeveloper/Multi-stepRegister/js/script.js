var currentStep = 1;// 0
showStep(currentStep);

var namefl, email;
var topics; 

function showStep(n) {
  var steps = document.getElementsByClassName("step");  
  steps[n].style.display = "flex";

  var counts = document.getElementsByClassName("step-count");
  counts[n].style.background = "#652CD1";
  
  var stepShadow = document.getElementsByClassName("step-shadow");
  stepShadow[n].style.background = "rgba(132, 94, 238, 0.3)";

  if(steps[n-1]){
    steps[n-1].style.display = "none";
    stepShadow[n-1].style.background = "transparent";
  }

  document.getElementById("count-num").innerHTML = n+1;
}

function continueStep() {
  if (!validateForm()) 
    return false;
  currentStep++;
  showStep(currentStep);
}

function validateForm() {
  
  if(currentStep == 0) {
    email = document.getElementById("email");
    namefl = document.getElementById("name");
    emailValidation = validateInput(email, /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/); 
    nameValidation = validateInput(namefl, /^[\u00C0-\u017Fa-zA-Z, ]+$/);
    if(emailValidation && nameValidation) {
      return true;
    } else {
      return false;
    }
  } else if (currentStep == 1) {
    return true;
  }
  
}

function confirmStep() {
  alert("\u2705 Success");
}

function validateInput(input, validRegex) {
  if (input.value.match(validRegex)) {
    input.style.boxShadow = "0px 0px 0px transparent";
    return true;
  } else {
    input.style.boxShadow = "0px 0px 6px #d12c60";
    return false;
  }
}
