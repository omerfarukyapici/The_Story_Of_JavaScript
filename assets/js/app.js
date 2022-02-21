//Character
const mainCharacter = document.createElement('img');
mainCharacter.src = '../assets/img/mainCharacter.svg';
mainCharacter.style.width = '8rem';
mainCharacter.style = 'border-bottom: 0.1rem solid black;';
mainCharacter.style.display = 'none;';


const src = document.querySelector('.root');
src.appendChild(mainCharacter);

//Targeting Character
let circle = document.querySelector('img');
circle.setAttribute('id', 'jsCharacter'); ``

let moveBy = 10;

//Start game 
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;


    //Section 1 
    sectionOne.style = 'display: none;';

    //Section 2 
    sectionTwo.style = 'display: none;';


});

//Moving Character 

let counter = 0;
window.addEventListener('keydown', (e) => {

    var myElement = document.querySelector('#jsCharacter');
    var mainCharacterPosition = getPosition(myElement);

    var screenİnformation = "The image is located at: " + "position x = " + mainCharacterPosition.x + " " + "position y =" + " " + mainCharacterPosition.y;

    if (e.key) {
        if (e.key === 'ArrowLeft') {
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            //console.log(screenİnformation);
        } else if (e.key === 'ArrowRight') {
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            //console.log(screenİnformation);
        } else if (e.key === 'ArrowUp') {
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            //console.log(screenİnformation);
        } else if (e.key === 'ArrowDown') {
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            //console.log(screenİnformation);
        }
    }

    if (mainCharacterPosition.x == 0 || mainCharacterPosition.x < 0) {
        //alert('element en sola yaslandı');
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
    } else if (mainCharacterPosition.y == 0 || mainCharacterPosition.y < 0) {
        //alert('element en üste yaslandı');
        circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
    } else if (mainCharacterPosition.x == 1450 || mainCharacterPosition.x > 1450) {
        //alert('element en sağa yaslandı');
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
    } else if (mainCharacterPosition.y == 770 || mainCharacterPosition.y > 770) {
        //alert('element en alta yaslandı');
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
    }

    //Master and Character - get mission

    function getMission() {
        var master = document.querySelector('.talk-to-master');

        //Get Master position 
        var masterPosition = getPosition(master);

        if (mainCharacterPosition.x == masterPosition.x && mainCharacterPosition.y == masterPosition.y) {
            console.log("same spot");
            showMessage();
        }
    }
    getMission();

    //Kill bugs when master and bugs positions same

    var bugs = [
        document.querySelector('.bug-1'), 
        document.querySelector('.bug-2'), 
        document.querySelector('.bug-3'), 
        document.querySelector('.bug-4'), 
        document.querySelector('.bug-5'), 
        document.querySelector('.bug-6'), 
        document.querySelector('.bug-7') 
    ];

    /*
    Bugs coordinate

    bug-1 = x 420  y 670
    bug-2 = x 1190 y 30
    bug-3 = x 1350 y 620
    bug-4 = x 740 y 140
    bug-5 = x 270 y 440
    bug-6 = x 940 y 580
    bug-7 = x 30 y 40
    */

    if (mainCharacterPosition.x == 420 && mainCharacterPosition.y == 670) {
        bugs[0].style.display = "none";
        counter++;
    }else if (mainCharacterPosition.x == 1190 && mainCharacterPosition.y == 30) {
        bugs[1].style.display = "none";
        counter++;
    }else if (mainCharacterPosition.x == 1350 && mainCharacterPosition.y == 620) {
        bugs[2].style.display = "none";
        counter++;
    }else if (mainCharacterPosition.x == 740 && mainCharacterPosition.y == 140) {
        bugs[3].style.display = "none";
        counter++;
    }else if (mainCharacterPosition.x == 270 && mainCharacterPosition.y == 440) {
        bugs[4].style.display = "none";
        counter++;
    }else if (mainCharacterPosition.x == 940 && mainCharacterPosition.y == 580) {
        bugs[5].style.display = "none";
        counter++;
    }else if (mainCharacterPosition.x == 30 && mainCharacterPosition.y == 40) {
        bugs[6].style.display = "none";
        counter++;
    }


    console.log(counter);

    if (counter == 7) {
        counter = 0;
        sectionThree.style.display = "none";

        //Oyunu bitirme ekranı gelecek BURADA KALINDI 
        mainCharacter.style.display = "none";

        let lastSection = document.querySelector('.last-section');
        lastSection.style.display = "block";

    }

});


