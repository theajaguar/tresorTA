const contributions = [
  { amount: 350, date: new Date("2025-07-06T00:00:00Z") },
  { amount: 50,  date: new Date("2025-08-16T00:00:00Z") },
  { amount: 50,  date: new Date("2025-09-02T00:00:00Z") },
  { amount: 50,  date: new Date("2025-09-26T00:00:00Z") },
  { amount: 200, date: new Date("2025-12-12T00:00:00Z") },
  { amount: 280, date: new Date("2025-12-21T00:00:00Z") },
  { amount: 50,  date: new Date("2026-01-06T00:00:00Z") }
];

const interestRate = 0.02;

function updateCompteur() {
  const now = new Date();
  let total = 0;

  contributions.forEach(part => {
    const years = (now - part.date) / (1000 * 60 * 60 * 24 * 365.25);
    total += part.amount * Math.pow(1 + interestRate, years);
  });

  const compteur = document.getElementById("compteur");
  compteur.textContent = total.toFixed(7) + " €";

  // Si tu as une animation CSS "animate"
  compteur.classList.remove("animate");
  void compteur.offsetWidth;
  compteur.classList.add("animate");
}

setInterval(updateCompteur, 1000);
updateCompteur();
