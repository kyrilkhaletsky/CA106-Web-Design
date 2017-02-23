 function liveScores() {
		var team1 = ["Fnatic", "ENVYUS"];
		var number = Math.floor(Math.random() * team1.length);
		var number2 = Math.floor(Math.random() * team1.length);
		var team2 = ["Virtus Pro", "Ninjas in Pyjamas"];
		var score = Math.floor(Math.random() * 15);
		var score2 = Math.floor(Math.random() * 15);
		document.getElementById("title").innerHTML = team1[number]+ " " + "vs" + " " + team2[number2];
		document.getElementById("the_scores").innerHTML = score + " " + "-" + " " + score2;
		document.getElementById("scoreDisplay").style.display = block;
}
//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random2
//http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array