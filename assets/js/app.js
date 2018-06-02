const power = document.querySelector('.power');
const screen = document.querySelector('.screen');
const starter = document.querySelector('.starter');
const cable = document.querySelector('.cable');

let perf;
let input;

const texts = 
  [
    "import Dorian Collier from 'Charleroi';",
    "import TelenetInnovationCenter from 'Woluwe-Saint-Lambert';",
    "post ('Adrian.zochowski@telenetgroup.be','Hire me!') {",
    "return new Promise((resolve,reject)) => {",
    "fetch(url, ..."
  ];
let rand;
let a;
let randTest;
let countDiv = 1;
let perfb;


window.onload = () => {
    power.style.color = '#6EA674';
    screen.style.background = '#4F7A91';
    setTimeout(() => {
      screen.style.background = '#324D5C';
    }, 1250);
    displayText();

    // not good enough

    // input.addEventListener('keydown', (e) => {
    //   if (e.keyCode === 121 || e.keyCode === 89) {
    //     console.log('t');
    //     // function 
    //     for (let i = 0; i < 100; i++) {
    //       cable.background = `linear-gradient(90deg, rgba(14,2,23,1) ${i - 1}%, rgba(253,203,29,1) ${i+2}%, rgba(25,16,2,1) ${i+3}%)`;
    //     }
    //   }
    // });

  }





function displayText() {

  perf = performance.now();
  texts.forEach((text) => {
    let letters = text.split("");
    let create = document.createElement("div");
    create.className = `text-${countDiv}`;
    starter.appendChild(create);
    let findDiv = document.querySelector(`.text-${countDiv}`);
    letters.forEach(letter => {
      let rand = Math.floor(Math.random()*(15-10+1)+ 10);
      if(a !== undefined) {
        if (randTest === undefined) {
          randTest = rand;
        } else {
          randTest = randTest + a;
        }
      }
      a = rand;
      TypingEffect(findDiv,letter,randTest);
    });
  
    countDiv++;
  });
  perfb = performance.now();
  console.log(perfb - perf);
  

  setTimeout(() => {
    
    starter.textContent = "Hi Telenet, I heard that you're looking for interns. ";
  }, (randTest + 2000) );
  countDiv = 1;
}



function TypingEffect(a,b,c) {
  setTimeout(() => {
    a.textContent += b;
  }, c);
}
