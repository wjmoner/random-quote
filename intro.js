// javascript goes here

var init = function () { // you may also see this written as function init() { ...

	// your js code goes here
	var results = document.getElementById("results");
	var all = document.getElementById("allquotes");

	var r = document.createElement("div");
	r.className = "quoteBox";

	var randomSelection = Math.floor(randomQuotes.length*Math.random());
	console.log(randomSelection);

	var p = document.createTextNode("Random item index at " + randomSelection + ": " + randomQuotes[randomSelection].quote + " - " + 
		randomQuotes[randomSelection].author);
	r.appendChild(p);
	results.appendChild(r);


	for (i = 0; i < randomQuotes.length; i++) {

		var item = document.createTextNode(i + ": " + randomQuotes[i].quote + " - " + randomQuotes[i].author);
		var itemDiv = document.createElement("div");
		itemDiv.className = "quoteBox";
		itemDiv.appendChild(item);
		all.appendChild(itemDiv);

	}

};

init();