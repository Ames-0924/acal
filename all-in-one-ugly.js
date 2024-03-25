"serviceWorker" in navigator &&
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then((e) => console.log("service worker registered"))
      .catch((e) => console.log("service worker not registered", e));
  }),
  window.addEventListener("focus", (e) => {
    if (!0 == "lud".lsGet() || "true" == "lud".lsGet()) {
      "lud".lsSave(!1);
      Number(new Date().getTime()) - Number("lu".lsGet()) > 9e5 &&
        location.reload();
    }
  }),
  window.addEventListener("blur", (e) => {
    "lud".lsSave(!0);
  });
const channel = new BroadcastChannel("sw-messages");
function checkvalidtime(e) {
  isNaN(Number(e.value.replaceAll(":", ""))) ||
    2 != e.value.replaceAll(":", "").toString().length ||
    2 != e.value.length ||
    (e.value = e.value + ":");
}
function pass() {}
function mobile() {
  var e;
  let t = !1;
  return (
    (e = navigator.userAgent || navigator.vendor || window.opera),
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      e
    ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )) &&
      (t = !0),
    t
  );
}
channel.addEventListener("message", (e) => {
  let t = e.data;
  "NU" == t.title && showtrans("<br>Updating"),
    "EU" == t.title && (hidetrans(), location.reload());
}),
  (window.onerror = function (e, t, n) {
    alert(
      JSON.stringify({
        acc: "error",
        data: "ERR:" + e + " ||| URL:" + t + " L:" + n,
      })
    );
  });
let dragindex = 0,
  dropindex = 0,
  clone = "";
const pedit = ["", "ptc", "phigh", "pbold", "pitalic", "pst", "pun", "pbaw"],
  standardevent = { timeS: "", timeE: "", context: "ㅤ", features: [] },
  day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  monthdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  fracup = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
  fracline = "⁄",
  fracdown = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
