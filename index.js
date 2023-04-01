/****************************/
/**** Init and Cloud  ****/
/****************************/

const clouds = document.querySelectorAll(".hole")
const scoreBoard = document.querySelector(".score")
const heads = document.querySelectorAll(".head");


let lastCloud;

let timeUp = false; // le jeu n'est pas fini = false
let score = 0;


function randomTime (min, max){
    return Math.round(Math.random() * (max - min) + min ); 
}

function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random() * clouds.length);
    const cloudSelect = clouds[indexCloud];
    if (cloudSelect === lastCloud){
        return randomCloud(clouds) // la recursion
    }
    lastCloud = cloudSelect;

    return cloudSelect;
}

function showHead() {
    const time = randomTime(600, 1000); // time en milliseconde
    const cloud = randomCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
        if (!timeUp) showHead()
        
        cloud.classList.remove("up")
    }, time);
}




/****************************/
/**** Score ****/
/****************************/

function playerScore(event){
    console.log("event>>>>", event)
    if (!event.isTrusted) {
        return;
        }

    score++;
    // this = head
    this.classList.remove("up")
    console.log("score>>>>", score)
    scoreBoard.textContent = score
}

// j'appel juste la fonction playerScore et je ne l'excute pas 
// il sera excuté juste au clic grace a l'event
heads.forEach(head => head.addEventListener("click", playerScore)); 






/****************************/
/**** Start Game ****/
/****************************/



function startGame () {
    scoreBoard.textContent = 0;
    let score = 0;
    timeUp = false;
    showHead()
    setTimeout(()=> {
        timeUp= true // le jeu s'arrete

        setTimeout(()=> {
            // je créer un délai de deux seconde pour que l'user voit son score avant d'ecrire END
            scoreBoard.textContent = "End"
            }, 3000) // au bout de 3seconde

    }, 10000) // time en milliseconde (10seconde)
}





/****************************/
/**** Level Game ****/
/****************************/

const speed = 50;

let i=0;
let easy = "EASY"

let j=0;
let medium = "MEDIUM"

let k=0;
let expert = "EXPERT"

function easyLevel(){
    if(i< easy.length) {
        document.getElementById("demo1").textContent += easy.charAt(i);
        i++

        setTimeout(easyLevel, speed)
    }
};
console.log("easyLevel>>>>>>", easyLevel)


function mediumLevel(){
    if(j<medium.length) {
        document.getElementById("demo2").textContent += medium.charAt(j);
        j++

        setTimeout(mediumLevel, speed)
    }
};

function expertlevel(){
    if(k<easy.length) {
        document.getElementById("demo3").textContent += expert.charAt(k);
        k++

        setTimeout(expertlevel, speed)
    }
};


const morty = document.getElementById('morty-play')

morty.addEventListener("click", function(){
    easyLevel();
    mediumLevel();
    expertlevel();
})

