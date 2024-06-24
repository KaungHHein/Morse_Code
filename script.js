const morseCodeMap = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
};

const revreseMorseCodeMap = {};


for (const key in morseCodeMap) {
  if (morseCodeMap.hasOwnProperty(key)) {
    revreseMorseCodeMap[morseCodeMap[key]] = key;
  }
};




const outputtext = document.getElementById('output');

const button = document.getElementById('btn');

const mutebutton = document.getElementById('mutebtn');

const unmutebutton = document.getElementById('unmutebtn');



let audio = new Audio("audio.mp3");
audio.muted = true;




function playMusic() {
  audio.play();
};




function pauseMusic() {
  audio.pause();
  audio.currentTime = 0;
};



mutebutton.addEventListener("click", () => {
  audio.muted = true;
  mutebutton.style.backgroundColor = "rgb(74, 124, 93)"
  unmutebutton.style.backgroundColor = "darkgray"
});


unmutebutton.addEventListener("click", () => {
  audio.muted = false;
  unmutebutton.style.backgroundColor = "rgb(74, 124, 93)"
  mutebutton.style.backgroundColor = "darkgray"
});







let dot = ".";
let dash = "-";
let morsecode = '';
let translatedText = '';

let starttime;
let endtime;
let resulttime;





button.addEventListener("pointerdown", () => {

  document.getElementById('lighting').style.backgroundColor = "white";

  playMusic();

  starttime = Date.now();

  // console.log("starttime is : " + starttime) ;

});




button.addEventListener("pointerup", () => {

  document.getElementById('lighting').style.backgroundColor = "black";

  pauseMusic();

  endtime = Date.now();

  // console.log("endtime is : " + endtime) ;  

  resulttime = endtime - starttime;

  // console.log("resulttime is " + resulttime + "ms") ;

  if (resulttime < 150) {
    morsecode += dot;
  } else if (resulttime > 150 && resulttime < 1000) {
    morsecode += dash;
  }

});




button.addEventListener("pointerover", () => {

  setTimeout(finalmorsecode, 1780);

});




function finalmorsecode() {
  // console.log("morsecode is : " + morsecode) ;

  if (revreseMorseCodeMap[morsecode]) {
    translatedText += revreseMorseCodeMap[morsecode];
  }

  outputtext.value = translatedText.split('').pop();

  morsecode = "";

};




