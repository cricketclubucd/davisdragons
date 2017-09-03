

/*
var root = firebase.database().ref(players);
var a = document.getElementById("eac")
a.value = "other";

root.on('value', getdata);


function getdata(data) {


  var a = document.getElementById("eac")
  var some = data.val();
  var keys = Object.keys(some);

  var k = keys[0];
  var nam = some[k].name;
  a.value = nam;


}
*/

function search()
{
  var input = document.getElementById("id_jerseyNumber");
  var name = document.getElementById("id_name");
  var eco = document.getElementById("id_economy");
  var gen = document.getElementById("id_gender");
  var pos = document.getElementById("id_position");
  var str = document.getElementById("id_strikerate");
  var team = document.getElementById("id_team");
  var TRun = document.getElementById("id_totalRuns");

  var jerseyNumber = input.value;
  var db = firebase.database().ref();
  var players = db.child("players").child(jerseyNumber);
  //var query = db.child("players").orderByChild('jerseyNumber').equalTo('1');
  //var nm = players.child("name").set("Me");

  var nm = players.child("name");
  var ec = players.child("economy");
  var sex = players.child("gender");
  var ps = players.child("position");
  var sr = players.child("strikeRate");
  var tm = players.child("team");
  var tr = players.child("totalRuns");

  //b.value = "check";

  nm.on('value', snap =>{
      name.value = ("Name: " + snap.val());
  });
  ec.on('value', snap =>{
      eco.value = ("Economy: " + snap.val());
  });
  sex.on('value', snap =>{
      gen.value = ("Gender: " + snap.val());
  });

  ps.on('value', snap =>{
      pos.value = ("Position: " + snap.val());
  });

  sr.on('value', snap =>{
      str.value = ("Strike Rate: " + snap.val());
  });
  tm.on('value', snap =>{
      team.value = ("Team: " + snap.val());
  });
  tr.on('value', snap =>{
      TRun.value = ("Total Runs: " + snap.val());
  });
}
