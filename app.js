function getValue(){
    //var data=document.getElementById("date").value;
var currentDate=new Date();
var eidDate= new Date("16 june 2024");
var diff=(eidDate -currentDate)/1000;


var months = Math.floor(diff / (3600 * 24 * 30)); // approximate months
var days = Math.floor(diff / (3600 * 24)) % 30; // remaining days after removing months
var hours = Math.floor((diff / 3600) % 24);
var minutes = Math.floor((diff / 60) % 60);
var seconds = Math.floor(diff % 60);

if (diff<0) return;
document.getElementById("months").innerHTML= months;
document.getElementById("main").innerHTML= days;
document.getElementById("main_hours").innerHTML= hours;
document.getElementById("main_minuts").innerHTML= minutes;
document.getElementById("main_seconds").innerHTML= seconds;

}
getValue();

setInterval(
    ()=>{getValue()
    },
    1000
    )
console.log(months)