function returnrowcol(e, t = !1, n = !1) {
  var a = JSON.parse(localStorage.getItem("data")),
    l = a.startmonth.toString().padStart(2, "0"),
    r = a.startday.toString().padStart(2, "0");
  e.slice(-2), e.slice(-5, -3);
  var n = new Date(e);
  let o = Math.floor(n / 864e5),
    s = Math.floor(
      new Date(new Date().getFullYear() + "-" + l + "-" + r) / 864e5
    ),
    i = Math.floor(
      new Date(
        Number(Number(new Date().getFullYear()) - 1) + "-" + l + "-" + r
      ) / 864e5
    ),
    d = Math.abs(o - s),
    c = Math.abs(o - i),
    m = 0,
    g = 0;
  if ((d < c ? ((m = d), (g = s)) : ((m = c), (g = i)), !0 == t))
    return "1970-01-01".addDays(g);
  let p;
  return [Math.floor(m / 7), m % 7];
}
function clearunused(e) {
  let t = [];
  for (let n = 0; n < e.length; n++)
    JSON.stringify(e[n]) == JSON.stringify(standardevent) && t.push(n);
  return t;
}
function sortexceptunused(e) {
  var t = clearunused(e.event),
    n = [];
  for (let a = 0; a < t.length; a++) n.push(e.order.indexOf(t[a]));
}
function checkwidth() {
  if ("" !== document.getElementById("timeS").value)
    for (
      document.getElementById("widthchecker").innerHTML =
        document.getElementById("context").value;
      document.getElementById("widthchecker").offsetWidth > 98;

    )
      (document.getElementById("context").value = document
        .getElementById("context")
        .value.slice(0, -1)),
        (document.getElementById("widthchecker").innerHTML =
          document.getElementById("context").value);
}
function fraccc() {
  let e = prompt("Upper"),
    t = prompt("Lower"),
    n = "";
  if (!isNaN(e) && !isNaN(t)) {
    (e = Number(e)), (t = Number(t));
    for (let a = 0; a < e.toString().length; a++) n += fracup[e.toString()[a]];
    n += "⁄";
    for (let l = 0; l < t.toString().length; l++)
      n += fracdown[t.toString()[l]];
    document.getElementById("context").value =
      document.getElementById("context").value + n;
  }
}
function componentToHex(e) {
  var t = Number(e).toString(16);
  return 1 == t.length ? "0" + t : t;
}
function rgbToHex(e) {
  try {
    let t = e.split("rgb(")[1].split(")")[0].split(", ");
    return (
      "#" + componentToHex(t[0]) + componentToHex(t[1]) + componentToHex(t[2])
    );
  } catch (n) {}
}
function cp(e, t) {
  if ("h" == e || "t" == e) {
    let n = prompt("Change color to...");
    if ("" !== n && /^#([0-9A-F]{3}){1,2}$/i.test(n)) {
      if ("h" == e) {
        let a = JSON.parse(localStorage.getItem("hpresetcolor"));
        (a[Number(t)] = n),
          localStorage.setItem("hpresetcolor", JSON.stringify(a)),
          location.reload();
      }
      if ("t" == e) {
        let l = JSON.parse(localStorage.getItem("tpresetcolor"));
        (l[Number(t)] = n),
          localStorage.setItem("tpresetcolor", JSON.stringify(l)),
          location.reload();
      }
    } else alert("Unsupported Format. Please try again.");
  }
}
function clearinputs() {
  (document.getElementById("context").value = ""),
    (document.getElementById("timeS").value = ""),
    (document.getElementById("timeE").value = ""),
    (document.getElementById("prefOr").value = ""),
    (document.getElementById("textColorinput").checked = !1),
    (document.getElementById("textColor").style.display = "none"),
    (document.getElementById("highlightColor").style.display = "none"),
    (document.getElementById("highlightColorinput").checked = !1),
    (document.getElementById("boldinput").checked = !1),
    (document.getElementById("italicinput").checked = !1),
    (document.getElementById("stinput").checked = !1),
    (document.getElementById("underinput").checked = !1),
    (document.getElementById("boxinput").checked = !1),
    (document.getElementById("repeatinput").checked = !1),
    (document.getElementById("holidayinput").checked = !1),
    (document.getElementById("notescolor").value = "#000000"),
    (document.getElementById("freq").value = "1");
}
function editadvancedstuff(e) {
  var t = localStorage.getItem("Dragged").slice(15, 18);
  let n = JSON.parse(localStorage.getItem("data"));
  var a =
    n.week[Number(t[0])][Number(t[1])].event[
      n.week[Number(t[0])][Number(t[1])].order[Number(t[2]) - Number(1)]
    ];
  if ("ㅤ" == a.context) return;
  (n.week[Number(t[0])][Number(t[1])].event[
    n.week[Number(t[0])][Number(t[1])].order[Number(t[2]) - Number(1)]
  ] = standardevent),
    localStorage.setItem("data", JSON.stringify(n)),
    (n = JSON.stringify(n)),
    reloadcalendar(),
    (document.getElementById("context").value = a.context);
  let l = a.timeS.toString(),
    r = a.timeE.toString();
  for ("" == l && (l = "9999"), "" == r && (l = "9999"); l.length < 4; )
    l = "0" + l;
  for (; r.length < 4; ) r = "0" + r;
  (l = l.slice(0, 2) + ":" + l.slice(2, 4)),
    (r = r.slice(0, 2) + ":" + r.slice(2, 4)),
    (document.getElementById("timeS").value = l),
    (document.getElementById("timeE").value = r);
  for (let o = 0; o < a.features.length; o++)
    1 == a.features[o].key &&
      ((document.getElementById("textColorinput").checked = !0),
      (document.getElementById("textColor").style.display = "inline-block"),
      (document.getElementById("textColor").value = a.features[o].color)),
      2 == a.features[o].key &&
        ((document.getElementById("highlightColorinput").checked = !0),
        (document.getElementById("highlightColor").style.display =
          "inline-block"),
        (document.getElementById("highlightColor").value =
          a.features[o].color)),
      3 == a.features[o].key &&
        (document.getElementById("boldinput").checked = !0),
      4 == a.features[o].key &&
        (document.getElementById("italicinput").checked = !0),
      5 == a.features[o].key &&
        (document.getElementById("stinput").checked = !0),
      6 == a.features[o].key &&
        (document.getElementById("underinput").checked = !0),
      7 == a.features[o].key &&
        (document.getElementById("boxinput").checked = !0);
}
function editpaste(e) {
  var t = localStorage.getItem("Dragged").slice(15, 18);
  let n = JSON.parse(localStorage.getItem("data"));
  var a =
    n.week[Number(t[0])][Number(t[1])].event[
      n.week[Number(t[0])][Number(t[1])].order[Number(t[2]) - Number(1)]
    ];
  reloadcalendar(), (document.getElementById("context").value = a.context);
  let l = a.timeS.toString(),
    r = a.timeE.toString();
  for ("" == l && (l = "9999"), "" == r && (l = "9999"); l.length < 4; )
    l = "0" + l;
  for (; r.length < 4; ) r = "0" + r;
  (l = l.slice(0, 2) + ":" + l.slice(2, 4)),
    (r = r.slice(0, 2) + ":" + r.slice(2, 4)),
    (document.getElementById("timeS").value = l),
    (document.getElementById("timeE").value = r);
  for (let o = 0; o < a.features.length; o++)
    1 == a.features[o].key &&
      ((document.getElementById("textColorinput").checked = !0),
      (document.getElementById("textColor").style.display = "inline-block"),
      (document.getElementById("textColor").value = a.features[o].color),
      (document.getElementById("textpresetColor").style.display =
        "inline-block")),
      2 == a.features[o].key &&
        ((document.getElementById("highlightColorinput").checked = !0),
        (document.getElementById("highlightColor").style.display =
          "inline-block"),
        (document.getElementById("highlightColor").value = a.features[o].color),
        (document.getElementById("highlightpresetColor").style.display =
          "inline-block")),
      3 == a.features[o].key &&
        (document.getElementById("boldinput").checked = !0),
      4 == a.features[o].key &&
        (document.getElementById("italicinput").checked = !0),
      5 == a.features[o].key &&
        (document.getElementById("stinput").checked = !0),
      6 == a.features[o].key &&
        (document.getElementById("underinput").checked = !0),
      7 == a.features[o].key &&
        (document.getElementById("boxinput").checked = !0);
}
function nextweek() {
  let e = JSON.parse(localStorage.getItem("data")),
    t = e.week,
    n = [];
  for (let a = 0; a < 9; a++) n.push(t[a + 1]);
  n.push(standardweek), (e.week = n);
  let l = e.startday;
  (e.startday =
    Number(e.startday) + 7 > monthdays[Number(e.startmonth) - Number(1)]
      ? Number(e.startday) +
        7 -
        Number(monthdays[Number(e.startmonth) - Number(1)])
      : Number(e.startday) + 7),
    (e.startmonth =
      Number(l) + 7 > monthdays[Number(e.startmonth) - Number(1)]
        ? (Number(e.startmonth) + Number(1)) % 12 == 0
          ? 12
          : (Number(e.startmonth) + Number(1)) % 12
        : e.startmonth),
    localStorage.setItem("data", JSON.stringify(e)),
    reloadcalendar();
}
function togglemodes() {
  "y" == localStorage.getItem("phone")
    ? localStorage.setItem("phone", "n")
    : localStorage.setItem("phone", "y"),
    location.reload();
}
function dragdel(e) {
  var t = localStorage.getItem("Dragged").slice(15, 18);
  let n = JSON.parse(localStorage.getItem("data"));
  confirm("Sure to delete this?")
    ? ((n.week[Number(t[0])][Number(t[1])].event[
        n.week[Number(t[0])][Number(t[1])].order[Number(t[2]) - Number(1)]
      ] = standardevent),
      localStorage.setItem("data", JSON.stringify(n)),
      reloadcalendar())
    : alert("Operation Cancelled.");
}
function padd(e) {
  e.classList.contains("pactive")
    ? e.classList.remove("pactive")
    : e.classList.add("pactive"),
    console.log(e.children),
    Array.prototype.slice.call(e.parentElement.children).forEach((e) => {
      (e.style.backgroundColor = "#FFFFFF"), (e.children[0].checked = !1);
    }),
    Array.prototype.slice
      .call(document.getElementsByClassName("pactive"))
      .forEach((e) => {
        (e.style.backgroundColor = "#def7ff"), (e.children[0].checked = !0);
      });
}
function showtrans(e = "") {
  (document.getElementById("maindoc").style.overflow = "hidden"),
    (document.getElementById("autoplayer").style.display = "block"),
    ($("#autoplayertext")[0].innerHTML = e),
    $("#biggest").hide();
}
function hidetrans() {
  (document.getElementById("maindoc").style.overflow = "visible"),
    (document.getElementById("autoplayer").style.display = "none"),
    ($("#autoplayertext")[0].innerHTML = ""),
    $("#biggest").show();
}
document.addEventListener("DOMContentLoaded", (e) => {
  var t = null;
  function n(e) {
    (this.style.opacity = "0.4"),
      (t = this),
      (e.dataTransfer.effectAllowed = "move"),
      e.dataTransfer.setData("text/html", this.innerHTML),
      localStorage.setItem("Dragged", this.innerHTML);
  }
  function a(e) {
    return (
      e.preventDefault && e.preventDefault(),
      (e.dataTransfer.dropEffect = "move"),
      !1
    );
  }
  function l(e) {
    this.classList.add("over");
  }
  function r(e) {
    this.classList.remove("over");
  }
  function o(e) {
    if ((e.stopPropagation && e.stopPropagation(), t != this)) {
      (t.innerHTML = this.innerHTML),
        (this.innerHTML = e.dataTransfer.getData("text/html"));
      var n = this.parentNode.classList[1].slice(-3, -2),
        a = this.parentNode.classList[1].slice(-1),
        l = JSON.parse(localStorage.getItem("data"));
      let r = [],
        o = [];
      for (let s = 0; s < 4; s++)
        r.push(
          Number(
            document
              .getElementById("container")
              .children[s].children[
                document.getElementById("container").children[s].children
                  .length - 1
              ].id.slice(-1)
          ) - 1
        );
      for (let i = 0; i < 4; i++) o.push(l.week[a][n].order[r[i]]);
      (l.week[a][n].order = o),
        localStorage.setItem("data", JSON.stringify(l)),
        reloadcalendar();
    }
    return !1;
  }
  function s(e) {
    (this.style.opacity = "1"),
      i.forEach(function (e) {
        e.classList.remove("over");
      });
  }
  let i = document.querySelectorAll(".container .box");
  i.forEach(function (e) {
    e.addEventListener("dragstart", n, !1),
      e.addEventListener("dragenter", l, !1),
      e.addEventListener("dragover", a, !1),
      e.addEventListener("dragleave", r, !1),
      e.addEventListener("drop", o, !1),
      e.addEventListener("dragend", s, !1);
  });
});
var modal = document.getElementById("myModal"),
  btn = document.getElementById("calendar"),
  span = document.getElementsByClassName("close")[0];
