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
  $("#submitt").on("click", function(){
  	var actorName = $("#nameInput").val().trim();
  	var actorLocation = $("#locationInput").val().trim();
  	var actorDescription = $("#bioInput").val().trim();
  	var actorNumber = $("#phoneInput").val().trim();
  	var actorPicURL = $("#imgInput").val().trim();
  	var actorVidURL = $("#vidInput").val().trim();
  	var newActor = {
  		name: actorName,
  		location: actorLocation,
  		description: actorDescription,
  		number: actorNumber,
  		img: actorPicURL,
  		vid: actorVidURL
  	}
  	userInfo.ref().push(newActor);
  });
  userInfo.ref().on("child_added", function(childSnapshot, prevChildKey){
  	var tName = childSnapshot.val().name;
  	var tLocation = childSnapshot.val().location;
  	var tDescription = childSnapshot.val().description;
  	var tNumber = childSnapshot.val().number;
  	var tImg = childSnapshot.val().img;
  	var tVid = childSnapshot.val().vid;
    var userImage = $('<img>');
    userImage.attr('src', tImg);
    userImage.attr('height', 200);
    userImage.attr('width', 200);
$("#tData").append("<tr><td>" + tName + "</td><td>" + tLocation + "</td><td>" + tDescription + "</td><td>" + tNumber + "</td><td>" + userImage + "</td></tr>");
});