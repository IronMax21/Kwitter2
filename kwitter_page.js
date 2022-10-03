//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD4mL-kqPZwo1VsbTHOke4TuVjT8_PJ8as",
      authDomain: "kwitter-cde60.firebaseapp.com",
      databaseURL: "https://kwitter-cde60-default-rtdb.firebaseio.com",
      projectId: "kwitter-cde60",
      storageBucket: "kwitter-cde60.appspot.com",
      messagingSenderId: "1005257597869",
      appId: "1:1005257597869:web:b5eb1264edb0a77d2d7724",
      measurementId: "G-TKZ1PX8LW6"
    };
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
       name:user_name, message:msg, like:0
             });
       document.getElementById("msg").value = ""; 
}
function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }