  var config = {
    apiKey: "AIzaSyBb7Q5k8OeQt6dqANZrcnLJBB143Qa2Kqc",
    authDomain: "actsparkdirectors.firebaseapp.com",
    databaseURL: "https://actsparkdirectors.firebaseio.com",
    storageBucket: "actsparkdirectors.appspot.com",
    messagingSenderId: "695822035400"
  };
  firebase.initializeApp(config);
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