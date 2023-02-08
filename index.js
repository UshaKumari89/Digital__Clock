// calculateTime = () => {
//     var date = new Date();
//     var dayNumber = date.getDay();
//     var hour = date.getHours();
//     var minute = date.getMinutes();
//     var ampm = hour >= 12 ? 'PM' : 'AM';
//     var dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
  
//     hour = hour % 12;
//     hour = hour ? hour : '12';
//     hour = hour < 10 ? '0' + hour : hour;
//     minute = minute < 10 ? '0' + minute : minute;
  
//     document.querySelector("#day").textContent = dayNames[dayNumber];
//     document.querySelector("#hour").textContent = hour;
//     document.querySelector("#minute").textContent = minute;
//     document.querySelector("#ampm").textContent = ampm;
  
//     setTimeout(calculateTime, 200);
//   }
  
//   window.addEventListener('load', calculateTime)

function showTime(){
    var date = new Date();
    var day = date.getDay();
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";    
    if(h == 0){
        h = 12;
    }  
    if(h > 12){
        h = h - 12;
        session = "PM";
    }    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;    
    var time =  dayNames[day] + ' ' +  h + ":" + m + ":" + s + " " + session;
    document.getElementById("digitalClock").innerText = time;
     
    setTimeout(showTime, 1000);
}

window.addEventListener('load', showTime);
