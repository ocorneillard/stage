const screen = document.querySelector('.screen'),
starter = document.querySelector('.starter'),
power = document.querySelector('.power'),
light = document.querySelector('.light'),

line = document.querySelector('.line'),
lineA = document.querySelector('.linea'),
lineB = document.querySelector('.lineb'),
lineC = document.querySelector('.linec'),
lineD = document.querySelector('.lined'),
lineE = document.querySelector('.linee'),

cText = document.querySelector('.ctext'),
rText = document.querySelector('.rtext'),
uText = document.querySelector('.utext'),
dText = document.querySelector('.dtext'),

sideBar = document.querySelector('.sidebar'),
arrow = document.querySelector('.fa-arrow-left'),
ul = document.querySelector('ul'),
backHome = document.querySelector(".backhome"),
linkedin = document.querySelector('.linkedin');

let sideBarOn = false;
let once = true;

class UICtrl {

  constructor () {

     this.textC = {
      screenBoot : [
        "import Dorian Collier from 'Charleroi';",
        "import TelenetInnovationCenter from 'Woluwe-Saint-Lambert';",
        "const TIC = new TelenetInnovationCenter();",
        "const post = [{savior : 'Adrian.zochowski@telenetgroup.be', subject : 'Internship '}];",
        "function createInternshipDemand(post) {",
        "return new Promise((resolve,reject) => {",
        "TIC.push(post);",
        "const error = false;",
        "if (!error) {",
        "resolve();",
        "} else {",
        "reject('#hopenot');",
        "}",
        "createInternshipDemand(post)",
        ".then(getResponseFromTIC)",
        ".catch(function(err) {",
        "const improve = `work harder on ${err}`;",
        "});",
        "confirm('Hi Telenet Innovation Center, will you resolve my promise ?');"
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
        "Promise, nodeJS, React will have no secret for me once I'll finish my training at Becode.",
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
    const winHeight = window.innerHeight,
    docHeight = document.body.scrollHeight,
    scrollTop = window.pageYOffset,
    trackLength = docHeight - winHeight,
    pctScrolled = Math.floor(scrollTop/trackLength * 100);
    if (pctScrolled > pct) {
      return true;
    }
  }

  smoothScrollTo(endY, duration = 400) {
    const startY = window.pageYOffset,
    distanceY = endY - startY,
    startTime = new Date().getTime();

    const easeInOut = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) {
        return distance / 2 * time * time * time * time + from;
      } else {
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
      }
    }

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime,
      newY = easeInOut(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      scrollTo(0, newY);
    }, 1000/60);
  }
}

const uiCtrl = new UICtrl();

window.onload = () => {
  power.style.color = '#6EA674';
  screen.style.background = '#4F7A91';
  setTimeout(() => {
    screen.style.background = '#324D5C';
  }, 1250);

  uiCtrl.addTypingEffect(screen, uiCtrl.textC.screenBoot, 20, 10);
  const screenBtn = document.createElement('div');
  screenBtn.className = "screen--btn";
  screenBtn.innerHTML = "<i class='fas fa-arrow-right'></i>";
  screen.appendChild(screenBtn);
  uiCtrl.addTypingEffect(screenBtn, ['Continue'], 20, 10, 7000);
  const mouseOver = document.querySelector('.screen--btn-1');
  setTimeout((e) => {
    mouseOver.style.visibility = 'visible';
    mouseOver.style.cursor = 'pointer';
  }, 6500);
  screenArrow = document.querySelector('.fa-arrow-right');
  screenArrow.style.animation = '7s ease rotateLeft forwards';


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


  backHome.addEventListener('click', (e) => {

    if (sideBarOn === false) {
      sideBar.style.width = '100%';
      ul.style.textAlign = 'left';
      arrow.style.animation = '1s ease rotateRight forwards';
      sideBar.style.background = "rgba(255,255,255,0.95)";
      sideBarOn = true;
    } else {
      sideBar.style.width = '70px';
      arrow.style.animation = '1s ease rotateLeft forwards';
      sideBar.style.background = "rgba(255,255,255,0.3)";
      sideBarOn = false;
    }
    e.preventDefault();
  });
}

linkedin.addEventListener('click', (e) => {
  uiCtrl.smoothScrollTo(window.innerHeight + (window.innerHeight / 5), 1000);
  e.preventDefault();
});

