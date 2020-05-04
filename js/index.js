//Плавный скролл

const hooks = document.querySelectorAll('a[href*="#"]');

for (let el of hooks) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = el.getAttribute('href').substr(1);
    console.log(e.preventDefault);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

if (window.matchMedia("(min-width: 1080px)").matches) {

//header
const nav = document.querySelector('header .wrapper');
const main = document.querySelector('main');
const whatWeDo = document.querySelector('.space');

const navOffset = nav.offsetTop;
const mainOffset = main.offsetTop;

const pixelLength = whatWeDo.offsetTop + whatWeDo.offsetHeight;

addEventListener('scroll', () => {
    if (window.pageYOffset >= navOffset) {
      nav.classList.add('navFixed');
      main.classList.add('mainFixed');
    } else
    {
      nav.classList.remove('navFixed');
      main.classList.remove('mainFixed');
    }

    if (window.pageYOffset+innerHeight >= whatWeDo.offsetHeight)
    {
      main.classList.add('offset');
      main.classList.remove('mainFixed');
    } else
    {
      main.classList.remove('offset');
    }
});


/* animationZone animation */

const animationZone = document.querySelector('.animationZone'),
      indicator = document.querySelector('.scrollIndicator .indicator'),
      circles = document.querySelectorAll('.circles span'),
      paragraphs = document.querySelectorAll('main .frame span');

// all animation
addEventListener('scroll', () => {
  if (window.pageYOffset+innerHeight <= whatWeDo.offsetHeight) {
    const stage = Math.floor(((pageYOffset - document.querySelector('main').offsetTop) / innerHeight)*10),
          backgroundStage = Math.floor(((pageYOffset - document.querySelector('main').offsetTop) / innerHeight)*100);

    //background
    animate(`background-${backgroundStage}`);

    //line indecator
    animate(`indicator-${stage}`);

    //active circle
    animate(`circle-${stage}`);

    //frame change
    animate(`text-${stage}`);
  }
  if (window.pageYOffset+innerHeight > whatWeDo.offsetHeight) {
    animate(`background-${allStages}`);
    animate(`indicator-${allStages}`);
    animate(`circle-${allStages}`);
    animate(`text-${allStages}`);
  }
});

const allStages = 78;
const length = Math.floor(allStages/3);

function animate(name) {
  const stageNumber = name.split('-')[1];
  const element = name.split('-')[0];

  switch(element) {
    case 'background':
      animationZone.style.left = stageNumber < 0 ? `${100}%` : stageNumber > 50 ? `${50}%` : `${100-stageNumber}%`;
      break;

    case 'indicator':
      indicator.style.height = `${stageNumber / ( allStages * 2 / 100 ) * 2}%`;
      break;

    case 'circle':
      (stageNumber <= length) ? circles[0].classList.add('circleActive') : circles[0].classList.remove('circleActive');
      (stageNumber <= allStages - length && stageNumber > length) ? circles[1].classList.add('circleActive') : circles[1].classList.remove('circleActive');
      (stageNumber > allStages - length) ? circles[2].classList.add('circleActive') : circles[2].classList.remove('circleActive');
      break;

    case 'text':
      (stageNumber > 3) ? paragraphs[0].classList.add('frameIn') : paragraphs[0].classList.remove('frameIn');

      if (stageNumber >= length) {
        paragraphs[0].classList.add('frameOut');
        paragraphs[1].classList.add('frameIn');
      } else {
        paragraphs[0].classList.remove('frameOut');
        paragraphs[1].classList.remove('frameIn');
      }

      if (stageNumber >= allStages - length) {
        paragraphs[1].classList.add('frameOut');
        paragraphs[2].classList.add('frameIn');
      } else {
        paragraphs[1].classList.remove('frameOut');
        paragraphs[2].classList.remove('frameIn');
      }
      break;
  }
}

// svg animation
const firstAnimSvgObj = document.querySelector('.firstAnimImage');
const secondAnimSvgObj = document.querySelector('.secondAnimImage');
const thirdAnimSvgObj = document.querySelector('.thirdAnimImage');


firstAnimSvgObj.addEventListener('load', () => {
    let stageTwo = (pageYOffset - document.querySelector('main').offsetTop) / innerHeight;

    const firstAnimSvgParts = {
      platform : firstAnimSvgObj.contentDocument.querySelector("#platform"),
      shadow : firstAnimSvgObj.contentDocument.querySelector("#platformShadow"),
      block1 : firstAnimSvgObj.contentDocument.querySelector("#block1"),
      block2 : firstAnimSvgObj.contentDocument.querySelector("#block2"),
      block3 : firstAnimSvgObj.contentDocument.querySelector("#block3"),
      basicStyles(stageTwo) {
          firstSvgPath(firstAnimSvgParts, stageTwo);
      }
    };
    const secondAnimSvgParts = {
      lines : secondAnimSvgObj.contentDocument.querySelector("#lines"),
      computer : secondAnimSvgObj.contentDocument.querySelector("#computer"),
      smallBlocks : secondAnimSvgObj.contentDocument.querySelector("#smallBlocks"),
      smallLights : secondAnimSvgObj.contentDocument.querySelectorAll("#smallLight"),
      bigBlock : secondAnimSvgObj.contentDocument.querySelector("#bigBlock"),
      planet : secondAnimSvgObj.contentDocument.querySelector("#planet"),
      lightAround:  secondAnimSvgObj.contentDocument.querySelector("#lightAround"),
      basicStyles(stageTwo) {
          secondSvgPath(secondAnimSvgParts, stageTwo);
      }
    };
    const thirdAnimSvgParts = {
      block: thirdAnimSvgObj.contentDocument.querySelector('#block'),
      platform:  thirdAnimSvgObj.contentDocument.querySelector('#platform'),
      shadow:  thirdAnimSvgObj.contentDocument.querySelector('#shadow'),
      wires:  thirdAnimSvgObj.contentDocument.querySelector('#wires'),
      basicStyles(stageTwo) {
        thirdSvgPath(thirdAnimSvgParts, stageTwo)
      }
    };

    window.onload = function() {
        if (window.pageYOffset+innerHeight > whatWeDo.offsetHeight) {
          firstAnimSvgParts.basicStyles(allStages);
          secondAnimSvgParts.basicStyles(allStages);
          thirdAnimSvgParts.basicStyles(allStages);
        } else {
          firstAnimSvgParts.basicStyles(stageTwo); //Применим начальное состояние к элементам, соответствующие проскроленному участку
          secondAnimSvgParts.basicStyles(stageTwo);
          thirdAnimSvgParts.basicStyles(stageTwo);
      }
    }


    addEventListener('scroll', () => {
      stageTwo = (pageYOffset - document.querySelector('main').offsetTop) / innerHeight;
      if (window.pageYOffset+innerHeight <= whatWeDo.offsetHeight) {
        firstSvgPath(firstAnimSvgParts, stageTwo);
        secondSvgPath(secondAnimSvgParts, stageTwo);
        thirdSvgPath(thirdAnimSvgParts, stageTwo);
      }
    });
});

function firstSvgPath({platform, shadow, block1, block2, block3}, stageTwo) {
    if (stageTwo <= 1) {
      platform.style.opacity = -0.5 + stageTwo;
      platform.style.transform = `scale(${stageTwo})`;
    }

    if (stageTwo <= 2) {
      shadow.style.transform = `translateY(${8 - stageTwo*4}rem)`;
      shadow.style.opacity = stageTwo - .5;
    }

    if (stageTwo > 2.5) {
      shadow.style.transform = `translateY(${stageTwo}rem)`;
      shadow.style.opacity = 3 - stageTwo;
    }

    if (stageTwo >= 1 && stageTwo <= 2) {
      platform.style.transform = `scale(1)`;

      block1.style.transform = `translateY(${-3 + stageTwo * 3 / 2}rem)`;
      block2.style.transform = `translateY(${-5 + stageTwo * 5 / 2}rem)`;
      block3.style.transform = `translateY(${-8 + stageTwo * 8 / 2}rem)`;

      block1.style.opacity = 1;
      block2.style.opacity = 1;
      block3.style.opacity = 1;
    }

    if (stageTwo < 1) {
      block1.style.transform = `translateY(-3rem)`;
      block2.style.transform = `translateY(-5rem)`;
      block3.style.transform = `translateY(-8rem)`;

      block1.style.opacity = 0;
      block2.style.opacity = 0;
      block3.style.opacity = 0;
    }

    if (stageTwo > 2.5) {
      platform.style.transform = `scale(${stageTwo - 1.5})`;
      block1.style.transform = `scale(${stageTwo - 1.5})`;
      block2.style.transform = `scale(${stageTwo - 1.5})`;
      block3.style.transform = `scale(${stageTwo - 1.5})`;

      platform.style.opacity = 3 - stageTwo;
      block1.style.opacity = 3.5 - stageTwo;
      block2.style.opacity = 3.5 - stageTwo;
      block3.style.opacity = 3.5 - stageTwo;
    }
}
function secondSvgPath({lines, computer, smallBlocks, smallLights: [light1, light2, light3] = [], bigBlock, planet, lightAround}, stageTwo) {
  if (stageTwo < 3) {
    lines.style.opacity = 0;
    computer.style.opacity = 0;
  }
  if (stageTwo >= 3) {
    lines.style.opacity = 1;
    computer.style.opacity = 1;
  }
  if (stageTwo >= 3.5 && stageTwo <= 4) {
    smallBlocks.style.opacity = 1;
    smallBlocks.style.transform = `translateY(${-4 + stageTwo}rem)`;
  }

  if (stageTwo < 3.5) {
    smallBlocks.style.opacity = 0;
    smallBlocks.style.transform = `translateY(-4rem)`;
  }

  if (stageTwo >= 4.3) light1.style.opacity = 1;
  else light1.style.opacity = 0;
  if (stageTwo >= 4.5) light2.style.opacity = 1;
  else light2.style.opacity = 0;
  if (stageTwo >= 4.7) light3.style.opacity = 1;
  else light3.style.opacity = 0;

  if (stageTwo >= 3.7 && stageTwo <= 4.2) {
    bigBlock.style.opacity = 1;
    bigBlock.style.transform = `translateY(${-4.2 + stageTwo}rem)`;
  }

  if (stageTwo >= 4.2) lightAround.style.opacity = 1;
  else lightAround.style.opacity = 0;

  if (stageTwo < 3.7) {
    bigBlock.style.opacity = 0;
    bigBlock.style.transform = `translateY(-4.2rem)`;
  }

  if (stageTwo >= 4.5) planet.style.opacity = 1;
  else planet.style.opacity = 0;

  if (stageTwo >= 5) {
    lines.style.transform = `scale(${stageTwo - 3.5})`;
    computer.style.transform = `scale(${stageTwo - 3.5})`;
    smallBlocks.style.transform = `scale(${stageTwo - 3.5})`;
    light1.style.transform = `scale(${stageTwo - 3.5})`;
    light2.style.transform = `scale(${stageTwo - 3.5})`;
    light3.style.transform = `scale(${stageTwo - 3.5})`;
    bigBlock.style.transform = `scale(${stageTwo - 3.5})`;
    planet.style.transform = `scale(${stageTwo - 3.5})`;
    lightAround.style.transform = `scale(${stageTwo - 3.5})`;
  }

  if (stageTwo >= 4.5 && stageTwo < 5) {
    lines.style.transform = `scale(1)`;
    computer.style.transform = `scale(1)`;
    smallBlocks.style.transform = `scale(1)`;
    light1.style.transform = `scale(1)`;
    light2.style.transform = `scale(1)`;
    light3.style.transform = `scale(1)`;
    bigBlock.style.transform = `scale(1)`;
    planet.style.transform = `scale(1)`;
    lightAround.style.transform = `scale(1)`;
  }
}
function thirdSvgPath({block, platform, shadow, wires}, stageTwo) {
  if (stageTwo < 5) {
    block.style.transform = `translateY(-7rem)`;
    block.style.opacity = 0;
    platform.style.transform = `translateY(7rem)`;
    platform.style.opacity = 0;
  }

  if (stageTwo >= 5 && stageTwo <= 7) {
    block.style.transform = `translateY(${-7 + stageTwo}rem)`;
    block.style.opacity = -6 + stageTwo;
    platform.style.transform = `translateY(${7 - stageTwo}rem)`;
    platform.style.opacity = -6 + stageTwo;
  }

  if (stageTwo >= 7.1) {
    wires.style.opacity = 1;
    shadow.style.opacity = 1;
    block.style.opacity = 1;
    platform.style.transform = `translateY(0)`;
    block.style.transform = `translateY(0)`;
    platform.style.opacity = 1;
  }

  if (stageTwo < 7) {
    shadow.style.opacity = 0;
    wires.style.opacity = 0;
  }

}

// анимация 2 и 3 экрана

//анимация изображений
const screenEl = document.querySelector('section.whatWeDo');
let duration = 4;
let speed = .2;

const backgroundObj2 = document.querySelector('.background');
const backgroundObj3 = document.querySelector('.background3');
const backgroundObj4 = document.querySelector('.background4');

methodVisible(backgroundObj2, 26);
methodVisible(backgroundObj3, 18);
methodVisible(backgroundObj4, 8);



function methodVisible(obj, length) {
  obj.addEventListener('load', () => {
      addEventListener('scroll', () => {
        const elements = findElements(obj, length);

        if ((obj.offsetTop + obj.offsetHeight/4 < pageYOffset + innerHeight) && (obj.offsetTop + obj.offsetHeight / 1.3 > pageYOffset))
        {
          styleElements(elements, true);
        } else styleElements(elements, false);
      });
    });
  }

function findElements(obj, length) {
  let array = [];
  for (let i = 1; i <= length; i++)
  {
    array[i] = obj.contentDocument.querySelector(`.e${i}`);
  }
  return array;
}

function styleElements(array, visible) {
  let sum = 0;
  for (let i = 1; i < array.length; i++)
  {
    array[i].style.transition = `${speed}s ease .${sum+=i*duration}s`;
    array[i].style.opacity = visible ? 1 : 0;
  }
}

//Анимация текста на странице
const allText = document.querySelectorAll('.textAnim');

animText(allText);

function animText(text) {
  addEventListener('scroll', () => {
    for (let i = 0; i < text.length; i++)
    {
      if ((text[i].offsetTop < pageYOffset + innerHeight)) {
        text[i].classList.remove('unvisible');
      } else text[i].classList.add('unvisible');
    }
  });
}
// && (text[i].offsetTop + text[i].offsetHeight > pageYOffset) - для скролла вверх

//Анимация clients
const clients = document.querySelectorAll('.anim');
addEventListener('scroll', () => {
  if (clients[0].offsetTop + clients[0].offsetHeight/4 < pageYOffset + innerHeight) {
    for (let i = 0; i < clients.length; i++) {
      clients[i].style.opacity = 1;
      clients[i].style.transform = 'translate(0)';
    }
  } else {
    for (let i = 0; i < clients.length; i++) {
      clients[i].style.opacity = 0;
      clients[i].style.transform = 'translate(-3rem)';
    }
  }
});

} else {


const btnMenu = document.querySelector('.btn-menu');
const hooks = document.querySelector('.hooks');
const lines = document.querySelectorAll('.btn-menu hr');
const btns = document.querySelectorAll('.hooks a');

onClick(btnMenu);
onClick(btns[0]);
onClick(btns[1]);
onClick(btns[2]);
onClick(btns[3]);
onClick(btns[4]);

function onClick(obj) {
    obj.addEventListener('click', (e) => {
        hooks.classList.toggle('show');
        // e.stopPropagation();
        stopScroll();
        rotateLines(btnMenu);
    });
  }
}

function rotateLines(btnMenu) {
  btnMenu.classList.toggle('burgerRotate');
}
// console.log();
function stopScroll() {
  document.body.style.overflow = document.body.style.overflow === "" ? "hidden" : "";
}