function showmodal(e) {
  clearinputs(), (modal.style.display = "block");
  var t = JSON.parse(localStorage.getItem("modal"));
  t.yn = !0;
  var n = JSON.parse(localStorage.getItem("data"));
  console.log(e.classList[2].slice(-1)),
    console.log(n.week[e.classList[2].slice(-1)][e.classList[2].slice(-3, -2)]),
    !0 ==
      n.week[e.classList[2].slice(-1)][e.classList[2].slice(-3, -2)].holiday &&
      (document.getElementById("holidayinput").checked = !0);
  let a = document.createElement("span");
  (a.innerHTML =
    n.week[e.classList[2].slice(-1)][e.classList[2].slice(-3, -2)].notes),
    void 0 == a.children[0]
      ? (document.getElementById("notesinput").value = a.innerHTML)
      : ((document.getElementById("notesinput").value =
          a.children[0].innerHTML),
        (document.getElementById("notescolor").value = rgbToHex(
          a.children[0].style.color
        )));
  var l = 1 == e.classList[1].length ? "0" + e.classList[1] : e.classList[1];
  console.log(l);
  var r =
      1 == e.children[0].innerHTML.length
        ? "0" + e.children[0].innerHTML
        : e.children[0].innerHTML,
    o = (8 > Number(l) ? "2024-" : "2023-") + l + "-" + r;
  (t.date = o),
    localStorage.setItem("modal", JSON.stringify(t)),
    (document.getElementById("eventdate").value = o),
    (document.getElementById("scdate").value = o),
    document.getElementById("ecdate").setAttribute("min", o),
    console.log(e.children);
  for (let s = 0; s < 4; s++) {
    (document.getElementById("container").children[s].innerHTML = ""),
      (document.getElementById("container").children[s].oncontextmenu =
        function (e) {
          if (confirm("Are you sure to delete this?")) {
            var t = e.srcElement;
            let n = 0,
              a = t;
            for (; 0 == n; ) "DIV" !== a.tagName ? (a = a.parentNode) : (n = 1);
            let l = [
                a.parentNode.classList[1].slice(-3, -2),
                a.parentNode.classList[1].slice(-1),
              ],
              r = Number(a.children[0].id.slice(-1)) - Number(1),
              o = JSON.parse(localStorage.getItem("data"));
            for (let s = Number(l[1]) + Number(1); s < 10; s++) {
              console.log("week no:", s);
              for (let i = 0; i < o.week[s][l[0]].event.length; i++)
                Number(o.week[s][l[0]].event[i].timeS) ==
                  Number(
                    o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]].timeS
                  ) &&
                  Number(o.week[s][l[0]].event[i].timeE) ==
                    Number(
                      o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]]
                        .timeE
                    ) &&
                  o.week[s][l[0]].event[i].context ==
                    o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]]
                      .context &&
                  (console.log("found"),
                  document.getElementById("addel").checked &&
                    ((o.week[s][l[0]].event[i].timeS = ""),
                    (o.week[s][l[0]].event[i].timeE = ""),
                    (o.week[s][l[0]].event[i].context = "ㅤ"),
                    (o.week[s][l[0]].event[i].features = [])));
            }
            (o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]].timeS = ""),
              (o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]].timeE =
                ""),
              (o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]].context =
                "ㅤ"),
              (o.week[l[1]][l[0]].event[o.week[l[1]][l[0]].order[r]].features =
                []),
              localStorage.setItem("data", JSON.stringify(o)),
              reloadcalendar();
          }
          return !1;
        }),
      document.getElementById("container").classList.add(e.classList[2]);
    let i = 2 * s + 3;
    var d = document.createElement("span");
    d.setAttribute("id", "o" + e.children[i].id),
      (d.innerHTML = e.children[i].innerHTML),
      document.getElementById("container").children[s].append(d);
  }
}
function showphonemodal(e) {
  $("#phonemodal")[0].style.transform = "translateY(0vh)";
  var t = e.classList[2].slice(1, 2),
    n = e.classList[2].slice(-1),
    a = 1 == e.classList[1].length ? "0" + e.classList[1] : e.classList[1];
  console.log(a);
  var l =
    1 == e.parentElement.children[0].children[2].innerHTML.length
      ? "0" + e.parentElement.children[0].children[2].innerHTML
      : e.parentElement.children[0].children[2].innerHTML;
  scrollock(!0, [Number(n), Number(t)]);
  var r = (8 > Number(a) ? "2024-" : "2023-") + a + "-" + l;
  (document.getElementById("pscdate").value = r),
    (document.getElementById("clickdate").value = r),
    (document.getElementById("mdate").value = r),
    console.log(r),
    localStorage.setItem("phonemodal", JSON.stringify({ page: 1 }));
  let o = JSON.parse(localStorage.getItem("data"));
  (document.getElementById("pitems").className = ""),
    document.getElementById("pitems").classList.add(n + t),
    (document.getElementById("plist1").innerHTML = getdata(o, n, t, 1)),
    (document.getElementById("plist2").innerHTML = getdata(o, n, t, 2)),
    (document.getElementById("plist3").innerHTML = getdata(o, n, t, 3)),
    (document.getElementById("plist4").innerHTML = getdata(o, n, t, 4)),
    (
      JSON.parse(localStorage.getItem("scrolllist"))
        .slice(0, 7 * Number(n) + Number(t))
        .reduce((e, t) => e + t, 0) + 12
    ).scrl();
  let s = document.createElement("span");
  (s.innerHTML = o.week[n][t].notes),
    void 0 == s.children[0]
      ? (document.getElementById("pnotes").value = s.innerHTML)
      : ((document.getElementById("pnotes").value = s.children[0].innerHTML),
        (document.getElementById("pnotesc").value = rgbToHex(
          s.children[0].style.color
        )));
}
function scrollock(e = !1, t = [0, 0]) {
  e
    ? localStorage.setItem("scrollock", JSON.stringify({ active: !0, date: t }))
    : localStorage.setItem("scrollock", JSON.stringify({ active: !1 }));
}
function closephonemodal() {
  showtodaybtn(),
    (document.getElementById("easybuttons").style.display = "block"),
    ($("#phonemodal")[0].style.transform = "translateY(55vh)"),
    reloadcalendar();
}
function showtodaybtn() {
  $("#tdybtn").show();
}
function presstodaybtn() {
  $("#tdybtn").hide(), scrollock(!1), reloadcalendar();
}
function cleardivs() {
  (document.getElementById("block1").style.display = "none"),
    (document.getElementById("block2").style.display = "none");
}
(span.onclick = function () {
  var e = JSON.parse(localStorage.getItem("modal"));
  (e.yn = !1),
    localStorage.setItem("modal", JSON.stringify(e)),
    (modal.style.display = "none"),
    document
      .getElementById("container")
      .classList.remove(document.getElementById("container").classList[1]);
}),
  (window.onclick = function (e) {
    if (e.target == modal) {
      var t = JSON.parse(localStorage.getItem("modal"));
      (t.yn = !1),
        localStorage.setItem("modal", JSON.stringify(t)),
        (modal.style.display = "none"),
        document
          .getElementById("container")
          .classList.remove(document.getElementById("container").classList[1]);
    }
  }),
  window,
  $("#mdate").on("change", () => {
    $(
      ".d" + $("#mdate")[0].value.rC() + "w" + $("#mdate")[0].value.rR()
    )[0].click();
  }),
  document.getElementById("left-arrow").addEventListener("click", function () {
    var e = JSON.parse(localStorage.getItem("phonemodal")).page;
    0 == (e = Number(e) - 1) && (e = 1),
      cleardivs(),
      (document.getElementById("block" + e).style.display = "block");
    var t = JSON.parse(localStorage.getItem("phonemodal"));
    (t.page = e), localStorage.setItem("phonemodal", JSON.stringify(t));
  }),
  document.getElementById("right-arrow").addEventListener("click", function () {
    var e = JSON.parse(localStorage.getItem("phonemodal")).page;
    5 == (e = Number(e) + 1) && (e = 4),
      cleardivs(),
      (document.getElementById("block" + e).style.display = "block");
    var t = JSON.parse(localStorage.getItem("phonemodal"));
    (t.page = e), localStorage.setItem("phonemodal", JSON.stringify(t));
  });
