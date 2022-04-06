function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10); 
    document.getElementById("random").innerHTML = ran;
    document.getElementById("random").style.backgroundColor = "green";
    document.getElementById("random").style.color = "white";
    document.getElementById("random").style.padding = "20px";
}

