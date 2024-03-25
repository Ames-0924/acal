//This page contains reloadcalendar() and newcal()
function reloadcalendar() {
  document.getElementById("calendar").innerHTML =
    '\n          <tbody><tr>\n            <th><span style="color: red; font-weight: bold">Sun</span></th>\n            <th>Mon</th>\n            <th>Tue</th>\n            <th>Wed</th>\n            <th>Thurs</th>\n            <th>Fri</th>\n            <th>Sat</th>\n          </tr>\n        </tbody>';

  document.getElementById("phonetable").innerHTML =
    "<tr><td></td><td></td></tr>";

  newcal(JSON.parse(localStorage.getItem("data")));
}
function mobilenewcal(data) {
  $("#parent").hide();
  $("#easytable").show();

  $("#phonetable").html("<tr><td></td><td></td></tr>");

  let today = new Date();
  let scrolllist = [];
  today = returnrowcol(
    today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0")
  );
  for (let w = 0; w < 10; w++) {
    for (let d = 0; d < 7; d++) {
      let bg =
        data.week[w][d].color !== undefined ? data.week[w][d].color : "#FFFFFF";  
      
      let newtddate = $("<td></td>")
        .addClass("bigtd")
        .css("background-color", bg)
        .css("text-align", "center")
        .append($("<span></span>").addClass("bigday").text(day[d])[0])
        .append($("<br>")[0])
        .append(
          $("<span></span>")
            .addClass("bigdate")
            .text(
              returnrowcol("2024-01-17", true)
                .addDays(w * 7 + d)
                .slice(-2)
            )
            .addClass(data.week[w][d].holiday == true || d == 0 ? "sun" : "")[0]
        );
      let newtd = $("<td></td>")
        .addClass("bigtditem")
        .addClass(
          returnrowcol("2024-01-17", true)
            .addDays(w * 7 + d)
            .slice(-5, -3)
        )
        .addClass("d" + d + "w" + w)
        .attr("onclick", "showphonemodal(this)")
        .append(
          $("<span></span>").addClass("bignotes").html(data.week[w][d].notes)[0]
        );
      for (let i = 1; i < (data.week[w][d].order.length + 1); i++) {
        getdata(data, w, d, i) !== "ㅤ"
          ? newtd
              .append(
                $("<span></span>")
                  .attr("id", "data" + w + d + i)
                  .html(getdata(data, w, d, i))
                  .addClass("bigdata")
              )
              .append($("<br>")[0])
          : pass();
      }
      let newtr = $("<tr></tr>").append(newtddate[0]).append(newtd[0]);
      $("#phonetable").append(newtr[0]);
      setTimeout(() => {
        let height = $(".d" + d + "w" + w)[0].offsetHeight;
        //console.log(height);
        scrolllist.push(height - 0.5);
        if (JSON.stringify(today) == JSON.stringify([w, d])) {
          $(
            ".d" + d + "w" + w
          )[0].parentElement.childNodes[0].childNodes[2].classList.add("today");
        }
      }, 50);
    }
  }
  setTimeout(() => {
    localStorage.setItem("scrolllist", JSON.stringify(scrolllist));
    if (JSON.parse(localStorage.getItem("scrollock")).active == true) {
      today = JSON.parse(localStorage.getItem("scrollock")).date;
    }
    console.log(today);
    (JSON.parse(localStorage.getItem("scrolllist"))
          .slice(0, Number(today[0]) * 7 + Number(today[1]))
          .reduce((partialSum, a) => partialSum + a, 0) + 12).scrl()
  }, 100);
}
function desktopnewcal(data) {
  if (mobile()) {
    if (
      !confirm(
        "This is probably a mobile phone, do you want to continue to stay in complex mode?\nPress cancel to exit"
      )
    ) {
      localStorage.setItem("phone", "y");
      location.reload();
    }
  }
  $("#parent").show();
  $("#easytable").hide();
  let startday = data.startday;
  let startmonth = data.startmonth; // need to remove 1
  let maxdays = monthdays[startmonth - 1];
  for (let w = 0; w < 10; w++) {
    let newtr = document.createElement("tr");
    for (let d = 0; d < 7; d++) {
      let newtd = document.createElement("td");
      newtd.style.backgroundColor =
        data.week[w][d].color !== undefined ? data.week[w][d].color : "#FFFFFF";
      newtd.setAttribute("onclick", "showmodal(this)");
      newtd.classList.add("tabletd");
      let newdate = document.createElement("span");
      newdate.classList.add("date");
      let nsm = returnrowcol("2024-01-17", true).addDays(w * 7 + d).slice(-5, -3)
      newtd.classList.add(Number(nsm).toString());
      newtd.classList.add("d" + d + "w" + w);
      newdate.classList.add(data.week[w][d].holiday == true ? "red" : "pass");
      newdate.classList.add(d == 0 ? "sun" : "pass");
      newdate.innerHTML = returnrowcol("2024-01-17", true)
        .addDays(w * 7 + d)
        .slice(-2)
        .number();
      newtd.append(newdate);
      //td
      for (let i = 0; i < data.week[w][d].order.length + 1; i++) {
        let datespan = document.createElement("span");
        if (i == 0) {
          datespan.classList.add("notes");
          datespan.innerHTML = data.week[w][d].notes;
        } else {
          datespan.innerHTML = getdata(data, w, d, i);
          datespan.setAttribute(
            "id",
            "data" + w.toString() + d.toString() + i.toString()
          );
          datespan.setAttribute("class", "calendarspan");
        }
        newtd.append(datespan);
        //data.week[w][d].order.length
        if (i == 0){
          let max = 0
          for(let k = 0; k < 7; k++){
            if (data.week[w][k].order.length > max){
              max = data.week[w][k].order.length
            }
          let diff = max - data.week[w][d].order.length
          if (diff > 0){
            console.log(diff)
            for (let rep = 0; rep < diff; rep++){
              let abcde = document.createElement("div");
          abcde.style.height = "4px";
          newtd.append(abcde);
              let abcdef = document.createElement("div");
          abcdef.innerHTML = "ㅤ"
          newtd.append(abcdef);
            }
          }
          }
          
        }
        if (i < data.week[w][d].order.length + 1) {
          let abcde = document.createElement("div");
          abcde.style.height = "4px";
          newtd.append(abcde);
        }
      }
      newtr.append(newtd);
    }
    document.getElementById("calendar").append(newtr);
  }
  var asdfgh = JSON.parse(localStorage.getItem("modal"));
  if (asdfgh.yn) {
    document
      .getElementsByClassName(
        "d" + returnrowcol(asdfgh.date)[1] + "w" + returnrowcol(asdfgh.date)[0]
      )[0]
      .click();
  }
}
async function newcal(data) {
  //   document.getElementById('screenwidth').innerHTML = document.documentElement.clientWidth
  if (localStorage.getItem("phone") == "y") {
    mobilenewcal(data);
  } else {
    desktopnewcal(data);
  }
}
function getdata(data, w, d, i) {
  let text = " ";
  i = data.week[w][d].order[Number(i) - 1];
  event = data.week[w][d].event;
  event[i].timeS = event[i].timeS == ""? "" : event[i].timeS.toString().padStart(4, '0')
  event[i].timeE = event[i].timeE == ""? "" :event[i].timeE.toString().padStart(4, '0')
  if (
    event[i].timeS.toString() == "9999" &&
    event[i].timeE.toString() == "9999"
  ) {
    text = "　 　 - 　 　 " + event[i].context;
  } else {
    text =
      event[i].timeS == ""
        ? event[i].context
        : event[i].timeS + " - " + event[i].timeE + " " + event[i].context;
  }
  for (let j = 0; j < event[i].features.length; j++) {
    if (event[i].features[j].color == "") {
      event[i].features[j].color = "'";
    } else {
      event[i].features[j].color = event[i].features[j].color + "'";
    }
    text =
      data.modifiers[Number(Number(event[i].features[j].key))] +
      event[i].features[j].color +
      ">" +
      text +
      data.modifiers[0];
  }
  return text;
}
function getdatediff(start, end) {
  start = returnrowcol(start);
  end = returnrowcol(end);
  return end[0] * 7 + end[1] - (start[0] * 7 + start[1]);
}