var el = document.getElementById("pitems"),
  sortable = Sortable.create(el, {
    swap: !0,
    onEnd: function (e) {
      let t = document.getElementById("pitems").className[0],
        n = document.getElementById("pitems").className[1],
        a = JSON.parse(localStorage.getItem("data")),
        l = a.week[t][n].order,
        r = l,
        o = l[e.newIndex];
      (r[e.newIndex] = r[e.oldIndex]),
        (r[e.oldIndex] = o),
        console.log(r),
        (a.week[t][n].order = r),
        localStorage.setItem("data", JSON.stringify(a)),
        console.log(e),
        (document.getElementById("pitems").innerHTML = "");
      for (let s = 0; s < 4; s++) {
        let i = document.createElement("li"),
          d = document.createElement("li");
        i.setAttribute("id", "plist" + (s + 1)),
          d.setAttribute("onclick", "peditt(" + s + ")"),
          (i.innerHTML = getdata(a, t, n, s + 1)),
          (d.innerHTML = getdata(a, t, n, s + 1)),
          document.getElementById("pitems").appendChild(i);
      }
      reloadcalendar();
    },
  });
function peditt(e) {
  let t = JSON.parse(localStorage.getItem("data")),
    n = document.getElementById("pitems").className[0],
    a = document.getElementById("pitems").className[1];
  if (confirm("Sure to edit?")) {
    let l = t.week[n][a].event[t.week[n][a].order[e]];
    (t.week[n][a].event[t.week[n][a].order[e]] = standardevent),
      Array.prototype.slice
        .call(document.getElementsByClassName("pactive"))
        .forEach((e) => {
          (e.className = ""),
            (e.children[0].checked = !1),
            (e.style.backgroundColor = "#FFFFFF");
        }),
      console.log(l),
      (document.getElementById("mcontent").value = l.context),
      (document.getElementById("mstime").value = l.timeS),
      (document.getElementById("msdtime").value =
        l.timeS.toString().padStart(4, "0").slice(0, 2) +
        ":" +
        l.timeS.toString().padStart(4, "0").slice(2)),
      (document.getElementById("metime").value = l.timeE),
      (document.getElementById("medtime").value =
        l.timeE.toString().padStart(4, "0").slice(0, 2) +
        ":" +
        l.timeE.toString().padStart(4, "0").slice(2));
    for (let r = 0; r < l.features.length; r++)
      document.getElementById(pedit[l.features[r].key]).parentElement.click(),
        1 == Number(l.features[r].key) &&
          (document.getElementById("ptcc").value = l.features[r].color),
        2 == Number(l.features[r].key) &&
          (document.getElementById("phighc").value = l.features[r].color);
    document.getElementById("left-arrow").click(),
      localStorage.setItem("data", JSON.stringify(t)),
      reloadcalendar(),
      rslist();
  }
}
function rslist(e = !1) {
  let t = document.getElementById("pitems").className[0],
    n = document.getElementById("pitems").className[1],
    a = JSON.parse(localStorage.getItem("data"));
  document.getElementById("pitems").innerHTML = "";
  for (let l = 0; l < 4; l++) {
    let r = document.createElement("li"),
      o = document.createElement("li");
    r.setAttribute("id", "plist" + (l + 1)),
      o.setAttribute("onclick", "peditt(" + l + ")"),
      (r.innerHTML = getdata(a, t, n, l + 1)),
      (o.innerHTML = getdata(a, t, n, l + 1)),
      document.getElementById("pitems").appendChild(r);
  }
  !0 == e &&
    $(
      ".d" + $("#mdate")[0].value.rC() + "w" + $("#mdate")[0].value.rR()
    )[0].click();
}
function phonefrac() {
  let e = prompt("Upper"),
    t = prompt("Lower"),
    n = "";
  if (!isNaN(e) && !isNaN(t)) {
    (e = Number(e)), (t = Number(t));
    for (let a = 0; a < e.toString().length; a++) n += fracup[e.toString()[a]];
    n += "⁄";
    for (let l = 0; l < t.toString().length; l++)
      n += fracdown[t.toString()[l]];
    document.getElementById("mcontent").value =
      document.getElementById("mcontent").value + n;
  }
}
document
  .getElementById("phonemodal")
  .addEventListener("touchstart", handleTouchStart, !1),
  document
    .getElementById("phonemodal")
    .addEventListener("touchmove", handleTouchMove, !1);
var xDown = null,
  yDown = null;
