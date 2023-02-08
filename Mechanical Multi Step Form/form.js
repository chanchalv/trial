let currentStep = 1;

function validateStep1() {
  if (!document.getElementById("field1").value || !document.getElementById("field2").value) {
    return;
  }
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
  currentStep = 2;
}

function validateStep2() {
  if (!document.getElementById("field3").value || !document.getElementById("field4").value) {
    return;
  }
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
  document.getElementById("submitBtn").disabled = false;
  currentStep = 3;
}

document.getElementById("step1").style.display = "block";
