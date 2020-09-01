

const myText = document.querySelector("h1");
myText.textContent="Hello world....!"
var carName = "Ford";
document.getElementById("car").innerHTML = carName;	

let bike = "sports";
/*document.querySelector("button").onclick=function(){
	alert("yes your entering into the js file now");
	setUserName()

}

*/
function setUserName(){
	let myName = prompt("Enter your name: ");
	if(!myName){
		setUserName()
	}
	else{

	localStorage.setItem('name',myName);
	myText.textContent = "Mozilla is cool "+myName;

}
}

let myImage = document.querySelector('img');
myImage.onclick=function(){
	let mySrc = myImage.getAttributes('src');
	prompt("welcome to image change");
	if(mySrc==='images/Mozilla-firefox.jpg'){
		myImage.setAttributes('mySrc','images/Mozilla-firefox2.jpg');
	}
	else{
		myImage.setAttributes('mySrc','images/Mozilla-firefox');

	}
}