function getTouches(e) {
  return e.touches || e.originalEvent.touches;
}
function handleTouchStart(e) {
  let t = getTouches(e)[0];
  (xDown = t.clientX), (yDown = t.clientY);
}
function handleTouchMove(e) {
  if (xDown && yDown) {
    var t,
      n = e.touches[0].clientX,
      a = e.touches[0].clientY,
      l = xDown - n;
    if (Math.abs(l) > Math.abs(yDown - a)) {
      if (l > 0) {
        var r = JSON.parse(localStorage.getItem("phonemodal")).page;
        3 == (r = Number(r) + 1) && (r = 2),
          cleardivs(),
          (document.getElementById("block" + r).style.display = "block");
        var o = JSON.parse(localStorage.getItem("phonemodal"));
        (o.page = r), localStorage.setItem("phonemodal", JSON.stringify(o));
      } else {
        var r = JSON.parse(localStorage.getItem("phonemodal")).page;
        0 == (r = Number(r) - 1) && (r = 1),
          cleardivs(),
          (document.getElementById("block" + r).style.display = "block");
        var o = JSON.parse(localStorage.getItem("phonemodal"));
        (o.page = r), localStorage.setItem("phonemodal", JSON.stringify(o));
      }
    }
    (xDown = null), (yDown = null);
  }
}
function reloadcalendar() {
  (document.getElementById("calendar").innerHTML =
    '\n          <tbody><tr>\n            <th><span style="color: red; font-weight: bold">Sun</span></th>\n            <th>Mon</th>\n            <th>Tue</th>\n            <th>Wed</th>\n            <th>Thurs</th>\n            <th>Fri</th>\n            <th>Sat</th>\n          </tr>\n        </tbody>'),
    (document.getElementById("phonetable").innerHTML =
      "<tr><td></td><td></td></tr>"),
    newcal(JSON.parse(localStorage.getItem("data")));
}
function mobilenewcal(e) {
  $("#parent").hide(),
    $("#easytable").show(),
    $("#phonetable").html("<tr><td></td><td></td></tr>");
  let t = new Date(),
    n = [];
  t = returnrowcol(
    t.getFullYear() +
      "-" +
      String(t.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(t.getDate()).padStart(2, "0")
  );
  for (let a = 0; a < 10; a++)
    for (let l = 0; l < 7; l++) {
      let r = void 0 !== e.week[a][l].color ? e.week[a][l].color : "#FFFFFF",
        o = $("<td></td>")
          .addClass("bigtd")
          .css("background-color", r)
          .css("text-align", "center")
          .append($("<span></span>").addClass("bigday").text(day[l])[0])
          .append($("<br>")[0])
          .append(
            $("<span></span>")
              .addClass("bigdate")
              .text(
                returnrowcol("2024-01-17", !0)
                  .addDays(7 * a + l)
                  .slice(-2)
              )
              .addClass(!0 == e.week[a][l].holiday || 0 == l ? "sun" : "")[0]
          ),
        s = $("<td></td>")
          .addClass("bigtditem")
          .addClass(
            returnrowcol("2024-01-17", !0)
              .addDays(7 * a + l)
              .slice(-5, -3)
          )
          .addClass("d" + l + "w" + a)
          .attr("onclick", "showphonemodal(this)")
          .append(
            $("<span></span>").addClass("bignotes").html(e.week[a][l].notes)[0]
          );
      for (let i = 1; i < 5; i++)
        "ㅤ" !== getdata(e, a, l, i)
          ? s
              .append(
                $("<span></span>")
                  .attr("id", "data" + a + l + i)
                  .html(getdata(e, a, l, i))
                  .addClass("bigdata")
              )
              .append($("<br>")[0])
          : pass();
      let d = $("<tr></tr>").append(o[0]).append(s[0]);
      $("#phonetable").append(d[0]),
        setTimeout(() => {
          let e = $(".d" + l + "w" + a)[0].offsetHeight;
          n.push(e - 0.5),
            JSON.stringify(t) == JSON.stringify([a, l]) &&
              $(
                ".d" + l + "w" + a
              )[0].parentElement.childNodes[0].childNodes[2].classList.add(
                "today"
              );
        }, 50);
    }
  setTimeout(() => {
    localStorage.setItem("scrolllist", JSON.stringify(n)),
      !0 == JSON.parse(localStorage.getItem("scrollock")).active &&
        (t = JSON.parse(localStorage.getItem("scrollock")).date),
      console.log(t),
      (
        JSON.parse(localStorage.getItem("scrolllist"))
          .slice(0, 7 * Number(t[0]) + Number(t[1]))
          .reduce((e, t) => e + t, 0) + 12
      ).scrl();
  }, 100);
}
function desktopnewcal(e) {
  mobile() &&
    !confirm(
      "This is probably a mobile phone, do you want to continue to stay in complex mode?\nPress cancel to exit"
    ) &&
    (localStorage.setItem("phone", "y"), location.reload()),
    $("#parent").show(),
    $("#easytable").hide(),
    e.startday;
  monthdays[e.startmonth - 1];
  for (let t = 0; t < 10; t++) {
    let n = document.createElement("tr");
    for (let a = 0; a < 7; a++) {
      let l = document.createElement("td");
      (l.style.backgroundColor =
        void 0 !== e.week[t][a].color ? e.week[t][a].color : "#FFFFFF"),
        l.setAttribute("onclick", "showmodal(this)"),
        l.classList.add("tabletd");
      let r = document.createElement("span");
      r.classList.add("date");
      let o = returnrowcol("2024-01-17", !0)
        .addDays(7 * t + a)
        .slice(-5, -3);
      l.classList.add(Number(o).toString()),
        l.classList.add("d" + a + "w" + t),
        r.classList.add(!0 == e.week[t][a].holiday ? "red" : "pass"),
        r.classList.add(0 == a ? "sun" : "pass"),
        (r.innerHTML = returnrowcol("2024-01-17", !0)
          .addDays(7 * t + a)
          .slice(-2)
          .number()),
        l.append(r);
      for (let s = 0; s < 5; s++) {
        let i = document.createElement("span");
        if (
          (0 == s
            ? (i.classList.add("notes"), (i.innerHTML = e.week[t][a].notes))
            : ((i.innerHTML = getdata(e, t, a, s)),
              i.setAttribute(
                "id",
                "data" + t.toString() + a.toString() + s.toString()
              ),
              i.setAttribute("class", "calendarspan")),
          l.append(i),
          s < 5)
        ) {
          let d = document.createElement("div");
          (d.style.height = "4px"), l.append(d);
        }
      }
      n.append(l);
    }
    document.getElementById("calendar").append(n);
  }
  var c = JSON.parse(localStorage.getItem("modal"));
  c.yn &&
    document
      .getElementsByClassName(
        "d" + returnrowcol(c.date)[1] + "w" + returnrowcol(c.date)[0]
      )[0]
      .click();
}
async function newcal(e) {
  "y" == localStorage.getItem("phone") ? mobilenewcal(e) : desktopnewcal(e);
}
function getdata(e, t, n, a) {
  let l = " ";
  (a = e.week[t][n].order[Number(a) - 1]),
    ((event = e.week[t][n].event)[a].timeS =
      "" == event[a].timeS ? "" : event[a].timeS.toString().padStart(4, "0")),
    (event[a].timeE =
      "" == event[a].timeE ? "" : event[a].timeE.toString().padStart(4, "0")),
    (l =
      "9999" == event[a].timeS.toString() && "9999" == event[a].timeE.toString()
        ? "　 　 - 　 　 " + event[a].context
        : "" == event[a].timeS
        ? event[a].context
        : event[a].timeS + " - " + event[a].timeE + " " + event[a].context);
  for (let r = 0; r < event[a].features.length; r++)
    "" == event[a].features[r].color
      ? (event[a].features[r].color = "'")
      : (event[a].features[r].color = event[a].features[r].color + "'"),
      (l =
        e.modifiers[Number(Number(event[a].features[r].key))] +
        event[a].features[r].color +
        ">" +
        l +
        e.modifiers[0]);
  return l;
}
function getdatediff(e, t) {
  return (
    (e = returnrowcol(e)),
    7 * (t = returnrowcol(t))[0] + t[1] - (7 * e[0] + e[1])
  );
}
function ucolor(e, t, n) {
  (e = returnrowcol(e[0].value)),
    (t = returnrowcol(t[0].value)),
    (n = n[0].value);
  let a = JSON.parse(localStorage.getItem("data"));
  if (t[0] > 9) {
    alert("Check your date again");
    return;
  }
  if (confirm("Are you sure to change color? This is irreversible.")) {
    let l = 7 * e[0] + e[1];
    for (let r = 0; r < Number(7 * t[0] + t[1]) - l + 1; r++) {
      let o = l + r,
        s = Math.floor(o / 7),
        i = o - 7 * Math.floor(o / 7);
      a.week[s][i].color = n;
    }
    localStorage.setItem("data", JSON.stringify(a)), reloadcalendar();
  }
}
function pdel(e) {
  if (confirm("Are you sure to delete?")) {
    var t = Number(e.id.slice(-1)) - 1;
    let n = JSON.parse(localStorage.getItem("data")),
      a = $("#mdate")[0].value.rR(),
      l = $("#mdate")[0].value.rC();
    (n.week[a][l].event[n.week[a][l].order[t]] = standardevent),
      localStorage.setItem("data", JSON.stringify(n)),
      reloadcalendar(),
      $(".d" + l + "w" + a)[0].click();
  }
}
async function savejson2() {
  showtrans("Saving your data"),
    await fetch(
      "https://api.sheetson.com/v2/sheets/Data/2?t=" + Math.random(),
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
          "X-Spreadsheet-Id": "1z2B2ksSXrNQU04tvorH0DUiZOpxIrOPqw_ioNdJV4q0",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Data: localStorage.getItem("data") }),
      }
    )
      .then((e) => e.json())
      .then((e) => console.log(e)),
    alert("Done"),
    hidetrans();
}
async function getcloud() {
  showtrans("Fetching your data"),
    await fetch(
      "https://api.sheetson.com/v2/sheets/Data/2?t=" + Math.random(),
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
          "X-Spreadsheet-Id": "1z2B2ksSXrNQU04tvorH0DUiZOpxIrOPqw_ioNdJV4q0",
          "Content-Type": "application/json",
        },
      }
    )
      .then((e) => e.json())
      .then((e) => {
        "code" in e
          ? alert("Unsuccessful!")
          : (localStorage.setItem("data", e.Data),
            localStorage.setItem("scrollock", JSON.stringify({ active: !1 }))),
          console.log(e);
      }),
    await reloadcalendar(),
    hidetrans();
}
async function loadjson2() {
  await getcloud();
}
async function getgetcloud() {
  await getcloud();
}
function savejson() {
  var e = document.createElement("a"),
    t = new Blob([localStorage.getItem("data")], { type: "text/plain" });
  (e.href = URL.createObjectURL(t)), (e.download = "calendar.json"), e.click();
}
function importjson() {
  var e = document.createElement("input");
  e.setAttribute("type", "file"),
    e.setAttribute("hidden", !0),
    e.setAttribute("onchange", "loadfile()"),
    e.setAttribute("id", "inputfile"),
    e.setAttribute("accept", ".json"),
    document.body.appendChild(e),
    e.click();
}
function loadfile() {
  var e = document.getElementById("inputfile").files[0];
  if (!e) {
    alert("problem");
    return;
  }
  var t = new FileReader();
  t.readAsText(e, "UTF-8"),
    (t.onload = function (e) {
      localStorage.setItem("data", JSON.stringify(JSON.parse(e.target.result)));
    }),
    (t.onerror = function (e) {
      document.getElementById("fileContents").innerHTML = "error reading file";
    });
}
let _filesToLoad, _drawingBoard, _start;
function fileLoaded(e) {
  if (!e) {
    (_filesToLoad = -1), $(".drawingBoard span").text("Failed to load data.");
    return;
  }
  0 == --_filesToLoad &&
    ($(".drawingBoard").removeClass("loading"),
    (_drawingBoard = HanziLookup.DrawingBoard(
      $(".drawingBoard").first(),
      lookup
    )),
    $(".cmdUndo").click(function (e) {
      _drawingBoard.undoStroke(), _drawingBoard.redraw(), lookup();
    }),
    $(".cmdClear").click(function (e) {
      _drawingBoard.clearCanvas(), _drawingBoard.redraw(), lookup();
    }));
}
function lookup() {
  let e = [],
    t = [],
    n = [];
  var a = _drawingBoard.cloneStrokes();
  _start = new Date().getTime();
  var l = new HanziLookup.AnalyzedCharacter(a);
  new HanziLookup.Matcher("orig").match(l, 8, function (t) {
    for (var n = 0; n != t.length; ++n) e.push(t[n].character);
  }),
    new HanziLookup.Matcher("mmah").match(l, 8, function (e) {
      for (var n = 0; n != e.length; ++n) t.push(e[n].character);
    });
  for (let r = 0; r < 16; r++) {
    let o = Math.floor(r / 2),
      s = r % 2 == 0 ? e[o] : t[o];
    void 0 !== s && !n.includes(s) && n.length < 10 && n.push(s);
  }
  showResults(document.getElementsByClassName("rechars")[0], n);
}
function showResults(e, t) {
  e.innerHTML = "";
  for (var n = 0; n != t.length; ++n) {
    let a = document.createElement("span");
    a.setAttribute("onclick", "chitype(this)"),
      (a.innerHTML = t[n]),
      e.append(a);
  }
}
function chitype(e) {
  $(".cmdClear")[0].click();
  let t = document.getElementById(localStorage.getItem("currtype"));
  if ("INPUT" == t.nodeName.toUpperCase()) {
    let n = t.selectionStart;
    (t.value =
      t.value.slice(0, t.selectionStart) +
      e.innerHTML +
      t.value.slice(t.selectionStart)),
      (t.selectionStart = Number(n) + Number(1)),
      (t.selectionEnd = Number(n) + Number(1)),
      cpn();
  }
}
function holiday() {
  if (document.getElementById("holidayinput").checked) {
    let e = JSON.parse(localStorage.getItem("data")),
      t = [
        document.getElementById("container").classList[1].slice(-1),
        document.getElementById("container").classList[1].slice(-3, -2),
      ];
    (e.week[t[0]][t[1]].holiday = !0),
      localStorage.setItem("data", JSON.stringify(e));
  } else {
    let n = JSON.parse(localStorage.getItem("data")),
      a = [
        document.getElementById("container").classList[1].slice(-1),
        document.getElementById("container").classList[1].slice(-3, -2),
      ];
    (n.week[a[0]][a[1]].holiday = !1),
      localStorage.setItem("data", JSON.stringify(n));
  }
  reloadcalendar();
}
function pholiday() {
  if (document.getElementById("chcbox").checked) {
    let e = JSON.parse(localStorage.getItem("data")),
      t = returnrowcol(document.getElementById("clickdate").value);
    (e.week[t[0]][t[1]].holiday = !0),
      localStorage.setItem("data", JSON.stringify(e));
  } else {
    let n = JSON.parse(localStorage.getItem("data")),
      a = returnrowcol(document.getElementById("clickdate").value);
    (n.week[a[0]][a[1]].holiday = !1),
      localStorage.setItem("data", JSON.stringify(n));
  }
  reloadcalendar();
}
function showkeyboard(e, t) {
  "n" == e &&
    (localStorage.setItem("currtype", t.getAttribute("id")),
    (document.getElementById("easykeyboard").style.transform =
      "translateY(0px)"));
}
window.addEventListener("load", (e) => {
  (_filesToLoad = 2),
    HanziLookup.init(
      "mmah",
      "https://amescalendar.glitch.me/mmah.json",
      fileLoaded
    ),
    HanziLookup.init(
      "orig",
      "https://amescalendar.glitch.me/orig.json",
      fileLoaded
    );
}),
  $("#phonemodal").on("click", function (e) {
    if (
      ("MCONTENT" !== e.target.id.toUpperCase() &&
        "PNOTES" !== e.target.id.toUpperCase() &&
        (document.getElementById("easykeyboard").style.transform =
          "translateY(380px)"),
      null !== e.target.closest("li") &&
        "ㅤ" !== e.target.closest("li").innerHTML)
    ) {
      let t = e.target.closest("li").id.toUpperCase().toLowerCase();
      console.log(t), peditt(Number(t.substr(t.length - 1)) - 1);
    }
  }),
  $(".nk").on("touchstart", function (e) {
    let t = e.target;
    console.log(t.innerHTML);
    let n = document.getElementById(localStorage.getItem("currtype"));
    if ("INPUT" == n.nodeName.toUpperCase()) {
      let a = n.selectionStart;
      if (
        ((n.value =
          n.value.slice(0, n.selectionStart) +
          t.innerHTML +
          n.value.slice(n.selectionStart)),
        (n.selectionStart = Number(a) + Number(1)),
        (n.selectionEnd = Number(a) + Number(1)),
        "cap" == localStorage.getItem("capstatus"))
      ) {
        let l = document.getElementsByClassName("nk");
        for (var r = 0; r < l.length; r++)
          l[r].innerHTML = l[r].innerHTML.toLowerCase();
        localStorage.setItem("capstatus", "");
      }
      t.classList.add("ak"),
        (t.style.height = "86px"),
        (t.style.marginTop = "-48px"),
        (t.style.backgroundColor = "white");
      let o = t.innerHTML;
      (t.innerHTML = t.innerHTML + "<br>" + t.innerHTML),
        cpn(),
        setTimeout(function () {
          (t.innerHTML = o), t.removeAttribute("style");
        }, 80);
    }
  }),
  $(".sp").on("touchstart", function (e) {
    let t = e.target;
    console.log(t.innerHTML);
    let n = document.getElementById(localStorage.getItem("currtype"));
    if ("INPUT" == n.nodeName.toUpperCase()) {
      let a = n.selectionStart;
      (n.value =
        n.value.slice(0, n.selectionStart) +
        " " +
        n.value.slice(n.selectionStart)),
        (n.selectionStart = Number(a) + Number(1)),
        (n.selectionEnd = Number(a) + Number(1)),
        cpn();
    }
  }),
  $(".no").on("touchstart", function (e) {
    "none" == document.getElementById("numbers").style.display
      ? ($("#letters").hide(), $("#numbers").show())
      : ($("#letters").show(), $("#numbers").hide());
  }),
  $(".nuk").on("touchstart", function (e) {
    let t = e.target.innerHTML;
    "&lt;" == t ? (t = "<") : pass(),
      "&gt;" == t ? (t = ">") : pass(),
      "&amp;" == t ? (t = "&") : pass();
    let n = document.getElementById(localStorage.getItem("currtype"));
    if ("INPUT" == n.nodeName.toUpperCase()) {
      let a = n.selectionStart;
      if (
        ((n.value =
          n.value.slice(0, n.selectionStart) +
          t +
          n.value.slice(n.selectionStart)),
        (n.selectionStart = Number(a) + Number(1)),
        cpn(),
        "cap" == localStorage.getItem("capstatus"))
      ) {
        let l = document.getElementsByClassName("nk");
        for (var r = 0; r < l.length; r++)
          l[r].innerHTML = l[r].innerHTML.toLowerCase();
        localStorage.setItem("capstatus", "");
      }
    }
  }),
  $(".do").on("touchstart", function (e) {
    document.getElementById("easykeyboard").style.transform =
      "translateY(380px)";
  }),
  $(".fc").on("touchstart", function (e) {
    let t = e.target;
    console.log(t.innerHTML);
    let n = document.getElementById(localStorage.getItem("currtype"));
    if ("INPUT" == n.nodeName.toUpperCase()) {
      if ("⇧" == t.innerHTML) {
        if ("cap" !== localStorage.getItem("capstatus")) {
          let a = document.getElementsByClassName("nk");
          for (var l = 0; l < a.length; l++)
            a[l].innerHTML = a[l].innerHTML.toUpperCase();
          localStorage.setItem("capstatus", "cap");
          return;
        }
        if ("cap" == localStorage.getItem("capstatus")) {
          let r = document.getElementsByClassName("nk");
          for (var l = 0; l < r.length; l++)
            r[l].innerHTML = r[l].innerHTML.toLowerCase();
          localStorage.setItem("capstatus", "");
          return;
        }
      }
      if ("⌫" == t.innerHTML || "Del" == t.innerHTML) {
        let o = n.selectionStart,
          s =
            n.selectionStart == n.selectionEnd
              ? n.selectionStart - 1
              : n.selectionStart;
        (n.value = n.value.slice(0, s) + n.value.slice(n.selectionEnd)),
          (n.selectionStart = Number(o) - Number(1)),
          (n.selectionEnd = Number(o) - Number(1)),
          cpn();
        return;
      }
    }
  }),
  $(".cl").on("touchstart", function (e) {
    "block" == document.getElementById("engkb").style.display
      ? (($("#engkb")[0].style.display = "none"),
        ($("#chikb")[0].style.display = "block"))
      : (($("#engkb")[0].style.display = "block"),
        ($("#chikb")[0].style.display = "none"));
  });
