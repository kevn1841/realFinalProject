function showh1(){
	document.getElementById("h1").style.visibility="visible";
	document.getElementById('h1').innerHTML = "Welcome to Act Spark!";
	$('.header').velocity('transition.fadeIn')
}
function fadeOuth1(){
	$('.header').velocity('transition.fadeOut')
}
function showNewH1(){
	document.getElementById('h1').innerHTML = "Get Started By Clicking any of the Three Buttons Below.";
	$('.header').velocity('transition.fadeIn')
}
function showLeftBox(){
	document.getElementById("left-box").style.visibility="visible";
	$('.outer-box1').velocity('transition.flipBounceXIn');
}
function showMidBox(){
	document.getElementById("mid-box").style.visibility="visible";
	$('.outer-box2').velocity('transition.flipBounceXIn');
}
function showRightBox(){
	document.getElementById("right-box").style.visibility="visible";
	$('.outer-box3').velocity('transition.flipBounceXIn');
}
function newH1(){
	$('.header').velocity('transition.flipBounceYOut');
}
function newH12(){
	$('.header').velocity('transition.flipBounceYIn');
	document.getElementById('h1').innerHTML = "ActSpark reveals the most talented Actors/Actresses. Have fun searching for hidden talent!";
}
setTimeout(showh1, 1000);
setTimeout(fadeOuth1, 3000);
setTimeout(showNewH1, 4500);
setTimeout(showLeftBox, 6000);
setTimeout(showMidBox, 7500);
setTimeout(showRightBox, 9000);
setTimeout(newH1, 10500);
setTimeout(newH12, 11000);