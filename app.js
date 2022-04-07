function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers(); 
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10); 
    let x = document.getElementById("random")
    x.innerHTML = ran;
    x.style.backgroundColor = "green";
    x.style.color = "white";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y =  document.getElementById("userNumber")
    y.innerHTML = user;
    y.style.color = "#ADD8E6"
    y.style.backgroundColor = "red"
    y.style.padding = "20px"
    y.style.textAlign = "center"
    return user;
}


function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");

    if ( a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and User got " + a;
        z.style.color = "white"
        z.style.backgroundColor = "black"
        z.style.padding = "20px"
        z.style.textAlign = "center"
    } else if ( a == b ) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and User got " + a;
        z.style.color = "#ADD8E6"
        z.style.backgroundColor = "gray"
        z.style.padding = "20px"
        z.style.textAlign = "center"
    }
}