var modn =
    "textColorinput,textColor,highlightColorinput,highlightColor,boldinput,italicinput,stinput,underinput,boxinput",
  mody = "ptc,ptcc,phigh,phighc,pbold,pitalic,pst,pun,pbaw";
function newinput(e, t, n, a) {
  (e = Number(e[0].value.toString().replace(":", ""))),
    (t = Number(t[0].value.toString().replace(":", ""))),
    (n = n[0].value),
    (a = a[0].value);
  let l = JSON.parse(localStorage.getItem("data")),
    r = returnrowcol(a)[0],
    o = returnrowcol(a)[1],
    s = {
      timeS: e,
      timeE: t,
      context: n,
      features:
        "n" == localStorage.getItem("phone")
          ? modifiers(modn)
          : modifiers(mody),
    },
    i = e < 1e3 ? 0 : e < 1400 ? 1 : e < 1545 ? 2 : 3;
  if (
    JSON.stringify(l.week[r][o].event[l.week[r][o].order[i]]) ==
    JSON.stringify(standardevent)
  ) {
    (l.week[r][o].event[l.week[r][o].order[i]] = s),
      localStorage.setItem("data", JSON.stringify(l)),
      reloadcalendar(),
      mobile() ? rslist(!0) : pass();
    return;
  }
  {
    let d = [];
    for (let c = 0; c < 4; c++)
      JSON.stringify(l.week[r][o].event[l.week[r][o].order[c]]) ==
        JSON.stringify(standardevent) && d.push(c);
    if (0 == d.length) {
      alert("Too Much, No space available");
      return;
    }
    (d = d
      .sort(function (e, t) {
        return Math.abs(i - e) - Math.abs(i - t);
      })
      .slice(0, 2)),
      (i =
        e > Number(l.week[r][o].event[l.week[r][o].order[i]].timeS)
          ? d[d.length - 1]
          : d[0]),
      (l.week[r][o].event[l.week[r][o].order[i]] = s),
      localStorage.setItem("data", JSON.stringify(l)),
      reloadcalendar(),
      mobile() ? rslist(!0) : pass();
    return;
  }
}
function modifiers(e) {
  let t = [],
    [n, a, l, r, o, s, i, d, c] = e.split(",");
  return (
    $("#" + n)[0].checked
      ? t.push({ key: 1, color: $("#" + a)[0].value })
      : pass(),
    $("#" + l)[0].checked
      ? t.push({ key: 2, color: $("#" + r)[0].value })
      : pass(),
    $("#" + o)[0].checked ? t.push({ key: 3, color: "" }) : pass(),
    $("#" + s)[0].checked ? t.push({ key: 4, color: "" }) : pass(),
    $("#" + i)[0].checked ? t.push({ key: 5, color: "" }) : pass(),
    $("#" + d)[0].checked ? t.push({ key: 6, color: "" }) : pass(),
    $("#" + c)[0].checked ? t.push({ key: 7, color: "" }) : pass(),
    t
  );
}
function notes() {
  let e = returnrowcol(document.getElementById("eventdate").value),
    t = JSON.parse(localStorage.getItem("data"));
  (t.week[e[0]][e[1]].notes =
    "<span style='color: " +
    document.getElementById("notescolor").value +
    "'>" +
    document.getElementById("notesinput").value +
    "</span>"),
    localStorage.setItem("data", JSON.stringify(t)),
    reloadcalendar();
}
function pnotes() {
  let e = returnrowcol(document.getElementById("mdate").value),
    t = JSON.parse(localStorage.getItem("data"));
  (t.week[e[0]][e[1]].notes =
    "<span style='color: " +
    document.getElementById("pnotesc").value +
    "'>" +
    document.getElementById("pnotes").value +
    "</span>"),
    localStorage.setItem("data", JSON.stringify(t)),
    console.log(
      t,
      e,
      document.getElementById("pnotes").value,
      document.getElementById("pnotesc").value
    ),
    reloadcalendar();
}
function cpn() {
  "pnotes" == localStorage.getItem("currtype") && pnotes();
}
$("#formadd").submit(function (e) {
  e.preventDefault();
}),
  window.addEventListener("load", (e) => {
    "phone".lsCheck("y") && getgetcloud(),
      "data".lsCheck(JSON.stringify(standardstorage)),
      "hpresetcolor".lsCheck(JSON.stringify(["#e6ffcf", "#bfbfbf", "#FFE5EB"])),
      "tpresetcolor".lsCheck(JSON.stringify(["#FF0000", "#BE38F3", "#2D79E3"])),
      "scrollock".lsSave(JSON.stringify({ active: !1 })),
      "modal".lsCheck(JSON.stringify({ yn: !1, date: "" })),
      "lud".lsCheck(!1);
    let t = new Date();
    "lu".lsSave(t.getTime());
    var n = JSON.parse(localStorage.getItem("data"));
    for (
      let a = 0;
      a < JSON.parse(localStorage.getItem("hpresetcolor")).length;
      a++
    )
      "FFFFFF" !== JSON.parse(localStorage.getItem("hpresetcolor"))[a] &&
        ($("#presetColors")[0].options[a].value = JSON.parse(
          localStorage.getItem("hpresetcolor")
        )[a]),
        (document.getElementById("chah" + a).style.backgroundColor = JSON.parse(
          localStorage.getItem("hpresetcolor")
        )[a]),
        document
          .getElementById("chah" + a)
          .setAttribute("onclick", 'cp("h",' + a + ")");
    for (
      let l = 0;
      l < JSON.parse(localStorage.getItem("tpresetcolor")).length;
      l++
    )
      "FFFFFF" !== JSON.parse(localStorage.getItem("tpresetcolor"))[l] &&
        ($("#presetColorst")[0].options[l].value = JSON.parse(
          localStorage.getItem("tpresetcolor")
        )[l]),
        (document.getElementById("chat" + l).style.backgroundColor = JSON.parse(
          localStorage.getItem("tpresetcolor")
        )[l]),
        document
          .getElementById("chat" + l)
          .setAttribute("onclick", 'cp("t",' + l + ")");
    newcal(n),
      ($("#phonemodal")[0].style.transform = "translateY(55vh)"),
      $("#phonemodal").show(),
      ($("#phonemodal")[0].style.transition = "transform 0.6s"),
      (document.getElementById("easykeyboard").style.transform =
        "translateY(380px)"),
      (document.getElementById("easykeyboard").style.transition =
        "transform 0.5s"),
      (document.getElementById("easykeyboard").style.display = "block");
  }),
  (String.prototype.addDays = function (e) {
    var t = new Date(this.valueOf());
    return (
      t.setDate(t.getDate() + e),
      t.getFullYear() +
        "-" +
        String(t.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(t.getDate()).padStart(2, "0")
    );
  }),
  (String.prototype.number = function () {
    return Number(this.valueOf()).toString();
  }),
  (String.prototype.lsCheck = function (e = "") {
    if (null == localStorage.getItem(this.valueOf()))
      return localStorage.setItem(this.valueOf(), e), !0;
  }),
  (String.prototype.lsSave = function (e = "") {
    localStorage.setItem(this.valueOf(), e);
  }),
  (String.prototype.lsGet = function () {
    return localStorage.getItem(this.valueOf());
  }),
  (String.prototype.rR = function (e = "1") {
    return returnrowcol(this.valueOf())[0];
  }),
  (String.prototype.rC = function (e = "1") {
    return returnrowcol(this.valueOf())[1];
  }),
  (Number.prototype.scrl = function () {
    $("html, body").animate({ scrollTop: this.valueOf() + "px" });
  }),
  (String.prototype.scrl = function () {
    $("html, body").animate({ scrollTop: this.valueOf() + "px" });
  });
