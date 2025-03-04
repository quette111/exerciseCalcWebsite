let results = document.getElementById("results");
let levelSelect = document.getElementById("level-select");
let exercise = document.getElementById("level-select2");
let metric = document.getElementById("buttonPadding");
let weightInteger = document.getElementById("weightInteger");
let percentageIncrease;
function calculatePo() {
  if (levelSelect.value == "") {
    alert("Please complete form");
    return;
  } else if (levelSelect.value == "Beginner") {
    percentageIncrease = 0.075;
  } else if (levelSelect.value == "Intermediate") {
    percentageIncrease = 0.0375;
  } else if (percentageIncrease == "Advanced") {
    percentageIncrease = 0.15;
  }
  console.log(weightInteger.value);

  let outputInteger =
    parseInt(weightInteger.value) + weightInteger.value * percentageIncrease;

  results.style.cssText = "animation-duration: 1s;animation-name: slide-in;";
  results.innerHTML = `<h1>For your next workout we recommend lifting ${outputInteger}${metric.value}s for ${exercise.value} <h1>`;
  console.log(results);
}

let calcWrapper = document.getElementsByClassName("calcWrapper");
let calculatorOption = document.getElementById("calculatorOption");

function showOneRepMax() {
  alert("kscjb");
}
