document.addEventListener('DOMContentLoaded', function () {
	getPrompt()
});

var newPrompt =""

function getPrompt(dailyPrompt) {
    console.log("Function Working")
    newPrompt = dailyPrompt[Math.floor(Math.random() * dailyPrompt.length)];
}


/** 
 * function getPrompt(dailyPrompt) {
	newPrompt = words[Math.floor(Math.random() * words.length)];
	openGameScreen();
	setRandomWord();
	checkGuess();
}
**/