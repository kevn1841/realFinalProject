// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsoWuFtZFI1XREXaGsByQBGoWTWX_qBZA",
    authDomain: "actspark-21d87.firebaseapp.com",
    databaseURL: "https://actspark-21d87.firebaseio.com",
    storageBucket: "actspark-21d87.appspot.com",
    messagingSenderId: "68355017208"
  };
  firebase.initializeApp(config);

  var userInfo = firebase.database();

  $("#submit").on("click", function(){
  	var actorName;
  	var actorLocation;
  	var actorDescription;
  	var actorNumber;
  	var actorPicURL;
  	var actorVidURL;

  	var newActor = {
  		name: actorName,
  		location: actorLocation,
  		description: actorDescription,
  		number: actorNumber,
  		img: actorPicURL,
  		vid: actorVidURL
  	}

  	userInfo.ref().push(newActor);

  	$("#newTrainName").val("");
	$("#newDestination").val("");
	$("#newTrainTime").val("");
	$("#newFrequency").val("");
	return false
  });

  userInfo.ref().on("child_added", function(childSnapshot, prevChildKey){
  	var tName = childSnapshot.val().name;
  	var tLocation = childSnapshot.val().location;
  	var tDescription = childSnapshot.val().description;
  	var tNumber = childSnapshot.val().number;
  	var tImg = childSnapshot.val().img;
  	var tVid = childSnapshot.val().vid;

$("#tData").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");


});