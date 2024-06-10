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

  const body = document.getElementById("body");
  const container = document.getElementById("cardContainer");
  const resetButton = document.getElementById("resetButton");
  const timerElement = document.getElementById("timer");
  const startElement = document.getElementById("start");
  const winElement = document.getElementById("win");
  const comboElement = document.getElementById("combo");
  const menuElement = document.getElementById("menuContainer");
  const menuStartGameElement = document.getElementById("menuStartGame");
  const menuOptionsElement = document.getElementById("menuOptions");
  const menuOptionsBackElement = document.getElementById("optionsBack")
  const optionsElement = document.getElementById("options");
  const firstTryElement = document.getElementById("firstTry");
  const glass = document.getElementById("glass");
  const loseElement = document.getElementById("lose");
  const cardsElements = document.querySelectorAll(".card");
  let bodyClassList = body.classList;
  const cardSnitch = document.getElementById("cardSnitch");

  const numberOfCards = 8;
  const baseTime = 500;
  let cardsFolder = "cards3";
  const availableDecks = ["cards1", "cards2", "cards3"]
  const comboNames = [
    "",
    "GREAT",
    "COOL",
    "CRAZY",
    "MANIAC",
    "INSANE",
    "SEER",
    "GODLIKE",
  ];

  const flipSound = new Audio("sounds/flip.mp3");
  const matchPairSound = new Audio("sounds/clink.wav");
  const wooshSound = new Audio("sounds/woosh.mp3");
  wooshSound.volume = 0.5;
  const clickSound = new Audio("sounds/click.mp3");
  const mouseOverSound = new Audio("sounds/menu5.mp3");
  const menuMusic = new Audio("sounds/menu_music2.mp3");
  menuMusic.loop = true;
  menuMusic.volume = 0.1;
  const optionsMusic = new Audio("sounds/options.mp3")
  optionsMusic.volume = 0.1;
  const gameplayMusic = new Audio("sounds/gameplay_music.mp3");
  gameplayMusic.loop = true;
  gameplayMusic.volume = 0.1;
  const applauseSound = new Audio("sounds/applause.mp3");
  applauseSound.volume = 0.3;
  const wowSound = new Audio("sounds/wow.mp3");
  wowSound.volume = 0.3;
  const scratchSound = new Audio("sounds/scratch.mp3");
  scratchSound.volume = 0.3;
  const gameOverAudio = new Audio("sounds/gameover.mp3");
  gameOverAudio.volume = 0.3;

  let firstCard = null;
  let secondCard = null;
  let firstAttempt = true;
  let lockBoard = false;
  let gameOver = false;
  let cardArray = [];
  let comboArray = []
  let timer;
  let loseInterval;
  let seconds = 91;
  let minutes = 0;
  let comboCount = 0;

  glass.classList.add("invisible");

  function changeBackground() {
    let backgrounds = [
      "background1",
      "background2",
      "background3",
      "background4",
    ];
    console.log(bodyClassList);
    while (bodyClassList.length > 0) {
      bodyClassList.remove(bodyClassList[0]);
    }

    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    bodyClassList.add(backgrounds[randomIndex]);
  }
  changeBackground();
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

  menuStartGameElement.addEventListener("mouseover", () => {
    const mouseOverSoundClone = mouseOverSound.cloneNode();
    mouseOverSoundClone.play();
  });
  menuOptionsElement.addEventListener("mouseover", () => {
    const mouseOverSoundClone = mouseOverSound.cloneNode();
    mouseOverSoundClone.play();
  });

  menuMusic.play();

  function startAnimation() {
    wooshSound.play();
    startElement.classList.add("start");
    startElement.addEventListener("animationend", () => {
      startElement.classList.add("invisible");
    });
  }
  function initializeGame() {
    changeBackground();
    menuMusic.pause();
    gameplayMusic.play();
    menuElement.classList.add("invisible", "disabled");
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

  function openOptions() {
    menuMusic.pause();
    menuMusic.currentTime = 0;
    optionsMusic.play();
    menuElement.classList.add("invisible", "disabled");
    optionsElement.classList.remove("invisible", "disabled");
  }

  function closeOptions(){
    menuMusic.play();
    optionsMusic.pause();
    optionsMusic.currentTime = 0;
    menuElement.classList.remove("invisible", "disabled");
    optionsElement.classList.add("invisible", "disabled");
  }

  function openOptionsCards(){
    
  }

  menuOptionsElement.addEventListener("click", () => {
    openOptions();
  });
  menuOptionsBackElement.addEventListener("click", () => {
    closeOptions();
  });



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


      setTimeout(() => {
        comboElement.classList.add("invisible");
        comboElement.textContent = "";
        comboCount = 0;
      }, 700);
    }
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

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      flipSound.cloneNode().play();
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  function resetGame() {
    const clickSoundClone = clickSound.cloneNode();
    clickSoundClone.play();
    clearInterval(timer);
    startElement.classList.remove("start", "invisible");
    resetButton.classList.add("invisible");
    body.classList.remove("gradient-bg");
    winElement.classList.add("invisible");
    loseElement.classList.add("invisible");
    comboElement.classList.add("invisible");
    seconds = 90;
    minutes = 0;
    timerElement.textContent = "";
    firstCard = null;
    secondCard = null;
    firstAttempt = true;
    lockBoard = false;
    gameOver = false;
    comboCount = 0;
    initializeGame();
  }

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
      timerElement.textContent = `Time: ${seconds < 10 ? "0" + seconds : seconds}`

    }, 1000);
  }

  function addCombo() {
    comboElement.textContent = `${
      comboNames[comboCount]
    } ${++comboCount} COMBO`;
    comboCount >= 2 ? comboElement.classList.remove("invisible") : null;
    var animationDuration = (baseTime / comboCount).toFixed(0);
    animationDuration < 100
      ? (animationDuration = animationDuration / 10)
      : (animationDuration = animationDuration);
    comboElement.style.animation = `vibrate 0.${animationDuration}s infinite`;
    console.log(comboElement.textContent);
  }

  function flashScreen() {
    var flashDiv = document.getElementById("flash");
    flashDiv.style.display = "block";

    setTimeout(function () {
      flashDiv.style.display = "none";
    }, 50);
  }

  resetButton.addEventListener("click", resetGame);
  menuStartGameElement.addEventListener("click", initializeGame);
});
