const audio = document.getElementById("audio");
const disc = document.getElementById("disc");
const playBtn = document.getElementById("playBtn");

/* MARK MUSIC AS OPENED (for Surprise lock later) */
localStorage.setItem("openedMusic", "true");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    disc.classList.add("spin");
    playBtn.textContent = "Pause";
  } else {
    audio.pause();
    disc.classList.remove("spin");
    playBtn.textContent = "Play";
  }
});

audio.addEventListener("ended", () => {
  disc.classList.remove("spin");
  playBtn.textContent = "Play";
});
function goBack() {
  window.location.href = "menu.html"; // change if your menu has another name
}

