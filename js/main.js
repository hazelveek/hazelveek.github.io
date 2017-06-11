/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World Yayy!!';
function multiply(num1,num2){
	var result = num1 * num2;
	return result;
}
myHeading.onclick = function(){
	alert(multiply(2,5));
} */
var myImage = document.querySelector('img'),
	myButton = document.querySelector('button'),
	myHeading = document.querySelector('h1');
function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'JavaScript Rocks ' + myName;
}
localStorage.removeItem('name');
if(!localStorage.getItem('name')) {
  	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'JavaScript Rocks ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}

myImage.onclick = function(){
	imgSrc = myImage.getAttribute('src');
	if (imgSrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/icon2.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}