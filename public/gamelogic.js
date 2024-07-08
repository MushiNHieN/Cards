function initializeGame() {
  closeCircle();
  setTimeout(() => {
    openCircle();
    resetGame();
    comboArray = [];
    changeBackground();
    menuMusic.pause();
    gameplayMusic.play();
    menuContainer.classList.add("invisible", "disabled");
    const selectedCards = [];
    while (selectedCards.length < numberOfCards) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      if (!selectedCards.includes(card)) {
        selectedCards.push(card);
      }
    }

    cardArray = [...selectedCards, ...selectedCards].sort(
      () => 0.5 - Math.random()
    );
    createBoard();
    setTimeout(() => {
      flashScreen();
    }, 2500);
    setTimeout(() => {
      startAnimation();
      startTimer();
    }, 2000);
    setTimeout(() => {
      gameplayControls.classList.remove("invisible", "disabled");
      resetButton.classList.remove("invisible");
      timerElement.classList.remove("invisible");
      let placedCards = document.querySelectorAll(".card");
      placedCards.forEach((card) => {
        card.classList.remove("disabled");
      });
    }, 3000);
  }, 1000);
}

function createBoard() {
  glass.classList.remove("invisible");
  container.innerHTML = "";
  cardArray.forEach((card, index) => {
    setTimeout(() => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card", "disabled");
      cardElement.dataset.name = card.name;

      const cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");

      const cardFront = document.createElement("div");
      cardFront.classList.add("card-front");
      cardFront.style.backgroundImage = `url('img/${cardsFolder}/${card.img}')`;

      const cardBack = document.createElement("div");
      cardBack.classList.add("card-back");
      cardBack.style.backgroundImage = `url('img/${cardsFolder}/reverse.png')`;

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      cardElement.appendChild(cardInner);
      container.appendChild(cardElement);

      cardElement.addEventListener("click", flipCard);
      cardElement.addEventListener("mouseover", () => {
        if (!cardElement.classList.contains("flipped")) {
          cardElement.classList.add("shadow");
        }

        cardSnitch.textContent = cardElement.dataset.name;
      });
      cardElement.addEventListener("mouseout", () => {
        cardElement.classList.remove("shadow");
      });
      const flipSoundClone = flipSound.cloneNode();
      flipSoundClone.play();
    }, index * 100);
  });
  setTimeout(() => {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.add("flipped");
    });
  }, 1700);

  setTimeout(() => {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("flipped");
    });
  }, 2800);
}

menuOptionsElement.addEventListener("click", () => {
  openOptions();
});
menuOptionsBackElement.addEventListener("click", () => {
  closeOptions();
});

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    if (firstAttempt) {
      firstAttempt = false;
      wowSound.play();
      firstTryElement.classList.remove("invisible");
      setTimeout(() => {
        firstTryElement.classList.add("invisible");
      }, 2000);
    }
    disableCards();
    addCombo();
  } else {
    firstAttempt = false;
    unflipCards();
    comboElement.style.animation = "dropCombo 0.7s ease-out";
    comboCount >= 2 ? scratchSound.play() : null;

    let comboObj = comboScores.find((obj) => obj["id"] === comboCount);
    comboCount >= 2 ? comboArray.push(comboObj) : null;

    comboCount = 0;
    // setTimeout(() => {
    //   comboElement.classList.add("invisible");
    //   comboElement.textContent = "";
    //   comboCount = 0;
    // }, 700);
  }
}

function calculateScore() {
  let totalScore = 0;
  let counter = 0;
  let timeScore = seconds * 100;
  totalScore = totalScore + timeScore;
  scoreTimeElement.textContent = `TIME ${timeScore}`;

  scoreContainer.classList.remove("invisible", "disabled");

  comboArray.forEach((combo) => {
    totalScore = totalScore + combo.score;
    const comboScoreElement = document.createElement("div");
    comboScoreElement.textContent = `${combo.name} ${combo.score}`;
    comboScoreElement.classList.add("invisible");
    scoreCombos.appendChild(comboScoreElement);

    comboScoreElement.classList.remove("invisible");
  });
  totalScore = totalScore * multiplyScoreFactor;

  let scoreInterval = setInterval(() => {
    scoreAudio.play();
    counter = counter + 100;
    scoreTotalElement.textContent = `TOTAL ${counter}`;
    if (counter >= totalScore) {
      clearInterval(scoreInterval);
    }
  }, 10);
  submitScore(totalScore);
}

