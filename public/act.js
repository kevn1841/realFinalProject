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
$("#image").append(userImage);
});
  var directorInfo = firebase.database();
  $("#Rsubmitt").on("click", function(){
    var dirName = $("#nameRole").val().trim();
    var dirLocation = $("#locationRole").val().trim();
    var dirDescription = $("#descRole").val().trim();
    var dirNumber = $("#phoneRole").val().trim();
    var dirEmail = $("#emailRole").val().trim();
    var newRole = {
      Rname: dirName,
      Rlocation: dirLocation,
      Rdescription: dirDescription,
      Rnumber: dirNumber,
      Remail: dirEmail
    }
    directorInfo.ref().push(newRole);
  });
  directorInfo.ref().on("child_added", function(childSnapshot, prevChildKey){
    var tRName = childSnapshot.val().Rname;
    var tRLocation = childSnapshot.val().Rlocation;
    var tRDescription = childSnapshot.val().Rdescription;
    var tRNumber = childSnapshot.val().Rnumber;
    var tREmail = childSnapshot.val().Remail;
$("#tRData").append("<tr><td>" + tRName + "</td><td>" + tRLocation + "</td><td>" + tRDescription + "</td><td>" + tRNumber + "</td><td>" + tREmail + "</td></tr>");
});