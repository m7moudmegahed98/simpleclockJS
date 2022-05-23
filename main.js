var newDate = new Date();
var getting = document.getElementById("clock");
var myHour = newDate.getHours() 
//if i want it to be 12hour not 24hour
// % 12 || 12;
var min = newDate.getMinutes();
var sec = newDate.getSeconds();


if ((myHour < 10) && (min < 10) && (sec < 10)) {
    getting.innerHTML = "0" + myHour + ":" + "0" + min + ":" + "0" + sec;
}
else if ((myHour < 10) && (min < 10) && (sec > 10)){
    getting.innerHTML = "0" + myHour + ":" + "0" + min + ":" +  sec;
}
else if ((myHour < 10) && (min > 10) && (sec < 10)){
    getting.innerHTML = "0" + myHour + ":" + min + ":" + "0" + sec;
}
else if ((myHour > 10) && (min < 10) && (sec < 10)){
    getting.innerHTML =  myHour + ":" + "0" + min + ":" + "0" + sec;
}
else if ((myHour > 10) && (min > 10) && (sec < 10)){
    getting.innerHTML =  myHour + ":" + min + ":" + "0" + sec;
}
else if ((myHour > 10) && (min < 10) && (sec > 10)){
    getting.innerHTML =  myHour + ":" + "0" + min + ":" + sec;
}
else if ((myHour < 10) && (min > 10) && (sec > 10)){
    getting.innerHTML = "0" + myHour + ":" + min + ":" + sec;
}
else {
    getting.innerHTML = myHour + ":" + min + ":" + sec;
}

var amPm = document.getElementById("amPm");

if (myHour < 12) {
    amPm.innerHTML = "Am"
} else {
    amPm.innerHTML = "Pm"
}

document.getElementById("amPm").style.display = "inline"
document.getElementById("clock").style.display = "inline"