function submitScore(score) {
  retrieveUserInfo().then((data) => {
    if (data) {
      console.log(data);
      const userId = data.userId;
      const timestamp = new Date().toISOString();

      fetch("/api/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, score, timestamp }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Score submitted successfully:", data);
          // Aquí puedes actualizar la UI para mostrar un mensaje de éxito o similar
        })
        .catch((error) => {
          console.error("Error submitting score:", error);
        });
    }
  });
}
function addCombo() {
  ++comboCount;
  if (comboCount >= 2) {
    currentCombo = comboScores.find((obj) => obj.id === comboCount);
    comboElement.textContent = currentCombo.name;
    currentCombo.audio.play();
    comboElement.classList.remove("invisible");
  }

  var animationDuration = (baseTime / comboCount).toFixed(0);
  animationDuration < 100
    ? (animationDuration = animationDuration / 10)
    : (animationDuration = animationDuration);
  comboElement.style.animation = `vibrate 0.${animationDuration}s infinite`;
  setTimeout(() => {
    comboElement.classList.add("invisible");
  }, 2000);
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  firstCard.classList.add("shiny", "disabled");
  secondCard.classList.add("shiny", "disabled");
  flashScreen();
  setTimeout(() => {
    const matchPairSoundClone = matchPairSound.cloneNode();
    matchPairSoundClone.volume = 0.2;
    matchPairSoundClone.play();
  }, 200);

  resetBoard();
  win();
}

function win() {
  if (document.querySelectorAll(".card:not(.flipped)").length === 0) {
    let comboObj = comboScores.find((obj) => obj["id"] === comboCount + 1);
    comboCount >= 2 ? comboArray.push(comboObj) : null;

    gameplayMusic.pause();
    applauseSound.play();
    gameOver = true;
    resetButton.textContent = "PLAY AGAIN?";
    winElement.classList.remove("invisible");
    clearInterval(timer);
    while (bodyClassList.length > 0) {
      bodyClassList.remove(bodyClassList[0]);
    }
    body.classList.add("gradient-bg");
    body.classList.add("fade");
    setTimeout(() => {
      scoreContainer.classList.remove("invisible");
      winElement.classList.add("invisible", "disabled");
      gameplayControls.classList.add("invisible", "disabled");
      calculateScore();
    }, 1500);
  }
}

function lose() {
  gameOver = true;
  clearInterval(timer);
  gameplayMusic.pause();
  gameOverAudio.play();

  loseElement.classList.remove("invisible");
  let placedCards = document.querySelectorAll(".card");
  placedCards.forEach((card) => {
    card.classList.add("disabled");
  });
}

loseInterval = setInterval(() => {
  if (!gameOver) {
    if (timerElement.textContent == "Time: 00") {
      lose();
    }
  }
}, 1000);

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function resetGame() {
  const clickSoundClone = clickSound.cloneNode();
  clickSoundClone.play();
  clearInterval(timer);
  startElement.classList.remove("start", "invisible");
  resetButton.classList.add("invisible");
  resetButton.textContent = "RESET?";
  body.classList.remove("gradient-bg");
  winElement.classList.add("invisible");
  loseElement.classList.add("invisible");
  comboElement.classList.add("invisible");
  scoreContainer.classList.add("invisible", "disabled");
  glass.classList.remove("disabled");
  seconds = 90;
  minutes = 0;
  timerElement.textContent = "";
  firstCard = null;
  secondCard = null;
  firstAttempt = true;
  lockBoard = false;
  gameOver = false;
  comboCount = 0;
  comboArray = [];
  scoreCombos.innerHTML = "";
}
function playAgain() {
  const clickSoundClone = clickSound.cloneNode();
  clickSoundClone.play();
  clearInterval(timer);
  startElement.classList.remove("start", "invisible");
  resetButton.classList.add("invisible");
  resetButton.textContent = "RESET?";
  body.classList.remove("gradient-bg");
  winElement.classList.add("invisible");
  loseElement.classList.add("invisible");
  comboElement.classList.add("invisible");
  scoreContainer.classList.add("invisible", "disabled");
  glass.classList.remove("disabled");
  seconds = 90;
  minutes = 0;
  timerElement.textContent = "";
  firstCard = null;
  secondCard = null;
  firstAttempt = true;
  lockBoard = false;
  gameOver = false;
  comboCount = 0;
  comboArray = [];
  scoreCombos.innerHTML = "";
  initializeGame();
}
