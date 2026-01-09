function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input.toLowerCase() === "pasta") {
  document.body.classList.add("fade-out");

setTimeout(() => {
  window.location.href = "loading.html";
}, 700);

  } else {
    error.textContent = "Try again 🤍";
  }
}
function goToMenu() {
  window.location.href = "menu.html";
}
document.getElementById("playBtn").addEventListener("click", () => {
  window.location.href = "menu.html";
});

const backBtn = document.getElementById('backMenuBtn');

backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.replace('menu.html');
});
backBtn.addEventListener('click', () => {
  alert('CLICK OK');
});

