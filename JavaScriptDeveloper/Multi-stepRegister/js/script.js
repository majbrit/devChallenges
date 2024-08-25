var currentStep = 0;
showStep(currentStep);

var name, email;
var topics; 

function showStep(n) {
  var steps = document.getElementsByClassName("step");
  if(steps[n-1]){
    steps[n-1].style.display = "none";
  }
  steps[n].style.display = "flex";

  var counts = document.getElementsByClassName("step-count");
  counts[n].style.background = "#652CD1";
  counts[n].style.border = "5px solid #652CD1";

  document.getElementById("count-num").innerHTML = n+1;
}

function continueStep() {
  if (!validateForm()) 
    return false;
  currentStep++;
  showStep(currentStep);
}

function validateForm() {
  return true;
}