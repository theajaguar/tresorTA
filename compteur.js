const part1 = {
  amount: 350,
  date: new Date("2025-07-06T00:00:00Z")
};

const part2 = {
  amount: 50,
  date: new Date("2025-08-16T00:00:00Z")
};

const interestRate = 0.02;

function updateCounter() {
  const now = new Date();

  const years1 = (now - part1.date) / (1000 * 60 * 60 * 24 * 365.25);
  const years2 = (now - part2.date) / (1000 * 60 * 60 * 24 * 365.25);

  const amount1 = part1.amount * Math.pow(1 + interestRate, years1);
  const amount2 = part2.amount * Math.pow(1 + interestRate, years2);

  const total = amount1 + amount2;

  const counter = document.getElementById("counter");
  counter.textContent = total.toFixed(8) + " €";

  counter.classList.remove("animate");
  void counter.offsetWidth;
  counter.classList.add("animate");
}

setInterval(updateCounter, 1000);
updateCounter();
