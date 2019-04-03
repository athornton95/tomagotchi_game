console.log("Tomagatchi Game AF");

//SETTING THE CLASS
class Tomagatchi {
	constructor (name) {
		this.name = name;
		this.hunger = 0;
		this.age = 0;
		this.boredom = 0;
		this.sleepiness = 0;
	}
}

const gucci = new Tomagatchi ("Gucci Mane");

//INITIAL VARIABLES &

let timePassing; 
let seconds = 0;
let minutes = 0;
let intervalRate = 1000;


//MAIN PAGE BUTTON ACTIONS
$('.playGame').on('click', () => {
	loadMainPage();
	playGame();

});

$('.youWon').on('click', () => {
	youWon();
})

$('.instructions').on('click', () => {
	$('body').empty();
	$('body').append('<div class="exitDiv"></div>');
	$('.exitDiv').append('<button class="exit">X</button>');
	$('body').append('<div class="instructionsDiv"></div>');
	$('.instructionsDiv').append('<h1>INSTRUCTIONS</h1>');
	$('.instructionsDiv').append('<p><span class = "objective">OBJECTIVE</span></p>');
	$('.instructionsDiv').append('<p class = "instructionText">THE GUCCI GANG IS GOING ON TOUR!</p>');
	$('.instructionsDiv').append('<p class = "instructionText">LUCKY FOR YOU, YOU HAVE BEEN CHOSEN THROUGH A RANDOM INSTAGRAM CONTEST</p>');
	$('.instructionsDiv').append('<p class = "instructionText">TO TAKE CARE OF THEIR PET SNAKE WHILE THEY ARE GONE.THE BEST NEWS IS THAT IF YOU</p>');
	$('.instructionsDiv').append('<p class = "instructionText">CAN SUCCESSFULLY KEEP THEIR SNAKE, LIL KILLA, ALIVE, YOU GET TO JOIN THE GUCCI GANG. </p>');
	$('.instructionsDiv').append('<br>');
	$('.instructionsDiv').append('<p class = "instructionText">THERE IS NO GREATER CALL IN THIS LIFE.</p>');
	$('.instructionsDiv').append('<p><span class = "objective">HOW?</span></p>');
	$('.instructionsDiv').append('<p class = "instructionText">WHEN YOU CLICK THE PLAY GAME BUTTON ON THE HOME SCREEN, A TIMER WILL START, AND</p>');
	$('.instructionsDiv').append('<p class = "instructionText">THE TOUR WILL BEGIN.</p>');
	$('.instructionsDiv').append('<p class = "instructionText">AS TIME TICKS ON, LIL KILLA IS GOING TO GET HUNGRY, TIRED, AND BORED. CAN YOU</p>');
	$('.instructionsDiv').append('<p class = "instructionText">BLAME HIM? HE IS A SNAKE CONFINED TO A 100 GALLON TANK! LUCKY FOR HIM, HE HAS YOU!</p>');
	$('.instructionsDiv').append('<p class = "instructionText">WANNA BE AN OFFICIAL MEMBER OF THE GUCCI GANG? WELL, THEN IT IS YOUR DUTY TO MEET </p>');
	$('.instructionsDiv').append('<p class = "instructionText">HIS EVERY NEED. FEED HIM, PLAY WITH HIM, AND MAKE SURE HE SLEEPS THROUGHOUT THE</p>');
	$('.instructionsDiv').append('<p class = "instructionText">DURATION OF THE TOUR: 20 CONCERTS.</p>');
	$('.instructionsDiv').append('<p class = "instructionText">HOWEVER, IF YOU PLAY WITH HIM TOO MUCH, LET HIM SLEEP TOO LONG, OR OVER FEED HIM, </p>');
	$('.instructionsDiv').append('<p class = "instructionText">HE WILL DIE.  CLICK THE BUTTONS ON THE BOTTOM OF THE PAGE TO KEEP HIS HUNGER, </p>');
	$('.instructionsDiv').append('<p class = "instructionText">SLEEPINESS, AND BOREDOM BETWEEN 0 - 3, ANYTHING OVER OR UNDER WILL KILL HIM. </p>');
	$('.instructionsDiv').append('<br>');
	$('.instructionsDiv').append('<p class = "instructionText">BUT BE CAREFUL, DO NOT GET TOO COMFORTABLE...HE IS A LIL KILLA AFTER ALL. </p>');
	$('.instructionsDiv').append('<p class = "instructionText">CLICK ANYWHERE OUTSIDE THE BUTTONS AND HE WILL KILL YOU. </p>');
	$('.instructionsDiv').append('<p class = "instructionFinal">DO YOU HAVE WHAT IT TAKES?</p>');

	$('.exit').on('click', () => {
	console.log('this works');
	render();
});

});


//MAIN FUNCTIONS
const render = () => {
	document.location.reload(true);
};

