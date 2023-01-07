// // npm install xhr2


// var XMLHttpRequest = require('xhr2');
// var request = new XMLHttpRequest();

// // var request = new XMLHttpRequest();
// request.open("GET", "https://api.github.com/users/anuradha9712");
// request.send();
// request.onload = () => {
//   console.log(JSON.parse(request.response));
// };


// using fetch 
// npm install node-fetch


// var fetch = require("node-fetch");
import fetch from "node-fetch";


fetch('https://api.github.com/users/anuradha9712')
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
})