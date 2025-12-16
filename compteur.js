const part1 = {
  amount: 350,
  date: new Date("2025-07-06T00:00:00Z")
};

const part2 = {
  amount: 50,
  date: new Date("2025-08-16T00:00:00Z")
};

const part3 = {
  amount: 50,
  date: new Date("2025-09-02T00:00:00Z")
};

const part4 = {
  amount: 50,
  date: new Date("2025-09-26T00:00:00Z")
};

const part5 = {
  amount: 200,
  date: new Date("2025-12-16T00:00:00Z")
};

const interestRate = 0.02;

function updateCounter() {
  const now = new Date();

  const years1 = (now - part1.date) / (1000 * 60 * 60 * 24 * 365.25);
  const years2 = (now - part2.date) / (1000 * 60 * 60 * 24 * 365.25);
  const years3 = (now - part3.date) / (1000 * 60 * 60 * 24 * 365.25);
  const years4 = (now - part4.date) / (1000 * 60 * 60 * 24 * 365.25);
  const years5 = (now - part5.date) / (1000 * 60 * 60 * 24 * 365.25);
  
  const amount1 = part1.amount * Math.pow(1 + interestRate, years1);
  const amount2 = part2.amount * Math.pow(1 + interestRate, years2);
  const amount3 = part3.amount * Math.pow(1 + interestRate, years3);
  const amount4 = part4.amount * Math.pow(1 + interestRate, years4);
  const amount5 = part5.amount * Math.pow(1 + interestRate, years5);

  const total = amount1 + amount2 + amount3 + amount4 + amount5;

  const counter = document.getElementById("counter");
  counter.textContent = total.toFixed(7) + " €";

  counter.classList.remove("animate");
  void counter.offsetWidth;
  counter.classList.add("animate");
}

setInterval(updateCounter, 1000);
updateCounter();