const playGame = () => {
	console.log("play game");
	timePassing = setInterval(secondsGoUp, intervalRate);
};

const loadMainPage = () => {
	$('body').empty();
	$('.instructions').remove();
	// $('body').css({background : 'url(images/stage.png) no-repeat fixed'});
	$('body').append('<div class="exitDiv"></div>');
	$('.exitDiv').append('<button class="exit">X</button>')
	$('body').append('<div class="fullPage"></div>');
		$('.fullPage').append('<div class="stats"></stats');
			$('.stats').append(`<p class="ageTracker">Concerts Played: <span class="age">0</span></p>`);
			$('.stats').append(`<p class="hungerTracker">Hunger: <span class="hunger">0</span></p>`);
			$('.stats').append(`<p class="boredomTracker">Boredom: <span class="boredom">0</span></p>`);
			$('.stats').append(`<p class="sleepinessTracker">Sleepiness: <span class="sleepiness">0</span></p>`);
	$('body').append('<div class = "snakeDiv"></div>');
	$('.snakeDiv').append('<img id="snake" src="images/snakeGIF.gif">');
	
	$('#snake').animate({
		left : '200px',
		top : '200px'
	}, 3000);

	$('.playGame').remove();
	    $('body').append('<div class="playButtons"></div>');
	    	$('.playButtons').append('<button class="feed">Feed ya Boiii</button>');
	    	$('.playButtons').append('<button class="play">Play wit Lil Killa</button>');
	    	$('.playButtons').append('<button class="sing">Sing Killa a Lullabaiiii</button>');
	 	// $('.fullPage').append('<p>Time: <span class = "minutes">0</span> Minutes, <span class = "timer">0</span> Seconds</p>');

//GAME PAGE BUTTON ACTIONS
$('.exit').on('click', () => {
	console.log('this works');
	render();
});

$('.feed').on('click', () => {
	console.log('food');
	gucci.hunger--;
	$('.hunger').text(`${gucci.hunger}`);
	let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://cardibsounds.coolaccidents.com/audio/tyvm.mp3');
    audioElement.play();
});

$('.sing').on('click', () => {
	gucci.sleepiness--;
	$('.sleepiness').text(`${gucci.sleepiness}`);
	let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://cardibsounds.coolaccidents.com/audio/mew.mp3');
    audioElement.play();
});

$('.play').on('click', () => {
	gucci.boredom--;
	$('.boredom').text(`${gucci.boredom}`);
	let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://cardibsounds.coolaccidents.com/audio/okuuurt.mp3');
    audioElement.play();
});

$('.playButtons').on('click', (e) => {
	console.log(e.target);
	if(e.target.className !== "sing" && e.target.className !== "play" && e.target.className !== "feed"){
		// $('.snakeDiv').empty();
		// clearInterval(timePassing);
		// $('.snakeDiv').append('<img')
		let audioElement = document.createElement('audio');
   		audioElement.setAttribute('src', 'music/snakehiss2.mp3');
    	audioElement.play();
		clearInterval(timePassing);
		$('body').empty();
		$('body').append('<div class="exitDiv"></div>');
		$('.exitDiv').append('<button class="exit">X</button>')
		$('.exit').on('click', () => {
			console.log('this works');
			render();
			});
		// $('body').append('<div class="youDiedTwo"></div>');
		// $('.youDiedTwo').append('<h1 id="gameOver">LIL KILLA WAS APTLY NAMED. YOU DEAD.</h1>')
		$('body').append('<div class="youDied"></div>');
		$('.youDied').append('<img id=killerSnake src="images/killerSnake.png">');
		$('#killerSnake').animate({
			height : "400pt"
			}, 1000);
		$('#killerSnake').animate({
			height : "200pt"
			}, 1000);
		$('body').append('<div class="youDiedTwo"></div>');
		$('.youDiedTwo').append('<h1 id="gameOver">LIL KILLA WAS APTLY NAMED. YOU DEAD.</h1>');
		// $('body').append('<div class="tryAgainTwo"></div>');
		// $('.tryAgainTwo').append('<button class="playAgainTwo">PLAY AGAIN</button>');
		// $('.playAgainTwo').animate({
		// 	opacity : "100%"
		// 	}, 3000);

	}
});

};



// const snakeMoves = () => {
// 	if(seconds % 5 === 0){
// 		$('#snake').animate({
// 			left: 400
// 		}, 5000);
// 	}
// }


