// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then(res => console.log("service worker registered"))
//       .catch(err => console.log("service worker not registered", err))
//   })
// }
$('#parent')[0].style.width = "100%"

window.addEventListener("focus", (e) => {
  
  if ("lud".lsGet() == true||"lud".lsGet() == "true"){
    "lud".lsSave(false)
    let d = new Date()
    let diff = Number(d.getTime()) - Number("lu".lsGet())
    if (diff > 900000){
      location.reload()
    }
  }
});
window.addEventListener("blur", (e) => {
  "lud".lsSave(true)
});
const channel = new BroadcastChannel('sw-messages');
channel.addEventListener('message', event => {
    let a = event.data
    if (a.title=="NU"){
      showtrans("<br>Updating")
    }
    if (a.title=="EU"){
      hidetrans()
      location.reload()
    }
});
function checkvalidtime(e) {
  if (!isNaN(Number(e.value.replaceAll(":", "")))) {
    if (
      e.value.replaceAll(":", "").toString().length == 2 &&
      e.value.length == 2
    ) {
      e.value = e.value + ":";
    }
  }
}
function pass(){}
window.onerror = function (error, url, line) {
  alert(
    JSON.stringify({
      acc: "error",
      data: "ERR:" + error + " ||| URL:" + url + " L:" + line,
    })
  );
};
function mobile() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
let dragindex = 0;
let dropindex = 0;
let clone = "";

const pedit = ["", "ptc", "phigh", "pbold", "pitalic", "pst", "pun", "pbaw"];
const standardevent = { timeS: "", timeE: "", context: "ㅤ", features: [] };
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const fracup = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
const fracline = "⁄";
const fracdown = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

function returnrowcol(date, set = false, currdate = false) {
  var data = JSON.parse(localStorage.getItem("data"));
  var startmonth = data.startmonth.toString().padStart(2, '0');
  var startday = data.startday.toString().padStart(2, '0')
  
  var day = date.slice(-2);
  let month = date.slice(-5, -3);
  var currdate = new Date(date);
  let cse = Math.floor(currdate / 8.64e7); // current date since epoch
  let s1se = Math.floor(
    new Date(new Date().getFullYear() + "-" + startmonth + "-" + startday) /
      8.64e7
  );
  let s2se = Math.floor(
    new Date(
      Number(Number(new Date().getFullYear()) - 1) +
        "-" +
        startmonth +
        "-" +
        startday
    ) / 8.64e7
  );
  let diff1 = Math.abs(cse - s1se);
  let diff2 = Math.abs(cse - s2se);
  let tdiff = 0;
  let pref = 0
  // console.log(day,month,startmonth,data, currdate, s1se, s2se, diff1, diff2)
  if (diff1 < diff2) {
    tdiff = diff1;
    pref = s1se
  } else {
    tdiff = diff2;
    pref = s2se
  }
  
 
  if (set == true){
    
    return('1970-01-01'.addDays(pref))
  }
  let row = Math.floor(tdiff / 7);
  let col = tdiff % 7;
  return [row, col];
}
function clearunused(array) {
  let b = [];
  for (let i = 0; i < array.length; i++) {
    if (JSON.stringify(array[i]) == JSON.stringify(standardevent)) {
      b.push(i);
    }
  }

  return b;
}
function sortexceptunused(e) {
  var date = e;
  var notused = clearunused(date.event);
  var notusedinorder = [];
  for (let i = 0; i < notused.length; i++) {
    notusedinorder.push(e.order.indexOf(notused[i]));
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  var dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = "0.4";

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
    localStorage.setItem("Dragged", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move";

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");

      var day = this.parentNode.classList[1].slice(-3, -2);
      var week = this.parentNode.classList[1].slice(-1);

      var a = JSON.parse(localStorage.getItem("data"));
      let order = [];
      let neworder = [];
      for (let i = 0; i < 4; i++) {
        order.push(
          Number(
            document
              .getElementById("container")
              .children[i].children[
                document.getElementById("container").children[i].children
                  .length - 1
              ].id.slice(-1)
          ) - 1
        );
      }

      for (let j = 0; j < 4; j++) {
        neworder.push(a.week[week][day].order[order[j]]);
      }

      a.week[week][day].order = neworder;
      localStorage.setItem("data", JSON.stringify(a));
      reloadcalendar();
    }

    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
      item.classList.remove("over");
    });
  }

  let items = document.querySelectorAll(".container .box");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("dragenter", handleDragEnter, false);
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("dragleave", handleDragLeave, false);
    item.addEventListener("drop", handleDrop, false);
    item.addEventListener("dragend", handleDragEnd, false);
  });
});

