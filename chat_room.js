var firebaseConfig = {
    apiKey: "AIzaSyBbhiMhALSQ1HdK-wyhoAqk72hbKe6KeEw",
    authDomain: "chatappproject-598fb.firebaseapp.com",
    databaseURL: "https://chatappproject-598fb-default-rtdb.firebaseio.com",
    projectId: "chatappproject-598fb",
    storageBucket: "chatappproject-598fb.appspot.com",
    messagingSenderId: "251276220386",
    appId: "1:251276220386:web:c2789cc9221985a4e48bbb"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name; 

function addRoom()
{
      room_name = document.getElementById("room_name").value ; 

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_room.html";
}


function getData()
{
    firebase.database().ref("/").on('value', function(snapshot)
    {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; 
Room_names = childKey; 
//Start Code 
console.log("Room Name - " + Room_names);
row = "<div class=' room_name ' id="+Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;


//End Code 
});
});
}

getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}


function logout(){
    window.location = "index.html";
}