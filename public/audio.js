// #region Music
export const gameplayMusic = new Audio("sounds/gameplay_music.mp3");
gameplayMusic.loop = true;
export const menuMusic = new Audio("sounds/menu_music2.mp3");
menuMusic.loop = true;
export const optionsMusic = new Audio("sounds/options.mp3");
optionsMusic.loop = true;
export const highScoreMusic = new Audio("sounds/highscore.mp3");
highScoreMusic.loop = true;

// #region Efx
export const flipSound = new Audio("sounds/flip.mp3");
export const matchPairSound = new Audio("sounds/clink.wav");
export const wooshSound = new Audio("sounds/woosh.mp3");
export const clickSound = new Audio("sounds/click.mp3");
export const mouseOverSound = new Audio("sounds/menu5.mp3");
export const applauseSound = new Audio("sounds/applause.mp3");
export const wowSound = new Audio("sounds/wow.mp3");
export const scratchSound = new Audio("sounds/scratch.mp3");
export const gameOverAudio = new Audio("sounds/gameover.mp3");
export const scoreAudio = new Audio("sounds/score.mp3");
export const greatComboAudio = new Audio("sounds/great.wav");
export const coolComboAudio = new Audio("sounds/cool.wav");
export const crazyComboAudio = new Audio("sounds/crazy.wav");
export const maniacComboAudio = new Audio("sounds/maniac.wav");
export const insaneComboAudio = new Audio("sounds/insane.wav");
export const seerComboAudio = new Audio("sounds/seer.wav");
export const godlikeComboAudio = new Audio("sounds/godlike.wav");

// #region Music & efx arrays
export const musicArray = [menuMusic, optionsMusic, gameplayMusic, highScoreMusic];
export const efxArray = [
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