const secondsGoUp = () => {
	statAlert();
    seconds++;
    if(seconds % 5 === 0){
    	intervalRate = intervalRate - 15;
    }
    console.log(intervalRate);
    $('.timer').text(`${seconds}`);
    if(seconds % 60 === 0){
        minutes++;
    $('.minutes').text(minutes);
        seconds = 0;
    }
    if(seconds % 7 === 0){
		gucci.age++;
		$('.age').text(`${gucci.age}`);
	}
	if(seconds % 2 === 0){
		gucci.hunger++;
		$('.hunger').text(`${gucci.hunger}`);
	}
	if(gucci.hunger > 3 || gucci.hunger < 0){
		gameOver();
		// $('.gameButtons').append(`<Button class="restart">Play Again?</button>`)
		// $('.restart').on('click', () => {
		// 	startOver();
		// })
	}
	if(seconds % 3 === 0){
		gucci.boredom++;
		$('.boredom').text(`${gucci.boredom}`);
	}
	if(gucci.boredom > 3 || gucci.boredom < 0){
		gameOver();
	}
	if(seconds % 4 === 0){
		gucci.sleepiness++;
		$('.sleepiness').text(`${gucci.sleepiness}`);
	}
	if(gucci.sleepiness > 3 || gucci.sleepiness < 0){
		gameOver();
	}
	// if((seconds >= 50) && (seconds <= 75)){
	// 	intervalRate = 500;
	// } else if(seconds > 75){
	// 	intervalRate = 250;
	// }
	if(gucci.age >= 20){
		youWon();
	}
};

const youWon = () => {
	let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'music/GucciGangClip.mp3');
    audioElement.play();
	console.log('you won');
	$('body').empty();
	$('body').append('<div class="exitDiv"></div>');
	$('.exitDiv').append('<button class="exit">X</button>');
	$('.exit').on('click', () => {
	console.log('this works');
	render();
	});
	$('body').append('<div class = "winPage"></div>');
	$('.winPage').append('<img src="images/congrats.png">');
	$('body').append('<div class="retry"></div>');
	$('.retry').append('<button class ="playAgain">PLAY AGAIN</button>');
	$('.playAgain').on('click', () => {
	render();
});
};



const statAlert = () => {
	hungerTracker();
	boredomTracker();
	sleepinessTracker();
};

const hungerTracker = () => {
	if(gucci.hunger >=0 && gucci.hunger <= 1){
		$(`.hungerTracker`).css('color', '#0A6A56');
	} else if(gucci.hunger > 1 && gucci.hunger <= 2){
		$('.hungerTracker').css('color', '#BD9302');
	} else if(gucci.hunger > 2){
		$(`.hungerTracker`).css('color', '#A82B11');
	}
};

const boredomTracker = () => {
	if(gucci.boredom >=0 && gucci.boredom <= 1){
		$(`.boredomTracker`).css('color', '#0A6A56');
	} else if(gucci.boredom > 1 && gucci.boredom <= 2){
		$('.boredomTracker').css('color', '#BD9302');
	} else if(gucci.boredom > 2){
		$(`.boredomTracker`).css('color', '#A82B11');
	}
};

const sleepinessTracker = () => {
	if(gucci.sleepiness >=0 && gucci.sleepiness <= 1){
		$(`.sleepinessTracker`).css('color', '#0A6A56');
	} else if(gucci.sleepiness > 1 && gucci.sleepiness <= 2){
		$('.sleepinessTracker').css('color', '#BD9302');
	} else if(gucci.sleepiness > 3){
		$(`.sleepinessTracker`).css('color', '#A82B11');
	}
};

const gameOver = () => {
	clearInterval(timePassing);
	$('body').empty();
	$('body').append('<div class="exitDiv"></div>');
	$('.exitDiv').append('<button class="exit">X</button>');
	$('.exit').on('click', () => {
		console.log('this works');
		render();
	});
	$('body').append('<div class="endPage"></div>');
	// $('.endPage').append('<h1 class = "gameOverOne">YOU KILLED LIL KILLA!</h1>')
	$('.endPage').append('<img class="stone" src="images/stone.png">');
	// $('.endPage').append('<h2 class = "gameOverTwo">GAME OVER</h2>')
	$('body').append('<div class="retry"></div>')
	$('.retry').append('<button class ="playAgain">TRY AGAIN</button>')
	let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://cardibsounds.coolaccidents.com/audio/suck.mp3');
    audioElement.play();

$('.playAgain').on('click', () => {
	render();
})

};


// const playAgain = () => {
// 	loadMainPage();
// 	playGame();
// }



// const startOver = () => {
// 	florence.hunger = 0;
// 	florence.age = 0;
// 	florence.boredom = 0;
// 	florence.sleepiness = 0;
// 	seconds = 0;
// 	minutes = 0;
// }





// $('.pause').on('click', () => {
// 	console.log('this works');
//     clearInterval(timePassing);
//     $('.pause').text("Keep Playing");
//     if(snackBreak === false){
//     	snackBreak = true;
//     } else {
//     	playGame();
//     	$('.pause').text("Snack Break");
//     	snackBreak = false;
//     }
// });


