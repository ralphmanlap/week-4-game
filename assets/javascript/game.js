$(document).ready(function() {

var randomNum = Math.round(Math.random() * 120)+19;


console.log(randomNum);

$("#randomNumber").html("Your number to get: " + randomNum);

gemNums =[];

for (i=0; i < 4; i++){
	gemNums[i] = Math.round(Math.random() * 12)+1;
	$("#gem + i").attr("value", gemNums[i]);
	console.log(#gem[i].value);

}

console.log(gemNums);



});

var total = 0;

$(".gems").on("click", function() {
	alert("clicked");
	total += this.value;
	console.log(total);

});





