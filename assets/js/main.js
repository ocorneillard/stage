let perf = performance.now();
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
sideBarContent = document.querySelector('.sidebar--content'),
arrow = document.querySelector('.fa-arrow-left'),
ul = document.querySelector('ul'),
backHome = document.querySelector(".backhome"),
linkedin = document.querySelector('.linkedin'),

btnWhy = document.querySelector('.why'),
btnWik = document.querySelector('.wik');

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
      sideBar.style.background = "#e2e1e0";
      sideBarContent.style.animation = "1s opacityOn ease forwards";
      sideBarContent.style.visibility = "visible";
      sideBarOn = true;
    } else {
      sideBar.style.width = '70px';
      arrow.style.animation = '1s ease rotateLeft forwards';
      sideBar.style.background = "rgba(255,255,255,1)";
      sideBarContent.style.animation = "0.29s opacityOff ease forwards";
      sideBarContent.style.visibility = "hidden";
      sideBarOn = false;
    }
    e.preventDefault();
  });

  mouseOver.addEventListener('click', (e) => {
    let screenNumber = 1;
    for (i = 1; i <= 19; i++) {
      document.querySelector(`.screen-${i}`).remove();
    }
    document.querySelector('.screen--btn').remove();
    setTimeout(() => {
      document.querySelector('.home').removeAttribute('hidden');
      document.querySelector('.home--title').style.animation = '1s fadeInRight forwards';
      document.querySelector('.home--pres').style.animation = '2s fadeInLeft forwards';
      document.querySelector('.home--teamwork').style.animation = '3s fadeInRight forwards';
      document.querySelector('.why').style.animation = '3s btnAnim forwards';
    }, 250);
  });


  btnWhy.addEventListener('click', (e) => {
    uiCtrl.smoothScrollTo(window.innerHeight + (window.innerHeight / 5), 1000);
    e.preventDefault();
  });

  btnWik.addEventListener('click', (e) => {
    uiCtrl.smoothScrollTo((window.innerHeight * 2.05) + (window.innerHeight / 5), 1000);
    e.preventDefault();
  });
}

let perfb = (performance.now() - perf) / 1000;
console.log("#############");
console.log(`perf.now : ${perfb} seconds`);
console.log("Improving performance is really important for me,");
console.log("because everybody should have access to Internet, it gives to people an opportunity to emancipate themselves from inequality.");
console.log("Moreover, it's important in IoT, since you have limited ressources.");
console.log("#############");
console.log('My goals for the next 2 months :');
console.log('-Design pattern in Js, read Eloquent Javascript');
console.log('-Being able to code from scratch a CRUD system with promises, async await,...');
console.log('-NPM / SASS : correctly use the package.json and being efficient with node_modules');
console.log('-Learn MongoDB for a project called Dorothy');
console.log('-C++, being able to do OOP and understand how works pointer');
console.log('-Being able to code in NodeJs as I code in PHP, understand how MVC could be used in node');
console.log('-Keep learning !');
console.log("#############");
console.log('If you have any idea on what skills I should improve, don\'t hesitate to contact me !');