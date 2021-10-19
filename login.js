function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";


  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  var ids = ["day", "month", "num", "year", "hour", "min", "seconds", "period"];
  var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}


const pass_field = document.querySelector('.password');
const show_btn = document.querySelector('.show');

show_btn.addEventListener('click', function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    show_btn.style.color = "#27aae1";
    show_btn.textContent = "HIDE";
  } else {
    pass_field.type = "password";
    show_btn.style.color = "#222";
    show_btn.textContent = "SHOW";
  }
});