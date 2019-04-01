console.log("Tomagatchi Game AF");

//SETTING THE CLASS
class Tomagatchi {
	constructor (name, breed) {
		this.name = name;
		this.breed = breed;
		this.hunger = 0;
		this.age = 0;
		this.boredom = 0;
		this.sleepiness = 0;
	}
}

const florence = new Tomagatchi ("Florence", "Polish chicken");

// const name = florence.name;
// const breed = florence.breed;

// let florence.hunger = 0;
// let florence.age = 0;
// let florence.boredom = 0;
// let florence.sleepiness = 0;

//BUTTONS
$('.feed').on('click', () => {
	florence.hunger--;
	$('.hunger').text(`${florence.hunger--}`);
});

$('.sing').on('click', () => {
	florence.sleepiness--;
	$('.sleepiness').text(`${florence.sleepiness}`);
});

$('.play').on('click', () => {
	florence.boredom--;
	$('.boredom').text(`${florence.boredom--}`);
});


$('.playGame').on('click', () => {
    playGame();
});

$('.pause').on('click', () => {
    clearInterval(florence.timePassing);
});

let timePassing; 
let seconds = 0;
let minutes = 0;

let intervalRate = 1000;

//FUNCTIONS
const playGame = () => {
	timePassing = setInterval(secondsGoUp, intervalRate);
};


const secondsGoUp = () => {
	statAlert();
    seconds++;
    $('.timer').text(`${seconds}`);
    if(seconds % 60 === 0){
        minutes++;
        $('.minutes').text(minutes);
    }
    if(seconds % 7 === 0){
		florence.age++;
		$('.age').text(`${age}`);
	}
	if(seconds % 3 === 0){
		florence.hunger++;
		$('.hunger').text(`${hunger}`);
	}
	if(florence.hunger > 10 || florence.hunger < 0){
		gameOver();
		alert("You are a psychopath who doesn't deserve a pet. GAME OVER");
	}
	if(seconds % 5 === 0){
		florence.boredom++;
		$('.boredom').text(`${florence.boredom}`);
	}
	if(florence.boredom > 10 || florence.boredom < 0){
		gameOver();
		alert("You neglected Sister Florence! GAME OVER")
	}
	if(seconds % 4 === 0){
		florence.sleepiness++;
		$('.sleepiness').text(`${florence.sleepiness}`);
	}
	if(florence.sleepiness > 10 || florence.sleepiness < 0){
		gameOver();
		alert("No rest for the wicked! Or maybe the wicked allow no rest. GAME OVER");
	}
};

const statAlert = () => {
	hungerTracker();
	boredomTracker();
	sleepinessTracker();
};

const hungerTracker = () => {
	if(florence.hunger >=0 && florence.hunger < 3){
		$(`.hungerTracker`).css('color', 'green');
	} else if(florence.hunger > 3 && florence.hunger < 7){
		$('.hungerTracker').css('color', 'orange');
	} else if(florence.hunger > 7){
		$(`.hungerTracker`).css('color', 'red');
	}
};

const boredomTracker = () => {
	if(florence.boredom >=0 && florence.boredom < 3){
		$(`.boredomTracker`).css('color', 'green');
	} else if(florence.boredom > 3 && florence.boredom < 7){
		$('.boredomTracker').css('color', 'orange');
	} else if(florence.boredom > 7){
		$(`.boredomTracker`).css('color', 'red');
	}
};

const sleepinessTracker = () => {
	if(florence.sleepiness >=0 && florence.sleepiness < 3){
		$(`.sleepinessTracker`).css('color', 'green');
	} else if(florence.sleepiness > 3 && florence.sleepiness < 7){
		$('.sleepinessTracker').css('color', 'orange');
	} else if(florence.sleepiness > 7){
		$(`.sleepinessTracker`).css('color', 'red');
	}
};

const gameOver = () => {
	clearInterval(timePassing);
};


