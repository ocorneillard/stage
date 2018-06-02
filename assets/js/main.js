

class UICtrl {

  constructor () {

     this.UISelectors = {

      buttonOn : '.power',
      color : '.screen',
      txt : '.starter',
      cable : '.cable',

      screenBoot : [
        "import Dorian Collier from 'Charleroi';",
        "import TelenetInnovationCenter from 'Woluwe-Saint-Lambert';",
        "post ('Adrian.zochowski@telenetgroup.be','Hire me!') {",
        "return new Promise((resolve,reject)) => {",
        "fetch(url, ..."
      ],      
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
    console.log(pctScrolled);
    if (pctScrolled > pct) {
      return true;
    }
  }
}

const screen = new UICtrl();


screen.addTypingEffect(document.querySelector(screen.UISelectors.txt), screen.UISelectors.screenBoot, 50, 30);

let test = true;

window.addEventListener("scroll", function(){
    if (screen.amountScrolled(70) === true && test === true) {
      console.log('bonjour');
      test = false;
  }
}, false);


const backHome = document.querySelector(".backhome");
backHome.addEventListener('click', (e) => {
  backHome.classList = 'hi';
  console.log(backHome);
  e.preventDefault();
});
