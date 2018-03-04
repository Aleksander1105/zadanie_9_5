
var showButton = document.getElementsByClassName('button');

for (var i = 0; i <= showButton.length; i++) {
		
	showButton[i].innerText = 'The text inside button ' + (i+1);
	alert(showButton[i].innerText);

}