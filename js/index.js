function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById('clock').innerHTML =
    h + ":" + m
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    document.getElementById('date').innerHTML =
    monthNames[month] + " " + date + nth(date) + ", " + year;
    var t = setTimeout(startDate, 100000);

}

function nth(d) {
  if(d>3 && d<21) return 'th';
  switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}


$( document ).ready(function() {
    startTime();
    startDate();
});
