function showHeader(){
	document.getElementById("formHeader").style.visibility="visible";
	$('#formHeader').velocity('transition.slideUpBigIn')
}
function Name(){
	document.getElementById("name").style.visibility="visible";
	$('#name').velocity('transition.bounceLeftIn')
}
function Location(){
	document.getElementById("location").style.visibility="visible";
	$('#location').velocity('transition.bounceRightIn')
}
function Bio(){
	document.getElementById("bio").style.visibility="visible";
	$('#bio').velocity('transition.bounceLeftIn')
}
function Phone(){
	document.getElementById("phone").style.visibility="visible";
	$('#phone').velocity('transition.bounceRightIn')
}
function Img(){
	document.getElementById("img").style.visibility="visible";
	$('#img').velocity('transition.bounceLeftIn')
}
function Vid(){
	document.getElementById("vid").style.visibility="visible";
	$('#vid').velocity('transition.bounceRightIn')
}
function Submit(){
	document.getElementById("submit").style.visibility="visible";
	$('#submit').velocity('transition.bounceLeftIn')
}

setTimeout(showHeader, 1000);
setTimeout(Name, 4000);
setTimeout(Location, 5500);
setTimeout(Bio, 7000);
setTimeout(Phone, 8500);
setTimeout(Img, 10000);
setTimeout(Vid, 11500);
setTimeout(Submit, 13000);


