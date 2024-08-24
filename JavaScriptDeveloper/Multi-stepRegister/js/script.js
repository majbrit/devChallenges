var currentStep = 0;
showStep(currentStep);

function showStep(n) {
    var x = document.getElementsByClassName("step");
    x[n].style.display = "block";
    var c = document.getElementsByClassName("step-count");
    c[n].style.background = "#845EEE";


    fixStepIndicator(n)
  }