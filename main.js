function currentTime() {
    var date = new Date(); /* object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var datestyle = new Date().toLocaleDateString("in", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    document.getElementById("date").innerText = datestyle; /* adding time to the div */
    document.getElementById("currentday").innerText = weekday;
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) {
    /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();
$.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?", function (data) {
    city = data.geoplugin_city;
    document.getElementById("city").innerText = city;

});
