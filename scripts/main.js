// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/south_africa_logo.png') {
      myImage.setAttribute ('src','images/ga_state_logo.png');
	} else {
	  myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

