var randomNum = Math.round(Math.random() * 120)+19;

var gemNums =[];




$(document).ready(function() {

console.log(randomNum);

$("#randomNumber").html("Your number to get: " + randomNum);

for (i=0; i < 4; i++){
	gemNums[i] = Math.round(Math.random() * 12)+1;
	$("#gem" + i).attr("value", gemNums[i]);

}

//$(document).on("click", ".gems", function() {
$(".gems").on("click", function() {
	var total = 0;

	total += this.value;

	// total += $(this).attr("value");
	console.log(this.value);

	$("#score").html(total);

	if (total > window.randomNum){
	losses++;
	alert("you lose! try again!");
	$("#losses").html("Losses: " + losses);
}
	if (total === randomNum){
	wins++;
	alert("you win!");
	("#wins").html("Wins: " + wins);
}

});

});










