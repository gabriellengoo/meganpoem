

  console.log('im here ')

  // ------------------- apps

// Calendar Icon
// const calendarWeek = document.getElementById("calendardayweek"),
// 	calendarDay = document.getElementById("calendarday")

// const clock = () => {
// 	let date = new Date()

// 	let calDay = date.getDate(),
// 		calDayweek = date.getDay()

// 	let calWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

// 	calendarWeek.innerHTML = `${calWeek[calDayweek]}`
// 	calendarDay.innerHTML = calDay
// }
// setInterval(clock, 1000)


// // Clock Icon
// "use strict"
// class Handle {
// 	constructor(html) {
// 		this.html = html
// 	}
// 	rotate(deg) {
// 		this.html.setAttribute("style", `transform: rotate(${deg}deg)`)
// 	}
// }
// let handleNodes = {
// 	hour: new Handle(document.querySelector(".needlehour")),
// 	minute: new Handle(document.querySelector(".needleminute")),
// 	second: new Handle(document.querySelector(".needlesecond")),
// }
// function setTime(date) {
// 	let time, deg
// 	time = date.getSeconds()
// 	deg = time * 6
// 	handleNodes.second.rotate(deg)
// 	time = date.getMinutes()
// 	deg = (time + date.getSeconds() / 60) * 6
// 	handleNodes.minute.rotate(deg)
// 	time = date.getHours()
// 	deg = (time + date.getMinutes() / 60) * 30
// 	handleNodes.hour.rotate(deg)
// }
// function tick() {
// 	setInterval(() => {
// 		setTime(new Date())
// 	}, 1000)
// }
// setTime(new Date())
// tick()


















  // ------------------- time and date at top




$(document).ready(function() {
  // Create two variables with names of months and days of the week in the array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  
  

  
  setInterval( function() {
      // Create an object newDate () and extract the second of the current time
      var seconds = new Date().getSeconds();
      // Add a leading zero to the value of seconds
      $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
      },1000);
      
  setInterval( function() {
      // Create an object newDate () and extract the minutes of the current time
      var minutes = new Date().getMinutes();
      // Add a leading zero to the minutes
      $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
      },1000);
      
  setInterval( function() {
      // Create an object newDate () and extract the clock from the current time
      var hours = new Date().getHours();
      // Add a leading zero to the value of hours
      $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
      }, 1000);
      
  }); 




// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth();
    // year = today.getFullYear();

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month"];
  const IDCollection2 = ["day2", "daynum2"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], ];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }

  const val2 = [dayWeek[dayName], dayNum, months[month], ];
  for (let i = 0; i < IDCollection2.length; i++) {
    document.getElementById(IDCollection2[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();







// ------------- alert -------------



