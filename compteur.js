// ================================
// VERSEMENTS
// ================================
const contributions = [
  { amount: 350, date: new Date("2025-07-06T00:00:00Z") },
  { amount: 50,  date: new Date("2025-08-16T00:00:00Z") },
  { amount: 50,  date: new Date("2025-09-02T00:00:00Z") },
  { amount: 50,  date: new Date("2025-09-26T00:00:00Z") },
  { amount: 200, date: new Date("2025-12-12T00:00:00Z") }
];

// ================================
// TAUX ANNUEL
// ================================
const interestRate = 0.02; // 2 %

// ================================
// FONCTION PRINCIPALE
// ================================
function updateCounter() {
  const now = new Date();
  let total = 0;

  contributions.forEach(part => {
    const years =
      (now - part.date) / (1000 * 60 * 60 * 24 * 365.25);

    const amountWithInterest =
      part.amount * Math.pow(1 + interestRate, years);

    total += amountWithInterest;
  });

  const counter = document.getElementById("counter");
  counter.textContent = total.toFixed(7) + " €";

  // Animation CSS
  counter.classList.remove("animate");
  void counter.offsetWidth;
  counter.classList.add("animate");
}

// ================================
// RAFRAÎCHISSEMENT
// ================================
setInterval(updateCounter, 1000);
updateCounter();
