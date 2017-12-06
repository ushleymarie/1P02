//How many days until Christmas
//Code copied from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php */
var today = new Date();
var todayTime = today.getTime();
var xmasDay = new Date(today.getFullYear(), 11, 25);
var xmasDayTime = xmasDay.getTime();
var daysLeft = (xmasDayTime - todayTime) / 1000 / 60 / 60 / 24;
alert(Math.floor(daysLeft) + " days until Christmas!!!");

//The current Date
var now = new Date();
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
}
today =  days[now.getDay()] + ", " +  months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear())) ;
document.write(today);

//A clock
// Code copied from https://www.ricocheting.com/code/javascript/html-generator/date-time-clock
function GetClock(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}
if(nmin<=9) nmin="0"+nmin;
document.getElementById('theTime').innerHTML=""+nhour+":"+nmin+ap+"";
}
window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