function checkwidth() {
  if (document.getElementById("timeS").value !== "") {
    document.getElementById("widthchecker").innerHTML =
      document.getElementById("context").value;
    while (document.getElementById("widthchecker").offsetWidth > 98) {
      document.getElementById("context").value = document
        .getElementById("context")
        .value.slice(0, -1);
      document.getElementById("widthchecker").innerHTML =
        document.getElementById("context").value;
    }
  }
}
function fraccc() {
  let a = prompt("Upper");
  let b = prompt("Lower");
  let text = "";
  if (!isNaN(a) && !isNaN(b)) {
    a = Number(a);
    b = Number(b);
    for (let i = 0; i < a.toString().length; i++) {
      text = text + fracup[a.toString()[i]];
    }
    text = text + fracline;
    for (let j = 0; j < b.toString().length; j++) {
      text = text + fracdown[b.toString()[j]];
    }
    document.getElementById("context").value =
      document.getElementById("context").value + text;
  }
}

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(e) {
  try {
    let a = e.split("rgb(")[1].split(")")[0].split(", ");

    return (
      "#" + componentToHex(a[0]) + componentToHex(a[1]) + componentToHex(a[2])
    );
  } catch (e) {}
}
function cp(a, b) {
  //Change Preferences
  if (a == "h" || a == "t") {
    let v = prompt("Change color to...");
    if (v !== "" && /^#([0-9A-F]{3}){1,2}$/i.test(v)) {
      if (a == "h") {
        let c = JSON.parse(localStorage.getItem("hpresetcolor"));
        c[Number(b)] = v;
        localStorage.setItem("hpresetcolor", JSON.stringify(c));
        location.reload();
      }
      if (a == "t") {
        let c = JSON.parse(localStorage.getItem("tpresetcolor"));
        c[Number(b)] = v;
        localStorage.setItem("tpresetcolor", JSON.stringify(c));
        location.reload();
      }
    } else {
      alert("Unsupported Format. Please try again.");
    }
  }
}

