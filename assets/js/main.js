const screen = document.querySelector('.screen');
const starter = document.querySelector('.starter');
const power = document.querySelector('.power');
const light = document.querySelector('.light');

const line = document.querySelector('.line');
const lineA = document.querySelector('.linea');
const lineB = document.querySelector('.lineb');
const lineC = document.querySelector('.linec');
const lineD = document.querySelector('.lined');
const lineE = document.querySelector('.linee');

const cText = document.querySelector('.ctext');
const rText = document.querySelector('.rtext');
const uText = document.querySelector('.utext');
const dText = document.querySelector('.dtext');

const sideBar = document.querySelector('.sidebar');
const arrow = document.querySelector('.fa-arrow-left');
const ul = document.querySelector('ul');

let sideBarOn = false;
let once = true;


class UICtrl {

  constructor () {

     this.textC = {
      screenBoot : [
        "import Dorian Collier from 'Charleroi';",
        "import TelenetInnovationCenter from 'Woluwe-Saint-Lambert';",
        "post ('Adrian.zochowski@telenetgroup.be','Hire me!') {",
        "return new Promise((resolve,reject)) => {",
        "fetch(url, ..."
      ],
      
      create : [
        "Learning C, C++ will make me a better Developer overall.",
        "Python is the next step I'm looking for.",
      ],

      update : [
        "IOT and IOTA fascinate me!"
      ],

      read : [
        "I'd like to improve my knowledge of Javascript.",
        "Promises, nodeJS, React will have no secret for me once I'll finish my training at Becode.",
      ],

      delete : [
        'Learning as much as I can,',
        "make my code cleaner than ever!"
      ] 
    };
  }

  addTypingEffect(element, texts, speedMax, speedMin, randSum = undefined, del = false, delTime = 1.2) {

    let lastRand;
    let countDiv = 1;

    texts.forEach((text) => {
      let letters = text.split("");
      let addDiv = document.createElement('div');
      addDiv.className = `${element.className}-${countDiv}`;
      element.appendChild(addDiv);
      let elementSubDiv = document.querySelector(`.${element.className}-${countDiv}`);
      letters.forEach(letter => {
        let rand = Math.floor(Math.random()*(speedMax-speedMin,+1) + speedMin);

        if (lastRand !== undefined) {
          if (randSum === undefined) {
            randSum = rand;
          } else {
            randSum = randSum + lastRand;
          }
        }

        lastRand = rand;
        this.TimingSum(elementSubDiv, letter, randSum);
      });

      countDiv++;
    });

    if (del === true) {
      this.deleteContent(element, (delTime * randSum))
    }
  }

  deleteContent(element, timing) {
    setTimeout(() => {
      element.textContent = "";
    }, timing );
  }

  TimingSum(element, letter, TimingLetterSum) {
    setTimeout(() => {
      element.textContent += letter;
    }, TimingLetterSum);
  }

  amountScrolled(pct) {
    const winHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;
    const scrollTop = window.pageYOffset;
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.floor(scrollTop/trackLength * 100);
    if (pctScrolled > pct) {
      return true;
    }
  }
}

const uiCtrl = new UICtrl();

window.onload = () => {
  power.style.color = '#6EA674';
  screen.style.background = '#4F7A91';
  setTimeout(() => {
    screen.style.background = '#324D5C';
  }, 1250);

  uiCtrl.addTypingEffect(screen, uiCtrl.textC.screenBoot, 50, 30);


  window.addEventListener("scroll", function(){
    if (uiCtrl.amountScrolled(49) === true && once === true) {

      line.style.animation = "1s ease line forwards";
      uiCtrl.addTypingEffect(cText, uiCtrl.textC.create, 50, 30, 1000);
      setTimeout(() => {
        lineA.style.animation = "1s ease linea forwards";
      }, 4000);
      uiCtrl.addTypingEffect(rText, uiCtrl.textC.read, 50, 30, 4500);
      setTimeout(() => {
        lineB.style.animation = "1s ease lineb forwards";
      }, 8500);
      uiCtrl.addTypingEffect(uText, uiCtrl.textC.update, 50, 30, 9000);
      setTimeout(() => {
        lineC.style.animation = "1s ease linea forwards";
        lineE.style.animation = "1s ease lineb forwards";
      }, 10500);
      uiCtrl.addTypingEffect(dText, uiCtrl.textC.delete, 50, 30, 11000);
      setTimeout(() => {
        lineD.style.animation = "1s ease line forwards";
      }, 13000);
      once = false;
    }
  }, false);

  const backHome = document.querySelector(".backhome");
  backHome.addEventListener('click', (e) => {

    if (sideBarOn === false) {
      sideBar.style.width = '100%';
      ul.style.textAlign = 'left';
      arrow.style.transform = 'rotate(180deg)';
      sideBar.style.background = "rgba(255,255,255,0.95)";
      sideBarOn = true;
    } else {
      sideBar.style.width = '70px';
      arrow.style.transform = 'rotate(0deg)';
      sideBar.style.background = "rgba(255,255,255,0.3)";
      sideBarOn = false;
    }
    e.preventDefault();
  });
}