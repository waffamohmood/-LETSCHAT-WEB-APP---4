// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_Iq7_hawwu6P9NbpHtWv-YK77XZOHuLE",
    authDomain: "kwitter-692a9.firebaseapp.com",
    databaseURL: "https://kwitter-692a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-692a9",
    storageBucket: "kwitter-692a9.appspot.com",
    messagingSenderId: "381655349175",
    appId: "1:381655349175:web:58b8c5807f7b72d6265a32"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  username=localStorage.getItem("user_name");
  console.log("User Name - "+username);

  roomname=localStorage.getItem("room_name");
  console.log("Room Name - "+roomname);

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
        window.location = "index.html";
    }

    function send(){
        msg = document.getElementById("msg").value;
        console.log("Message - "+msg);
        firebase.database().ref(roomname).push({
              Name:username,
              Message:msg,
              Like:0
        });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();