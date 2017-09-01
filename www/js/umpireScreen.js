function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it



function submitClick()

{
    
     
    var submitBtn = document.getElementById(submitBtn);
    var database = firebase.database();
   
    var firebaseRef = database.ref();
    var messageText = document.getElementById("mainText").value;
    console.log(messageText);
    firebaseRef.push().set(messageText); 
   
}