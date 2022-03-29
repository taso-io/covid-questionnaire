// Displaying sub-questions for main question on covid.html page

let hadCovidRadioElement = document.getElementById("had-covid");
let covidVirginRadioElement = document.getElementById("no-covid");
let hasCovidNowRadioElement = document.getElementById("covid-now");
let testedForAntigenRadioElement = document.getElementById("antigen-tested");
let notTestedForAntigenRadioElement =
  document.getElementById("antigen-not-tested");

let covidSubQuestion = document.getElementById("antigen-test");
let antigenTestedSubQuestion = document.getElementById("antigen-results");
let antigenNotTestedSubQuestion = document.getElementById("covid-start-date");

// Display sub question for Antigen test
function displayHadCovidSubQuestion() {
  if (hadCovidRadioElement.checked) {
    covidSubQuestion.style.display = "block";
  }
}

function removeHadCovidSubQuestion() {
  if (covidVirginRadioElement.checked || hasCovidNowRadioElement.checked) {
    covidSubQuestion.style.display = "none";
    antigenTestedSubQuestion.style.display = "none";
    antigenNotTestedSubQuestion.style.display = "none";
  }
}

hadCovidRadioElement.addEventListener("click", displayHadCovidSubQuestion);
covidVirginRadioElement.addEventListener("click", removeHadCovidSubQuestion);
hasCovidNowRadioElement.addEventListener("click", removeHadCovidSubQuestion);

// Display sub question for antigen test details
function displayTestedForAntigenSubQuestion() {
  if (testedForAntigenRadioElement.checked) {
    antigenTestedSubQuestion.style.display = "block";
    antigenNotTestedSubQuestion.style.display = "none";
  }
}

testedForAntigenRadioElement.addEventListener(
  "click",
  displayTestedForAntigenSubQuestion
);

// Display sub question for covid period
function displayNotTestedForAntigenSubQuestion() {
  if (notTestedForAntigenRadioElement.checked) {
    antigenNotTestedSubQuestion.style.display = "block";
    antigenTestedSubQuestion.style.display = "none";
  }
}

notTestedForAntigenRadioElement.addEventListener(
  "click",
  displayNotTestedForAntigenSubQuestion
);
