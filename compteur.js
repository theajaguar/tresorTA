const startDate = new Date("2025-07-06T00:00:00Z");
const startAmount = 300;
const interestRate = 0.02;

function updateCounter() {
  const now = new Date();
  const elapsedMs = now - startDate;
  const elapsedYears = elapsedMs / (1000 * 60 * 60 * 24 * 365.25);
  const newAmount = startAmount * Math.pow(1 + interestRate, elapsedYears);
  const counter = document.getElementById("counter");
  counter.textContent = newAmount.toFixed(8) + " €";
  counter.classList.remove("animate");
  void counter.offsetWidth; // trigger reflow
  counter.classList.add("animate");
}

setInterval(updateCounter, 1000);
updateCounter();
