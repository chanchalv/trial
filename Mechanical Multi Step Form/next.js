const form = document.getElementById("form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const next1 = document.getElementById("next1");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");
const prev3 = document.getElementById("prev3");
const submit = document.getElementById("submit");
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const field3 = document.getElementById("field3");

next1.addEventListener("click", e => {
  e.preventDefault();
  if (field1.value === "") return;
  step1.style.display = "none";
  step2.style.display = "block";
});

prev2.addEventListener("click", e => {
  e.preventDefault();
  step2.style.display = "none";
  step1.style.display = "block";
});

next2.addEventListener("click", e => {
  e.preventDefault();
  if (field2.value === "") return;
  step2.style.display = "none";
  step3.style.display = "block";
});

prev3.addEventListener("click", e => {
  e.preventDefault();
  step3.style.display = "none";
  step2.style.display = "block";
});

submit.addEventListener("click", e => {
  e.preventDefault();
  if (field3.value === "") return;
  form.submit();
});
