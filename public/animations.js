function flashScreen() {
  var flashDiv = document.getElementById("flash");
  flashDiv.style.display = "block";

  setTimeout(function () {
    flashDiv.style.display = "none";
  }, 50);
}

function changeBackground() {
  let backgrounds = [
    "background-type-1-1",
    "background-type-1-2",
    "background-type-1-3",
    "background-type-1-4",
    "background-type-1-5",
    "background-type-2-1",
    "background-type-2-2",
    "background-type-2-3",
    "background-type-2-4",
    "background-type-2-5",
  ];

  while (bodyClassList.length > 0) {
    bodyClassList.remove(bodyClassList[0]);
  }

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  if (backgroundBool) {
    bodyClassList.add(backgrounds[randomIndex]);
  }
}

changeBackground();

function closeCircle() {
  html.classList.remove("open-circle");
  html.classList.add("close-circle");
}
function openCircle() {
  html.classList.remove("close-circle");
  html.classList.add("open-circle");
}

function startAnimation() {
  wooshSound.play();
  startElement.classList.add("start");
  startElement.addEventListener("animationend", () => {
    startElement.classList.add("invisible");
  });
}
