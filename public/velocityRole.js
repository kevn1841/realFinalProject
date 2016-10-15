function showHeader(){
	document.getElementById("roleHeader").style.visibility="visible";
	$('#roleHeader').velocity('transition.slideUpBigIn')
}
function Name(){
	document.getElementById("RName").style.visibility="visible";
	$('#RName').velocity('transition.bounceLeftIn')
}
function Location(){
	document.getElementById("RLocation").style.visibility="visible";
	$('#RLocation').velocity('transition.bounceRightIn')
}
function Bio(){
	document.getElementById("RDescription").style.visibility="visible";
	$('#RDescription').velocity('transition.bounceLeftIn')
}
function Phone(){
	document.getElementById("RPhone").style.visibility="visible";
	$('#RPhone').velocity('transition.bounceRightIn')
}
function Email(){
	document.getElementById("REmail").style.visibility="visible";
	$('#REmail').velocity('transition.bounceLeftIn')
}
function Submit(){
	document.getElementById("submit").style.visibility="visible";
	$('#submit').velocity('transition.bounceRightIn')
}
setTimeout(showHeader, 1000);
setTimeout(Name, 2000);
setTimeout(Location, 3000);
setTimeout(Bio, 4000);
setTimeout(Phone, 5000);
setTimeout(Email, 6000);
setTimeout(Submit, 7000);