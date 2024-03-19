// console.log(new Date().toString());
// console.log(Date.now());  

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}

setInterval(displayTime, 1000);