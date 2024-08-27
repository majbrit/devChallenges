var currentStep = 0;// 0
showStep(currentStep);

var namefl, email;
var development, experience, design;
var topics = []; 



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

  if(currentStep==2)
    fillSummary();
}

function continueStep() {
  if (!validateForm()) 
    return false;
  currentStep++;
  showStep(currentStep);
  
}

function validateForm() {
  
  if(currentStep == 0) {
    var emailDoc = document.getElementById("email");
    email = emailDoc.value;
    var nameflDoc = document.getElementById("name");
    namefl = nameflDoc.value;
    var emailValidation = validateInput(emailDoc, /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/); 
    var nameValidation = validateInput(nameflDoc, /^[\u00C0-\u017Fa-zA-Z, ]+$/);
    if(emailValidation && nameValidation) {
      return true;
    } else {
      return false;
    }
  } else if (currentStep == 1) {
    return validateCheckbox("topic");  
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

function validateCheckbox(boxClass) {
  var topicsDoc = document.getElementsByClassName(boxClass);
  for (var i = 0; i < topicsDoc.length; i++) {  
    var topicChecked = topicsDoc[i].firstElementChild.firstElementChild.checked
    if(topicChecked) {
      var topicValue = topicsDoc[i].firstElementChild.firstElementChild.value;
      topics.push(topicValue);
    }
  }
  if (topics.length > 0) {
    return true;
  } else {
    document.getElementById("choose-text").style.display = "inline";
    return false;
  }  
}

function fillSummary() {
  document.getElementById("summaryName").innerHTML = namefl;
  document.getElementById("summaryEmail").innerHTML = email;
  fillList(document.getElementById("summaryTopics"));
}

function fillList(ulList){
  for (var i = 0; i < topics.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(topics[i]));
    ulList.appendChild(item);
  }
}