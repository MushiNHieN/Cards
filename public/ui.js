// #region Options menu
function openMainMenu() {
  closeCircle();
  setTimeout(() => {
    openCircle();
    resetGame();
    menuMusic.currentTime = 0;
    menuMusic.play();
    gameplayMusic.currentTime = 0;
    body.classList.remove("gradient-bg");
    glass.classList.add("disabled", "invisible");
    scoreContainer.classList.add("disabled", "invisible");
    menuContainer.classList.remove("invisible", "disabled");
    changeBackground();
  }, 1000);
}

mainMenuButton.addEventListener("click", () => {
  openMainMenu();
});

function openOptions() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  optionsMusic.play();
  menuContainer.classList.add("invisible", "disabled");
  optionsElement.classList.remove("invisible", "disabled");
}

function closeOptions() {
  menuMusic.play();
  optionsMusic.pause();
  optionsMusic.currentTime = 0;
  menuContainer.classList.remove("invisible", "disabled");
  optionsElement.classList.add("invisible", "disabled");
}

function openOptionsCards() {
  optionsElement.classList.add("invisible", "disabled");
  optionsCardsMenu.classList.remove("invisible", "disabled");
  drawDecks();
}
function closeOptionsCards() {
  optionsCardsMenu.classList.add("invisible", "disabled");
  optionsElement.classList.remove("invisible", "disabled");
  chooseCardContainer.childNodes.forEach((child) => {
    child.remove();
  });
  chooseCardContainer.childNodes.forEach((child) => {
    child.remove();
  });
  chooseCardContainer.childNodes.forEach((child) => {
    child.remove();
  });
}

optionsBackCards.addEventListener("click", () => {
  closeOptionsCards();
});

resetButton.addEventListener("click", playAgain);
playAgainButton.addEventListener("click", playAgain);
menuStartGameElement.addEventListener("click", initializeGame);
optionsCards.addEventListener("click", openOptionsCards);

function drawDecks() {
  availableDecks.forEach((folder) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    // cardElement.dataset.name = card.name;

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.style.backgroundImage = `url('img/${folder}/${
      cards[Math.floor(Math.random() * 50)].img
    }')`;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.style.backgroundImage = `url('img/${folder}/reverse.png')`;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardElement.appendChild(cardInner);
    chooseCardContainer.appendChild(cardElement);

    cardElement.addEventListener("click", () => {
      const selectedElements = document.querySelectorAll(".selected-deck");
      selectedElements.forEach((element) => {
        element.classList.remove("selected-deck");
      });
      cardElement.classList.add("selected-deck");
      cardsFolder = folder;
    });

    cardElement.addEventListener("mouseover", () => {
      cardElement.classList.add("flipped");
      flipSound.play();
    });
    cardElement.addEventListener("mouseout", () => {
      cardElement.classList.remove("flipped");
      cardFront.style.backgroundImage = `url('img/${folder}/${
        cards[Math.floor(Math.random() * 50)].img
      }')`;
      flipSound.play();
    });
  });
}

function openHighScores() {
  menuMusic.pause();
  menuMusic.currentTime = 0;
  highScoreMusic.play();
  menuContainer.classList.add("invisible", "disabled");
  highScoreContainer.classList.remove("invisible", "disabled");
}
menuHighScore.addEventListener("click", openHighScores);
menuHighScore.addEventListener("mouseover", () => {
  mouseOverSound.play();
});
function closeHighScores() {
  highScoreMusic.pause();
  highScoreMusic.currentTime = 0;
  menuMusic.play();
  menuContainer.classList.remove("invisible", "disabled");
  highScoreContainer.classList.add("invisible", "disabled");
}
highScoreBack.addEventListener("click", closeHighScores);
highScoreBack.addEventListener("mouseover", () => {
  mouseOverSound.play();
});

function openDifficulty() {
  optionsElement.classList.add("invisible", "disabled");
  difficultyContainer.classList.remove("invisible", "disabled");
}
optionsDifficulty.addEventListener("click", openDifficulty);
optionsDifficulty.addEventListener("mouseover", () => {
  mouseOverSound.play();
});
function closeDifficulty() {
  optionsElement.classList.remove("invisible", "disabled");
  difficultyContainer.classList.add("invisible", "disabled");
}
optionsBackDifficulty.addEventListener("click", closeDifficulty);

