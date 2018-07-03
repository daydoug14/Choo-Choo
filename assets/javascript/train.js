$(document).ready(function(){

var config = {
    apiKey: "AIzaSyBo-3f8CWfYEEuRhLdhQTn85DFBhks5IIg",
    authDomain: "choochoo-12dc9.firebaseapp.com",
    databaseURL: "https://choochoo-12dc9.firebaseio.com",
    projectId: "choochoo-12dc9",
    storageBucket: "",
    messagingSenderId: "530354671867"
  };
  firebase.initializeApp(config);

// $("#train-table > tbody").empty();


  var database = firebase.database();
  var trnFromNow;


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

  var trnName = $("#train-name-input").val().trim();
  var trnDstn = $("#dstn-input").val().trim();
  var trnStart = moment($("#start-input").val().trim(), "HH:mm").format("HH:mm");
  var trnFrq = $("#frq-input").val().trim();

  
  database.ref().push({
    trnName: trnName,
    trnDstn: trnDstn,
    trnStart: trnStart,
    trnFrq: trnFrq
  });


  console.log(trnName);
  console.log(trnDstn);
  console.log(trnStart);
  console.log(trnFrq);

  
  $("#train-name-input").val("");
  $("#dstn-input").val("");
  $("#start-input").val("");
  $("#frq-input").val("");
});


database.ref().on("child_added", function(childSnapshot) {

  console.log(childSnapshot.val());

  var trnName = childSnapshot.val().trnName;
  var trnDstn = childSnapshot.val().trnDstn;
  var trnStart = childSnapshot.val().trnStart;
  var trnFrq = childSnapshot.val().trnFrq;


  console.log(trnName);
  console.log(trnDstn);
  console.log(trnStart);
  console.log(trnFrq);
////////////////////////////////////////////////////////////
var firstTimeConverted = moment(trnStart, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

var tRemainder = diffTime % trnFrq;
    console.log(tRemainder);

trnFromNow = trnFrq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + trnFromNow);

var trnStart = moment().add(trnFromNow, "minutes");

    trnStart = moment(trnStart).format("HH:mm");

    // console.log("ARRIVAL TIME: " + moment(trnStart).format("HH:mm"));
 
    // trnFromNow =  moment().diff(moment(trnStart, "HH:mm"), "minutes");
    // trnFromNow = trnFromNow * -1;


 
  $("#train-table > tbody").append("<tr><td>" + trnName + "</td><td>" + trnDstn + "</td><td>" +
  trnStart + "</td><td>" + trnFrq+ "</td><td>" + trnFromNow + "</td><td>");
});


});