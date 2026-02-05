function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

function closeAll() {
  document.querySelectorAll(".popup").forEach(p => {
    p.classList.add("hidden");
  });
}

function openPopup(id) {
  document.getElementById(id).classList.remove("hidden");
}