//Targeting Window X and Y location with mousemove
window.addEventListener('mousemove', (event) => {
    //console.log(event)
})

// Trying to understanding what is going on .
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            //deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            //for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };

}

//deal with the page getting resized or scrolled
window.addEventListener('scroll', updatePosition, false);
window.addEventListener('resize', updatePosition, false);

function updatePosition() {
    console.log("sayfayı ya kaydırdın yada responsivini kontrol ettin")
}


//Start Game 
let startButon = document.querySelector('.start-game');
startButon.addEventListener('click', startGame);

function startGame() {
    //Section ilk i kaldır 
    let startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';
    sectionOne.style.display = 'block';


    //Section 1 start
    javaScriptAnimation();

    //Skip section 1
    setTimeout(() => {
        skipSection1();

        //Karakteri ekrana getir
        mainCharacter.style.display = 'block';

        //Start Section 2 
        sectionTwo.style.display = 'block';

        //Show hint 
        sectionOneHint();


    }, 16000);

}

//Skip section 1 
let sectionOne = document.querySelector('.section-1');

function skipSection1() {
    sectionOne.style = 'display: none;';
}


//JavaScript Animations

//Section 1

function javaScriptAnimation() {
    const t1 = gsap.timeline({
        defaults: {
            ease: Expo.InOut
        }
    });
    t1.fromTo('.jsOne', 2, {
        x: '-7rem',
        opacity: 0
    }, {
        x: 1,
        opacity: 1
    });
    t1.fromTo('.thinkOne', 2, {
        x: '-7rem',
        opacity: 0
    }, {
        x: 1,
        opacity: 1
    });
    t1.fromTo('.jsTwo', 2, {
        x: '7rem',
        opacity: 0
    }, {
        x: 1,
        opacity: 1
    });
    t1.fromTo('.thinkTwo', 2, {
        x: '7rem',
        opacity: 0
    }, {
        x: 1,
        opacity: 1
    });
}


//Section 2 
var sectionTwo = document.querySelector('.section-2');

//Section 3 
let sectionThree = document.querySelector('.section-3');


//Get message from Master 

function sectionOneHint(t1) {
    t1 = gsap.timeline({
        defaults: {
            ease: Expo.InOut
        }
    });
    t1.fromTo('.hint-1', 2, {
        y: '-1rem',
        opacity: 0
    }, {
        y: 5,
        opacity: 1,
    });
}


//Show message in element

//Talks variables
var talks = document.querySelector('.talks');
var talksTwo = document.querySelector('.talks-2');
talks.innerHTML = '';
talksTwo.innerHTML = '';



const [allTalks, butonOne, butonTwo] = [
    document.querySelector('.all-talks'),
    document.querySelector('.talks-button'),
    document.querySelector('.talks-2-button')
]
butonOne.style.display = "none";
butonTwo.style.display = "none";



function showMessage(forCharacter, forMaster) {

    forCharacter = [
        'Hello Master, I want to be human.',
        'Can you help me, what should I do ?'
    ];

    forMaster = [
        'Hi Child. There is only one way to do this. You have to kill some bugs.'
    ];

    butonOne.style.display = "block";
    butonTwo.style.display = "block";

    var a = talks.innerHTML = forCharacter[0];
    talksTwo.innerHTML = null;


    butonOne.addEventListener('click', () => {
        if (a) {
            talks.innerHTML = forCharacter[1];
        }
    });

    butonTwo.addEventListener('click', () => {
        talksTwo.innerHTML = forMaster[0];

        setTimeout(() => {

            sectionTwo.style.display = "none";
            sectionThree.style.display = "block";
            missionOneMessage();

        }, 4000);
    });

}


//Mission Message
function missionOneMessage(t1) {
    t1 = gsap.timeline({
        defaults: {
            ease: Expo.InOut
        }
    });
    t1.fromTo('.mission-1-message', 2, {
        y: '-1rem',
        opacity: 0
    }, {
        y: 5,
        opacity: 1,
    });
}

