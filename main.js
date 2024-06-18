document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    { name: "C1", img: "C1.png" },
    { name: "D1", img: "D1.png" },
    { name: "H1", img: "H1.png" },
    { name: "S1", img: "S1.png" },
    { name: "C2", img: "C2.png" },
    { name: "D2", img: "D2.png" },
    { name: "H2", img: "H2.png" },
    { name: "S2", img: "S2.png" },
    { name: "C3", img: "C3.png" },
    { name: "D3", img: "D3.png" },
    { name: "H3", img: "H3.png" },
    { name: "S3", img: "S3.png" },
    { name: "C4", img: "C4.png" },
    { name: "D4", img: "D4.png" },
    { name: "H4", img: "H4.png" },
    { name: "S4", img: "S4.png" },
    { name: "C5", img: "C5.png" },
    { name: "D5", img: "D5.png" },
    { name: "H5", img: "H5.png" },
    { name: "S5", img: "S5.png" },
    { name: "C6", img: "C6.png" },
    { name: "D6", img: "D6.png" },
    { name: "H6", img: "H6.png" },
    { name: "S6", img: "S6.png" },
    { name: "C7", img: "C7.png" },
    { name: "D7", img: "D7.png" },
    { name: "H7", img: "H7.png" },
    { name: "S7", img: "S7.png" },
    { name: "C8", img: "C8.png" },
    { name: "D8", img: "D8.png" },
    { name: "H8", img: "H8.png" },
    { name: "S8", img: "S8.png" },
    { name: "C9", img: "C9.png" },
    { name: "D9", img: "D9.png" },
    { name: "H9", img: "H9.png" },
    { name: "S9", img: "S9.png" },
    { name: "C10", img: "C10.png" },
    { name: "D10", img: "D10.png" },
    { name: "H10", img: "H10.png" },
    { name: "S10", img: "S10.png" },
    { name: "CJ", img: "CJ.png" },
    { name: "DJ", img: "DJ.png" },
    { name: "HJ", img: "HJ.png" },
    { name: "SJ", img: "SJ.png" },
    { name: "CK", img: "CK.png" },
    { name: "DK", img: "DK.png" },
    { name: "HK", img: "HK.png" },
    { name: "SK", img: "SK.png" },
    { name: "CQ", img: "CQ.png" },
    { name: "DQ", img: "DQ.png" },
    { name: "HQ", img: "HQ.png" },
    { name: "SQ", img: "SQ.png" },
  ];

  // #region Document elements
  const body = document.getElementById("body");
  const glass = document.getElementById("glass");
  const container = document.getElementById("cardContainer");
  const resetButton = document.getElementById("resetButton");
  const playAgainButton = document.getElementById("playAgainButton");
  const timerElement = document.getElementById("timer");
  const startElement = document.getElementById("start");
  const winElement = document.getElementById("win");
  const comboElement = document.getElementById("combo");
  const menuContainer = document.getElementById("menuContainer");
  const menuStartGameElement = document.getElementById("menuStartGame");
  const menuOptionsElement = document.getElementById("menuOptions");
  const menuOptionsBackElement = document.getElementById("optionsBack");
  const optionsBackCards = document.getElementById("optionsBackCards");
  const optionsElement = document.getElementById("options");
  const optionsCardsMenu = document.getElementById("optionsCardsMenu");
  const optionsCards = document.getElementById("optionsCards");
  const cards1Button = document.getElementById("cards1Button");
  const cards2Button = document.getElementById("cards2Button");
  const cards3Button = document.getElementById("cards3Button");
  const cards4Button = document.getElementById("cards4Button");
  const cards5Button = document.getElementById("cards5Button");
  const firstTryElement = document.getElementById("firstTry");
  const loseElement = document.getElementById("lose");
  const cardsElements = document.querySelectorAll(".card");
  let bodyClassList = body.classList;
  const cardSnitch = document.getElementById("cardSnitch");
  const scoreElement = document.getElementById("score");
  const scoreTimeElement = document.getElementById("scoreTime");
  const scoreControls = document.getElementById("scoreControls");
  const scoreCombos = document.getElementById("scoreCombos");
  const gameplayControls = document.getElementById("gameplayControls");
  const musicVolumeSlider = document.getElementById("musicVolumeSlider");
  const efxVolumeSlider = document.getElementById("efxVolumeSlider");
  const easyButton = document.getElementById("easyButton");
  const mediumButton = document.getElementById("mediumButton");
  const hardButton = document.getElementById("hardButton");
  const mainMenuButton = document.getElementById("mainMenuButton");
  // #region Music
  const gameplayMusic = new Audio("sounds/gameplay_music.mp3");
  gameplayMusic.loop = true;
  const menuMusic = new Audio("sounds/menu_music2.mp3");
  menuMusic.loop = true;
  const optionsMusic = new Audio("sounds/options.mp3");
  optionsMusic.loop = true;

  // #region Efx
  const flipSound = new Audio("sounds/flip.mp3");
  const matchPairSound = new Audio("sounds/clink.wav");
  const wooshSound = new Audio("sounds/woosh.mp3");
  const clickSound = new Audio("sounds/click.mp3");
  const mouseOverSound = new Audio("sounds/menu5.mp3");
  const applauseSound = new Audio("sounds/applause.mp3");
  const wowSound = new Audio("sounds/wow.mp3");
  const scratchSound = new Audio("sounds/scratch.mp3");
  const gameOverAudio = new Audio("sounds/gameover.mp3");
  const scoreAudio = new Audio("sounds/score.mp3");
  const greatComboAudio = new Audio("sounds/great.wav");
  const coolComboAudio = new Audio("sounds/cool.wav");
  const crazyComboAudio = new Audio("sounds/crazy.wav");
  const maniacComboAudio = new Audio("sounds/maniac.wav");
  const insaneComboAudio = new Audio("sounds/insane.wav");
  const seerComboAudio = new Audio("sounds/seer.wav");
  const godlikeComboAudio = new Audio("sounds/godlike.wav");

  // #region Music & efx arrays
  const musicArray = [menuMusic, optionsMusic, gameplayMusic];
  const efxArray = [
    flipSound,
    matchPairSound,
    wooshSound,
    clickSound,
    mouseOverSound,
    applauseSound,
    wowSound,
    scratchSound,
    gameOverAudio,
    scoreAudio,
    greatComboAudio,
    coolComboAudio,
    crazyComboAudio,
    maniacComboAudio,
    insaneComboAudio,
    seerComboAudio,
    godlikeComboAudio,
  ];

  // #region Const
  const numberOfCards = 8;
  const baseTime = 500;
  let cardsFolder = "cards1";
  const availableDecks = ["cards1", "cards2", "cards3", "cards4", "cards5"];
  const comboScores = [
    { id: 2, name: "GREAT 2 COMBO", score: 2000, audio: greatComboAudio },
    { id: 3, name: "COOL 3 COMBO", score: 3000, audio: coolComboAudio },
    { id: 4, name: "CRAZY 4 COMBO", score: 4500, audio: crazyComboAudio },
    { id: 5, name: "MANIAC 5 COMBO", score: 6750, audio: maniacComboAudio },
    { id: 6, name: "INSANE 6 COMBO", score: 8000, audio: insaneComboAudio },
    { id: 7, name: "SEER 7 COMBO", score: 9500, audio: seerComboAudio },
    { id: 8, name: "GODLIKE 8 COMBO", score: 12000, audio: godlikeComboAudio },
  ];

  // #region Control
  let firstCard = null;
  let secondCard = null;
  let firstAttempt = true;
  let lockBoard = false;
  let gameOver = false;
  let cardArray = [];
  let comboArray = [];
  let timer;
  let loseInterval;
  let seconds = 91;
  let minutes = 0;
  let comboCount = 0;
  let flipSpeed = 1000;

  glass.classList.add("invisible");

  // #region Audio controller
  musicArray.forEach((audio) => {
    audio.volume = musicVolumeSlider.value;
  });
  efxArray.forEach((audio) => {
    audio.volume = efxVolumeSlider.value;
  });

  musicVolumeSlider.addEventListener("input", function () {
    const volume = this.value;
    musicArray.forEach((audio) => {
      audio.volume = volume;
    });
  });
  efxVolumeSlider.addEventListener("input", function () {
    const volume = this.value;
    efxArray.forEach((audio) => {
      audio.volume = volume;
    });
  });

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

  menuMusic.play();

  // #region Game logic

  easyButton.addEventListener("click", () => {
    flipSpeed = easyButton.dataset.name;
    easyButton.style.color = "#27dbb1";
    mediumButton.style.color = "#76a697";
    hardButton.style.color = "#76a697";
  });
  mediumButton.addEventListener("click", () => {
    flipSpeed = mediumButton.dataset.name;
    mediumButton.style.color = "#27dbb1";
    easyButton.style.color = "#76a697";
    hardButton.style.color = "#76a697";
  });
  hardButton.addEventListener("click", () => {
    flipSpeed = hardButton.dataset.name;
    hardButton.style.color = "#27dbb1";
    mediumButton.style.color = "#76a697";
    easyButton.style.color = "#76a697";
  });

  function initializeGame() {
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
  }

  menuOptionsElement.addEventListener("click", () => {
    openOptions();
  });
  menuOptionsBackElement.addEventListener("click", () => {
    closeOptions();
    console.log("adad");
  });

  function startTimer() {
    // clearInterval(timer);
    // timer = setInterval(() => {
    //   seconds++;
    //   if (seconds === 60) {
    //     minutes++;
    //     seconds = 0;
    //   }
    //   timerElement.textContent = `Time: ${
    //     minutes < 10 ? "0" + minutes : minutes
    //   }:${seconds < 10 ? "0" + seconds : seconds}`;
    // }, 1000);
    clearInterval(timer);
    timer = setInterval(() => {
      seconds--;
      timerElement.textContent = `Time: ${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }, 1000);
  }

  // #region Checks & score
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
    let counter = 0;
    let timeScore = seconds * 100;
    let scoreTimeInterval = setInterval(() => {
      scoreAudio.play();

      counter = counter + 10;
      scoreTimeElement.textContent = `TIME      ${counter}`;
      if (counter >= timeScore) {
        clearInterval(scoreTimeInterval);
      }
    }, 1);

    scoreContainer.classList.remove("invisible", "disabled");

    comboArray.forEach((combo) => {
      const comboScoreElement = document.createElement("div");
      comboScoreElement.textContent = `${combo.name} ${combo.score}`;
      comboScoreElement.classList.add("invisible");
      scoreCombos.appendChild(comboScoreElement);
      setTimeout(() => {
        comboScoreElement.classList.remove("invisible");
      }, 2500);
      let scoreComboInterval = setInterval(() => {}, 1);
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

  // #region Animations
  function startAnimation() {
    wooshSound.play();
    startElement.classList.add("start");
    startElement.addEventListener("animationend", () => {
      startElement.classList.add("invisible");
    });
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    flipSound.cloneNode().play();

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      flipSound.cloneNode().play();
      resetBoard();
    }, flipSpeed);
  }

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
      // "backgroundtype3-1",
      // "backgroundtype3-2",
      // "backgroundtype3-3",
    ];

    while (bodyClassList.length > 0) {
      bodyClassList.remove(bodyClassList[0]);
    }

    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    bodyClassList.add(backgrounds[randomIndex]);
  }
  changeBackground();

  // #region Options menu
  function openMainMenu() {
    resetGame();
    menuMusic.play();
    gameplayMusic.currentTime = 0;
    body.classList.remove("gradient-bg");
    glass.classList.add("disabled", "invisible");
    scoreContainer.classList.add("disabled", "invisible");
    menuContainer.classList.remove("invisible", "disabled");
    changeBackground();
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
  }
  function closeOptionsCards() {
    // optionsElement.classList.add("invisible", "disabled");
    optionsCardsMenu.classList.add("invisible", "disabled");
    optionsElement.classList.remove("invisible", "disabled");
  }

  cards1Button.addEventListener("click", () => {
    cardsFolder = "cards1";
    console.log("cards1");
  });
  cards2Button.addEventListener("click", () => {
    cardsFolder = "cards2";
    console.log("cards2");
  });
  cards3Button.addEventListener("click", () => {
    cardsFolder = "cards3";
    console.log("cards3");
  });
  cards4Button.addEventListener("click", () => {
    cardsFolder = "cards4";
    console.log("cards4");
  });
  cards5Button.addEventListener("click", () => {
    cardsFolder = "cards5";
    console.log("cards5");
  });
  optionsBackCards.addEventListener("click", () => {
    closeOptionsCards();
  });

  resetButton.addEventListener("click", playAgain);
  playAgainButton.addEventListener("click", playAgain);
  menuStartGameElement.addEventListener("click", initializeGame);
  optionsCards.addEventListener("click", openOptionsCards);
});