function clearinputs() {
  document.getElementById("context").value = "";
  document.getElementById("timeS").value = "";
  document.getElementById("timeE").value = "";
  document.getElementById("prefOr").value = "";
  document.getElementById("textColorinput").checked = false;
  document.getElementById("textColor").style.display = "none";

  document.getElementById("highlightColor").style.display = "none";

  document.getElementById("highlightColorinput").checked = false;
  document.getElementById("boldinput").checked = false;
  document.getElementById("italicinput").checked = false;
  document.getElementById("stinput").checked = false;
  document.getElementById("underinput").checked = false;
  document.getElementById("boxinput").checked = false;
  document.getElementById("repeatinput").checked = false;
  document.getElementById('holidayinput').checked = false;
  document.getElementById('notescolor').value="#000000"
  document.getElementById("freq").value = "1";
}
function editadvancedstuff(e) {
  var a = localStorage.getItem("Dragged").slice(15, 18);
  let data = JSON.parse(localStorage.getItem("data"));
  var day =
    data.week[Number(a[0])][Number(a[1])].event[
      data.week[Number(a[0])][Number(a[1])].order[Number(a[2]) - Number(1)]
    ];
  if (day.context == "ㅤ") {
    return;
  }

  data.week[Number(a[0])][Number(a[1])].event[
    data.week[Number(a[0])][Number(a[1])].order[Number(a[2]) - Number(1)]
  ] = standardevent;
  localStorage.setItem("data", JSON.stringify(data));
  data = JSON.stringify(data);
  reloadcalendar();
  document.getElementById("context").value = day.context;
  let b = day.timeS.toString();
  let c = day.timeE.toString();
  if (b == "") {
    b = "9999";
  }
  if (c == "") {
    b = "9999";
  }
  while (b.length < 4) {
    b = "0" + b;
  }
  while (c.length < 4) {
    c = "0" + c;
  }
  b = b.slice(0, 2) + ":" + b.slice(2, 4);
  c = c.slice(0, 2) + ":" + c.slice(2, 4);

  document.getElementById("timeS").value = b;
  document.getElementById("timeE").value = c;
  for (let i = 0; i < day.features.length; i++) {
    if (day.features[i].key == 1) {
      document.getElementById("textColorinput").checked = true;
      document.getElementById("textColor").style.display = "inline-block";
      document.getElementById("textColor").value = day.features[i].color;
    }
    if (day.features[i].key == 2) {
      document.getElementById("highlightColorinput").checked = true;
      document.getElementById("highlightColor").style.display = "inline-block";
      document.getElementById("highlightColor").value = day.features[i].color;
    }
    if (day.features[i].key == 3) {
      document.getElementById("boldinput").checked = true;
    }
    if (day.features[i].key == 4) {
      document.getElementById("italicinput").checked = true;
    }
    if (day.features[i].key == 5) {
      document.getElementById("stinput").checked = true;
    }
    if (day.features[i].key == 6) {
      document.getElementById("underinput").checked = true;
    }
    if (day.features[i].key == 7) {
      document.getElementById("boxinput").checked = true;
    }
  }
}
function editpaste(e) {
  var a = localStorage.getItem("Dragged").slice(15, 18);
  let data = JSON.parse(localStorage.getItem("data"));
  var day =
    data.week[Number(a[0])][Number(a[1])].event[
      data.week[Number(a[0])][Number(a[1])].order[Number(a[2]) - Number(1)]
    ];
  reloadcalendar();
  document.getElementById("context").value = day.context;
  let b = day.timeS.toString();
  let c = day.timeE.toString();
  if (b == "") {
    b = "9999";
  }
  if (c == "") {
    b = "9999";
  }
  while (b.length < 4) {
    b = "0" + b;
  }
  while (c.length < 4) {
    c = "0" + c;
  }
  b = b.slice(0, 2) + ":" + b.slice(2, 4);
  c = c.slice(0, 2) + ":" + c.slice(2, 4);

  document.getElementById("timeS").value = b;
  document.getElementById("timeE").value = c;
  for (let i = 0; i < day.features.length; i++) {
    if (day.features[i].key == 1) {
      document.getElementById("textColorinput").checked = true;
      document.getElementById("textColor").style.display = "inline-block";
      document.getElementById("textColor").value = day.features[i].color;
      document.getElementById("textpresetColor").style.display = "inline-block";
    }
    if (day.features[i].key == 2) {
      document.getElementById("highlightColorinput").checked = true;
      document.getElementById("highlightColor").style.display = "inline-block";
      document.getElementById("highlightColor").value = day.features[i].color;
      document.getElementById("highlightpresetColor").style.display =
        "inline-block";
    }
    if (day.features[i].key == 3) {
      document.getElementById("boldinput").checked = true;
    }
    if (day.features[i].key == 4) {
      document.getElementById("italicinput").checked = true;
    }
    if (day.features[i].key == 5) {
      document.getElementById("stinput").checked = true;
    }
    if (day.features[i].key == 6) {
      document.getElementById("underinput").checked = true;
    }
    if (day.features[i].key == 7) {
      document.getElementById("boxinput").checked = true;
    }
  }
}
function nextweek() {
  let a = JSON.parse(localStorage.getItem("data"));
  let b = a.week;
  let c = [];
  for (let i = 0; i < 9; i++) {
    c.push(b[i + 1]);
  }
  c.push(standardweek);
  a.week = c;
  let asdfg = a.startday;
  a.startday =
    Number(a.startday) + 7 > monthdays[Number(a.startmonth) - Number(1)]
      ? Number(a.startday) +
        7 -
        Number(monthdays[Number(a.startmonth) - Number(1)])
      : Number(a.startday) + 7;

  a.startmonth =
    Number(asdfg) + 7 > monthdays[Number(a.startmonth) - Number(1)]
      ? (Number(a.startmonth) + Number(1)) % 12 == 0
        ? 12
        : (Number(a.startmonth) + Number(1)) % 12
      : a.startmonth;
  localStorage.setItem("data", JSON.stringify(a));
  reloadcalendar();
  
}
function togglemodes() {
  if (localStorage.getItem("phone") == "y") {
    localStorage.setItem("phone", "n");
  } else {
    localStorage.setItem("phone", "y");
  }
  location.reload();
}


function dragdel(e) {
  var a = localStorage.getItem("Dragged").slice(15, 18);
  let data = JSON.parse(localStorage.getItem("data"));
  if (confirm("Sure to delete this?")) {
    data.week[Number(a[0])][Number(a[1])].event[
      data.week[Number(a[0])][Number(a[1])].order[Number(a[2]) - Number(1)]
    ] = standardevent;
    localStorage.setItem("data", JSON.stringify(data));
    reloadcalendar();
  } else {
    alert("Operation Cancelled.");
  }
}


function padd(e) {
  //detect mobile features
  if (e.classList.contains("pactive")) {
    e.classList.remove("pactive");
  } else {
    e.classList.add("pactive");
  }
  console.log(e.children);
  Array.prototype.slice.call(e.parentElement.children).forEach((element) => {
    element.style.backgroundColor = "#FFFFFF";
    element.children[0].checked = false;
  });
  Array.prototype.slice
    .call(document.getElementsByClassName("pactive"))
    .forEach((element) => {
      element.style.backgroundColor = "#def7ff";
      element.children[0].checked = true;
    });
}
function showtrans(e="") {
  document.getElementById("maindoc").style.overflow = "hidden";
  document.getElementById("autoplayer").style.display = "block";
  $('#autoplayertext')[0].innerHTML = e
   $('#biggest').hide()
}
function hidetrans() {
  document.getElementById("maindoc").style.overflow = "visible";
  document.getElementById("autoplayer").style.display = "none";
  $('#autoplayertext')[0].innerHTML = ''
  $('#biggest').show()
}

