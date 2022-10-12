var notifNum = document.getElementById("notifNum");
var notif1 = document.getElementById("top3a");
var circ1 = document.getElementById("circ1");
notif1.addEventListener("click", reduce);
function reduce() {
  if (circ1.style.display != "none") {
    circ1.style.display = "none";
    notifNum.innerHTML = notifNum.innerHTML - 1;
  } else {
    notifNum.innerHTML = notifNum.innerHTML;
  }
}
var notif2 = document.getElementById("top3b");
var circ2 = document.getElementById("circ2");
notif2.addEventListener("click", reduce2);
function reduce2() {
  if (circ2.style.display != "none") {
    circ2.style.display = "none";
    notifNum.innerHTML = notifNum.innerHTML - 1;
  } else {
    notifNum.innerHTML = notifNum.innerHTML;
  }
}
var notif3 = document.getElementById("top3c");
var circ3 = document.getElementById("circ3");
notif3.addEventListener("click", reduce3);
function reduce3() {
  if (circ3.style.display != "none") {
    circ3.style.display = "none";
    notifNum.innerHTML = notifNum.innerHTML - 1;
  } else {
    notifNum.innerHTML = notifNum.innerHTML;
  }
}
var markAll = document.getElementById("markAll");
markAll.addEventListener("click", markAllFunc);
function markAllFunc() {
  if (
    circ2.style.display != "none" ||
    circ2.style.display != "none" ||
    circ3.style.display != "none"
  ) {
    circ1.style.display = "none";
    circ2.style.display = "none";
    circ3.style.display = "none";
    notifNum.innerHTML = 0;
  } else {
    notifNum.innerHTML = notifNum.innerHTML;
  }
}
