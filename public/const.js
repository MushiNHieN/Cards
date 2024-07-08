

// #region Document elements
export const html = document.getElementsByTagName("html")[0];
export const body = document.getElementById("body");
export const glass = document.getElementById("glass");
export const container = document.getElementById("cardContainer");
export const resetButton = document.getElementById("resetButton");
export const playAgainButton = document.getElementById("playAgainButton");
export const timerElement = document.getElementById("timer");
export const startElement = document.getElementById("start");
export const winElement = document.getElementById("win");
export const comboElement = document.getElementById("combo");
export const menuContainer = document.getElementById("menuContainer");
export const menuStartGameElement = document.getElementById("menuStartGame");
export const menuOptionsElement = document.getElementById("menuOptions");
export const menuOptionsBackElement = document.getElementById("optionsBack");
export const optionsBackCards = document.getElementById("optionsBackCards");
export const optionsElement = document.getElementById("options");
export const optionsCardsMenu = document.getElementById("optionsCardsMenu");
export const optionsCards = document.getElementById("optionsCards");
export const optionsBackgrounds = document.getElementById("optionsBackgrounds");
export const optionsDifficulty = document.getElementById("optionsDifficulty");
export const difficultyContainer = document.getElementById("difficultyContainer");
export const optionsBackDifficulty = document.getElementById("optionsBackDifficulty");
export const optionsAnimatedBackgrounds = document.getElementById(
  "optionsAnimatedBackgrounds"
);
export const menuHighScore = document.getElementById("menuHighScore");
export const highScoreContainer = document.getElementById("highScoreContainer");
export const highScoreBack = document.getElementById("highScoreBack");
export const loginRegisterContainer = document.getElementById(
  "loginRegisterContainer"
);
export const registerFormContainer = document.getElementById("registerFormContainer");
export const registerForm = document.getElementById("registerForm");
export const loginFormContainer = document.getElementById("loginFormContainer");
export const loginForm = document.getElementById("loginForm");
export const openLoginButton = document.getElementById("openLogin");
export const openRegisterButton = document.getElementById("openRegister");
export const loginFormBack = document.getElementById("loginFormBack");
export const registerFormBack = document.getElementById("registerFormBack");
export const logoutButton = document.getElementById("logout");
export const chooseCardContainer = document.getElementById("chooseCardContainer");
export const firstTryElement = document.getElementById("firstTry");
export const loseElement = document.getElementById("lose");
export const cardsElements = document.querySelectorAll(".card");
export let bodyClassList = body.classList;
export const cardSnitch = document.getElementById("cardSnitch");
export const scoreElement = document.getElementById("score");
export const scoreTimeElement = document.getElementById("scoreTime");
export const scoreTotalElement = document.getElementById("scoreTotal");
export const scoreControls = document.getElementById("scoreControls");
export const scoreCombos = document.getElementById("scoreCombos");
export const gameplayControls = document.getElementById("gameplayControls");
export const musicVolumeSlider = document.getElementById("musicVolumeSlider");
export const efxVolumeSlider = document.getElementById("efxVolumeSlider");
export const easyButton = document.getElementById("easyButton");
export const mediumButton = document.getElementById("mediumButton");
export const hardButton = document.getElementById("hardButton");
export const veryHardButton = document.getElementById("veryHardButton");
export const mainMenuButton = document.getElementById("mainMenuButton");


// #region Var
export const numberOfCards = 8;
export const baseTime = 500;
export let cardsFolder = "cards1";
export const availableDecks = ["cards1", "cards2", "cards3", "cards4", "cards5"];
export let multiplyScoreFactor = 1;
export const comboScores = [
  { id: 2, name: "GREAT 2 COMBO", score: 2000, audio: greatComboAudio },
  { id: 3, name: "COOL 3 COMBO", score: 3000, audio: coolComboAudio },
  { id: 4, name: "CRAZY 4 COMBO", score: 4500, audio: crazyComboAudio },
  { id: 5, name: "MANIAC 5 COMBO", score: 6750, audio: maniacComboAudio },
  { id: 6, name: "INSANE 6 COMBO", score: 8000, audio: insaneComboAudio },
  { id: 7, name: "SEER 7 COMBO", score: 9500, audio: seerComboAudio },
  { id: 8, name: "GODLIKE 8 COMBO", score: 12000, audio: godlikeComboAudio },
];
