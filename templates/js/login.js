var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.location.href = './home'
}
// function login() { 
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const xhttp = new XMLHttpRequest();
//     xhttp.open("POST", "https://www.mecallapi.com/api/login");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.send(JSON.stringify({
//         "username": username,
//         "password": password
//     }));
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//             const objects = JSON.parse(this.responseText);
//             console.log(objects);
//             if (objects['status'] == 'ok') {
//                 localStorage.setItem("jwt", objects['accessToken']);
//                 Swal.fire({
//                     text: objects['message'],
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         window.location.href = './index.html';
//                     }
//                 });
//             } else {
//                 Swal.fire({
//                     text: objects['message'],
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         }
//     };
//     return false;
// }

// function login() {
//     const identifier = document.getElementById("identifier").value;
//     const password = document.getElementById("password").value;

//     const xhttp = new XMLHttpRequest();
//     xhttp.open("POST", "http://50.50.50.229:1337/api/auth/local");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.send(JSON.stringify({
//         "identifier": identifier,
//         "password": password
//     }));
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//             const objects = JSON.parse(this.responseText);
//             // console.log(objects.error.status);
//             if (objects['jwt'] !== null) {
//                 localStorage.setItem("jwt", objects['jwt']);
//                 Swal.fire({
//                     text: "Click Ok to Continue",
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         window.location.href = './index.html';
//                     }
//                 });
//                 // if (objects.error.status === 400) {
//                 //     Swal.fire({
//                 //         text: objects.error.status,
//                 //         icon: 'error',
//                 //         confirmButtonText: 'OK'
//                 //     });
//                 // }
//             } else {
//                 Swal.fire({
//                     text: objects['message'],
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             console.log(objects)
//         }
//     };
//     return false;
// }
function login() {
    const identifier = document.getElementById("identifier").value;
    const password = document.getElementById("password").value;
    document.getElementById('loading').style.display = "block"
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://cbn360-api.herokuapp.com/api/auth/local/");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "identifier": identifier,
        "password": password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            // console.log(objects.error.status);
            if (objects['jwt'] !== null) {
                document.getElementById('loading').style.display = "none"
                localStorage.setItem("jwt", objects['jwt']);
                Swal.fire({
                    text: "Click Ok to Continue",
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = './home';
                    }
                });
            }
            if (objects['jwt'] === undefined) {
                document.getElementById('loading').style.display = "none"
                localStorage.removeItem("jwt", objects['jwt']);
                Swal.fire({
                    text: "Email or password is incorrect",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
            if (objects.error.status === 400) {
                Swal.fire({
                    text: objects.error.status,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            // } else {
            //     Swal.fire({
            //         text: objects['message'],
            //         icon: 'error',
            //         confirmButtonText: 'OK'
            //     });
            // }
            console.log(objects)
        }
    };
    return false;
}