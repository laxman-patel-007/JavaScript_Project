let counterValue = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
incrementBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});
decrementBtn.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});
resetBtn.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});
function updateCounter() {
  counterDisplay.textContent = counterValue;
}