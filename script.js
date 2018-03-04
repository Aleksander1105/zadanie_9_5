var showButton = document.getElementsByClassName('button');

for (var i = 0; i <= showButton.length; i++) {
		
	showButton[0].innerText = 'The text inside button 1';
	alert(showButton[0].innerText);
	showButton[1].innerText = 'The text inside button 2';
	alert(showButton[1].innerText);
	showButton[2].innerText = 'The text inside button 3';
	alert(showButton[2].innerText);

	break
}