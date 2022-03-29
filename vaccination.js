let vaccinatedRadioElement = document.getElementById("vaccinated");
let notVaccinatedRadioElement = document.getElementById("not-vaccinated");

let vaccinatedQuestionnaire = document.getElementById(
  "vaccinated-sub-question"
);

let notRegisteredForSecondRadioElement = document.getElementById(
  "vaccinated-not-registered"
);
let registerForSecondSubQuestion = document.getElementById(
  "second-shot-registration"
);

function displayVaccinatedSubQuestion() {
  if (vaccinatedRadioElement.checked) {
    vaccinatedQuestionnaire.style.display = "block";
  }
}

vaccinatedRadioElement.addEventListener("click", displayVaccinatedSubQuestion);

function displayNotRegisteredForSecondSubQuestion() {
  if (notRegisteredForSecondRadioElement.checked) {
    registerForSecondSubQuestion.style.display = "block";
  }
}

notRegisteredForSecondRadioElement.addEventListener(
  "click",
  displayNotRegisteredForSecondSubQuestion
);
