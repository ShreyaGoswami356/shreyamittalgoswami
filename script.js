const birthDate = new Date("2007-11-17T00:00:00");

function updateAge() {
  const now = new Date();
  const diff = now - birthDate;
  const age = diff / (1000 * 60 * 60 * 24 * 365.2425);
  document.getElementById("age").textContent = age.toFixed(8);
}

updateAge();
setInterval(updateAge, 100);
