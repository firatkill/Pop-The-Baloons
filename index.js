document.querySelector(".container").addEventListener("mouseover", popit);

function popit(e) {
  if (e.target.classList.contains("bg-primary")) {
    e.target.classList.remove("bg-primary");
  }
  if (e.target.classList.contains("bg-warning")) {
    e.target.classList.remove("bg-warning");
  }
  if (e.target.classList.contains("bg-danger")) {
    e.target.classList.remove("bg-danger");
  }
  if (e.target.classList.contains("bg-secondary")) {
    e.target.classList.remove("bg-secondary");
  }
  if (e.target.classList.contains("bg-success")) {
    e.target.classList.remove("bg-success");
  }
  endGame();
}
function endGame() {
  let warn = document.getElementsByClassName("bg-warning");
  let prim = document.getElementsByClassName("bg-primary");
  let suc = document.getElementsByClassName("bg-success");
  let dang = document.getElementsByClassName("bg-danger");
  let sec = document.getElementsByClassName("bg-secondary");
  if (
    warn.length < 1 &&
    prim.length < 1 &&
    suc.length < 1 &&
    dang.length < 1 &&
    sec.length < 1
  ) {
    document.getElementById("container").classList.replace("show", "hide");
    document.getElementById("won").classList.replace("hide", "show");
  }
}
