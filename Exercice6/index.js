const display = document.getElementById("display");

function appendToDisplay(arg) {
  display.value += arg;
}
function clearDisplay() {
  display.value = "";
}
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}
