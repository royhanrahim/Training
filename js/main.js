// var firstName="Royhan Rahim";

// document.getElementById("oneN").innerHTML="Zahir"

var oneNumber = document.getElementById('oneNumber')
var twoNumber = document.getElementById('twoNumber')
var hasil = document.getElementById('hasil')

function tambah(){
	var firstOne = Number(oneNumber.value);
	var firstTwo = Number(twoNumber.value);
	var hasil = firstOne + firstTwo;	
	document.getElementById('hasil').innerHTML=hasil;
}
function kurang(){
	var firstOne = Number(oneNumber.value);
	var firstTwo = Number(twoNumber.value);
	var hasil = firstOne - firstTwo;
	document.getElementById('hasil').innerHTML=hasil;
}

function kali(numberOne, numberTwo){
	var firstOne = Number(oneNumber.value);
	var firstTwo = Number(twoNumber.value);
	var hasil = firstOne * firstTwo;
	document.getElementById('hasil').innerHTML=hasil;
}

function bagi(numberOne, numberTwo){
	var firstOne = Number(oneNumber.value);
	var firstTwo = Number(twoNumber.value);
	var hasil = firstOne / firstTwo;
	document.getElementById('hasil').innerHTML=hasil;
}