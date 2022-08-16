// Constant Variables
const timerText = document.getElementById("timer");


// Method Declaration
function updateTime(){
    timerText.innerText = new Date().toLocaleTimeString("pt-PT", {timeZone: "Europe/Lisbon",}).replace(", ", " - ");
    setInterval(updateTime.bind(this), 1000);
}























// Script Execution
updateTime();
