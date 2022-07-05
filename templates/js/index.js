var jwt = localStorage.getItem("jwt");
if (jwt == null) {
    window.location.href = './login'
}
 
// function loadUser() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "https://www.mecallapi.com/api/auth/user");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.setRequestHeader("Authorization", "Bearer " + jwt);
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//             const objects = JSON.parse(this.responseText);
//             if (objects["status"] == "ok") {
//                 const user = objects["user"]
//                 document.getElementById("fname").innerHTML = user["fname"];
//                 document.getElementById("avatar").src = user["avatar"];
//                 document.getElementById("username").innerHTML = user["username"];
//             }
//         }
//     };
// }

// function loadUser() {
//     const xhttp = new XMLHttpRequest();
//     document.getElementById('loader').style.display = "block"
//     xhttp.open("GET", "https://cbn360-api.herokuapp.com/api/users/me/");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.setRequestHeader("Authorization", "Bearer " + jwt);
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//             const objects = JSON.parse(this.responseText);
//             if (objects["jwt"] !== null) {
//                 const user = objects
//                     // document.getElementById("fname").innerHTML = user["fname"];
//                     // document.getElementById("avatar").src = user["profilePict"].url;
//                 document.getElementById("username").innerHTML = user["username"];
//                 // document.getElementById("email").innerHTML = user["email"]
//                 // console.log(user["profilePict"].url)
//                 // console.log(objects)
//             }
//         }
//     };
// }

// loadUser();

// Auto Run And Load Data List API ForEach


// const thisForm = document.getElementById('myForm');
// thisForm.addEventListener('submit', async function(e) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.setRequestHeader("Authorization", "Bearer " + jwt);
//     // xhttp.send();
//     e.preventDefault();
//     const formData = new FormData(thisForm).entries()
//     const response = await fetch('http://50.50.50.229:1337/api/announcements/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(Object.fromEntries(formData))
//     });

//     const result = await response.json();
//     console.log(result)
// });

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  

function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login'
}

const labels = [
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4',
    'Post 5',
    'Post 6',
    'Post 7',
    'Post 8',
    'Post 9',
    'Post 10',
    'Post 11',
    'Post 12',
  ];

  var dataLikes = {
    label: "Likes",
    data: [0, 10, 5, 2, 20, 30, 45, 55, 52, 63, 24, 34],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  }

  var dataComments = {
    label: "Comment",
    data: [6, 32, 5, 13, 43, 31, 33, 12, 32, 22, 15, 51],
    lineTension: 0,
    fill: false,
    borderColor: 'blue'
  }

  const data = {
    labels: labels,
    datasets: [{
      label: 'Likes',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45, 55, 52, 63, 24, 34],
    },
    {
      label: 'Comment',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [3, 54, 43, 51, 44, 21, 5, 12, 42, 21, 42, 33],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