resetButton.addEventListener("mouseover", () => {
  resetButton.classList.add("fade-out");
  const mouseOverSoundClone = mouseOverSound.cloneNode();
  mouseOverSoundClone.play();
  setTimeout(() => {
    gameOver
      ? (resetButton.textContent = "PLAY AGAIN!")
      : (resetButton.textContent = "RESET!");

    resetButton.classList.remove("fade-out");
  }, 75);
});

resetButton.addEventListener("mouseout", () => {
  resetButton.classList.add("fade-out");
  setTimeout(() => {
    gameOver
      ? (resetButton.textContent = "PLAY AGAIN?")
      : (resetButton.textContent = "RESET?");
    resetButton.classList.remove("fade-out");
  }, 75);
});
playAgainButton.addEventListener("mouseover", () => {
  playAgainButton.classList.add("fade-out");
  const mouseOverSoundClone = mouseOverSound.cloneNode();
  mouseOverSoundClone.play();
  setTimeout(() => {
    gameOver ? (playAgainButton.textContent = "PLAY AGAIN!") : null;

    playAgainButton.classList.remove("fade-out");
  }, 75);
});

playAgainButton.addEventListener("mouseout", () => {
  playAgainButton.classList.add("fade-out");
  setTimeout(() => {
    gameOver ? (playAgainButton.textContent = "PLAY AGAIN?") : null;
    playAgainButton.classList.remove("fade-out");
  }, 75);
});

menuStartGameElement.addEventListener("mouseover", () => {
  const mouseOverSoundClone = mouseOverSound.cloneNode();
  mouseOverSoundClone.play();
});
menuOptionsElement.addEventListener("mouseover", () => {
  const mouseOverSoundClone = mouseOverSound.cloneNode();
  mouseOverSoundClone.play();
});

easyButton.addEventListener("click", () => {
  flipSpeed = easyButton.dataset.name;
  easyButton.style.color = "#27dbb1";
  mediumButton.style.color = "#76a697";
  hardButton.style.color = "#76a697";
  veryHardButton.style.color = "#76a697";
  multiplyScoreFactor = 0.75;
});
mediumButton.addEventListener("click", () => {
  flipSpeed = mediumButton.dataset.name;
  mediumButton.style.color = "#27dbb1";
  easyButton.style.color = "#76a697";
  hardButton.style.color = "#76a697";
  veryHardButton.style.color = "#76a697";
  multiplyScoreFactor = 1;
});
hardButton.addEventListener("click", () => {
  flipSpeed = hardButton.dataset.name;
  veryHardButton.style.color = "#76a697";
  hardButton.style.color = "#27dbb1";
  mediumButton.style.color = "#76a697";
  easyButton.style.color = "#76a697";
  multiplyScoreFactor = 1.15;
});
veryHardButton.addEventListener("click", () => {
  flipSpeed = veryHardButton.dataset.name;
  veryHardButton.style.color = "#27dbb1";
  hardButton.style.color = "#76a697";
  mediumButton.style.color = "#76a697";
  easyButton.style.color = "#76a697";
  multiplyScoreFactor = 1.25;
});

optionsBackgrounds.addEventListener("click", () => {
  if (backgroundBool) {
    backgroundBool = false;
    optionsBackgrounds.textContent = "ANIMATED BACKGROUNDS OFF";
  } else {
    backgroundBool = true;
    optionsBackgrounds.textContent = "ANIMATED BACKGROUNDS ON";
  }
});

// #region Register & login

function openLogin() {
  loginRegisterContainer.classList.add("invisible", "disabled");
  menuContainer.classList.add("invisible", "disabled");
  loginFormContainer.classList.remove("invisible", "disabled");
}
openLoginButton.addEventListener("click", openLogin);
function closeLogin() {
  menuContainer.classList.remove("invisible", "disabled");
  loginFormContainer.classList.add("invisible", "disabled");
  loginRegisterContainer.classList.remove("invisible", "disabled");
}
loginFormBack.addEventListener("click", closeLogin);
function openRegister() {
  loginRegisterContainer.classList.add("invisible", "disabled");
  menuContainer.classList.add("invisible", "disabled");
  registerFormContainer.classList.remove("invisible", "disabled");
}
openRegisterButton.addEventListener("click", openRegister);
function closeRegister() {
  menuContainer.classList.remove("invisible", "disabled");
  registerFormContainer.classList.add("invisible", "disabled");
  loginRegisterContainer.classList.remove("invisible", "disabled");
}
registerFormBack.addEventListener("click", closeRegister);
