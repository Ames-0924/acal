function cdate() {
  var data = JSON.parse(localStorage.getItem("data"));
  var start = document.getElementById("scdate").value;

  var end = document.getElementById("ecdate").value;
  if (returnrowcol(end)[0] > 9 || returnrowcol(end)[1] > 6) {
    alert("wrong");
    return false;
  } else {
    if (confirm("Are you sure to change color? This is irreversible.")) {
      let found = 0;
      let curri = returnrowcol(start);

      while (found == 0) {
        if (
          Number(curri[0]) == Number(returnrowcol(end)[0]) &&
          Number(curri[1]) == Number(returnrowcol(end)[1])
        ) {
          data.week[curri[0]][curri[1]]["color"] =
            document.getElementById("cdate").value;
          found = 1;
        }

        data.week[curri[0]][curri[1]]["color"] =
          document.getElementById("cdate").value;
        curri[1] = Number(curri[1]) + Number(1);
        if (curri[1] >= 7) {
          curri[1] = 0;
          curri[0] += 1;
        }
      }
      localStorage.setItem("data", JSON.stringify(data));
      reloadcalendar();
    }
  }
}
function pchangecolor() {
  var data = JSON.parse(localStorage.getItem("data"));
  var start = document.getElementById("pscdate").value;
  console.log(start);
  var end = document.getElementById("pecdate").value;
  if (returnrowcol(end)[0] > 9 || returnrowcol(end)[1] > 6) {
    alert("wrong");
    return false;
  } else {
    if (confirm("Are you sure to change color? This is irreversible.")) {
      let found = 0;
      let curri = returnrowcol(start);
      console.log(curri);
      while (found == 0) {
        if (
          Number(curri[0]) == Number(returnrowcol(end)[0]) &&
          Number(curri[1]) == Number(returnrowcol(end)[1])
        ) {
          data.week[curri[0]][curri[1]]["color"] =
            document.getElementById("pcdate").value;
          found = 1;
        }
        console.log("hello");
        console.log(curri[0], curri[1]);
        data.week[curri[0]][curri[1]]["color"] =
          document.getElementById("pcdate").value;
        curri[1] = Number(curri[1]) + Number(1);
        if (curri[1] >= 7) {
          curri[1] = 0;
          curri[0] += 1;
        }
        console.log(curri);
        console.log(returnrowcol(end));
      }
      localStorage.setItem("data", JSON.stringify(data));
      reloadcalendar();
    }
  }
}
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
function newevent() {
  var event = {};
  var a = [];
  event["timeS"] = Number(
    document.getElementById("timeS").value.replaceAll(":", "")
  );
  event["timeE"] = Number(
    document.getElementById("timeE").value.replaceAll(":", "")
  );
  if (document.getElementById("context").value == "") {
    alert("No text");
    return "";
  }
  if (isNaN(event["timeS"]) || isNaN(event["timeE"])) {
    alert("No time provided");
    return "";
  }
  if (event["timeS"] > event["timeE"]) {
    alert("Check your time again");
    return "";
  }

  event["context"] = document.getElementById("context").value;

  if (document.getElementById("textColorinput").checked) {
    let b = {};
    b["key"] = 1;
    b["color"] = document.getElementById("textColor").value;
    a.push(b);
  }
  if (document.getElementById("highlightColorinput").checked) {
    let b = {};
    b["key"] = 2;
    b["color"] = document.getElementById("highlightColor").value;
    a.push(b);
  }
  if (document.getElementById("boldinput").checked) {
    let b = {};
    b["key"] = 3;
    b["color"] = "";
    a.push(b);
  }
  if (document.getElementById("italicinput").checked) {
    let b = {};
    b["key"] = 4;
    b["color"] = "";
    a.push(b);
  }
  if (document.getElementById("stinput").checked) {
    let b = {};
    b["key"] = 5;
    b["color"] = "";
    a.push(b);
  }
  if (document.getElementById("underinput").checked) {
    let b = {};
    b["key"] = 6;
    b["color"] = "";
    a.push(b);
  }
  if (document.getElementById("boxinput").checked) {
    let b = {};
    b["key"] = 7;
    b["color"] = "";
    a.push(b);
  }

  event["features"] = a;
  return [
    event,
    document.getElementById("eventdate").value,
    Number(Number(document.getElementById("prefOr").value) - 1),
  ];
} // output = [result of modal, date]
function submitform() {
  if (document.getElementById("repeatinput").checked) {
    for (
      let i = 0;
      i <
      Math.floor(
        (9 -
          Number(returnrowcol(document.getElementById("eventdate").value)[0])) /
          document.getElementById("freq").value
      ) +
        Number(1);
      i++
    ) {
      addevent(document.getElementById("freq").value * i);
    }
  } else {
    addevent();
  }
  reloadcalendar();
}

function addevent(addrow = 0) {
  var res = newevent();
  if (res == "") {
    return;
  }
  var a = JSON.parse(localStorage.getItem("data"));
  var rowcol = returnrowcol(res[1]);
  if (addrow !== 0) {
    rowcol[0] = Number(rowcol[0]) + Number(addrow);
  }
  console.log(Number(res[0].timeS));
  var order;
  if (res[2] == "") {
    order = res[2];
  } else {
    if (Number(res[0].timeS) <= 1000) {
      order = 0;
    } else {
      if (Number(res[0].timeS) >= 1600) {
        order = 3;
      } else {
        if (Number(res[0].timeS) >= 1400) {
          order = 2;
        } else {
          order = 1;
        }
      }
    }
  }
  console.log(order);
  console.log(a);
  console.log(rowcol);
  console.log(a.week[rowcol[0]][rowcol[1]]);
  console.log(
    a.week[rowcol[0]][rowcol[1]].event[
      a.week[rowcol[0]][rowcol[1]].order[order]
    ]
  );

  if (
    JSON.stringify(
      a.week[rowcol[0]][rowcol[1]].event[
        a.week[rowcol[0]][rowcol[1]].order[order]
      ]
    ) == JSON.stringify(standardevent)
  ) {
    a.week[rowcol[0]][rowcol[1]].event[
      a.week[rowcol[0]][rowcol[1]].order[order]
    ] = res[0];
  } else {
    var unused = clearunused(a.week[rowcol[0]][rowcol[1]].event);
    var crashstart = Number(
      a.week[rowcol[0]][rowcol[1]].event[
        a.week[rowcol[0]][rowcol[1]].order[order]
      ].timeS
    );
    var newstart = Number(res[2].timeS);
    if (crashstart > newstart) {
      let found = false;
      for (let b = order - 1; b > -1; b--) {
        if (
          JSON.stringify(
            a.week[rowcol[0]][rowcol[1]].event[
              a.week[rowcol[0]][rowcol[1]].order[b]
            ]
          ) == JSON.stringify(standardevent)
        ) {
          found = true;
          a.week[rowcol[0]][rowcol[1]].event[
            a.week[rowcol[0]][rowcol[1]].order[b]
          ] = res[0];
        }
        if (found == false) {
          let c = order + (order - b);
          if (c <= 4) {
          }
        }
      }
    } else {
      var unused = clearunused(a.week[rowcol[0]][rowcol[1]].event);
      let smallest = 100;
      for (let i = 0; i < unused.length; i++) {
        if (a.week[rowcol[0]][rowcol[1]].order.indexOf(unused[i]) > order) {
          if (
            a.week[rowcol[0]][rowcol[1]].order.indexOf(unused[i]) - order <
            smallest
          ) {
            smallest =
              a.week[rowcol[0]][rowcol[1]].order.indexOf(unused[i]) - order;
          }
        }
      }
      if (smallest == 100) {
        var unuseda = clearunused(a.week[rowcol[0]][rowcol[1]].event);
        let largest = 100;
        for (let i = 0; i < unused.length; i++) {
          if (a.week[rowcol[0]][rowcol[1]].order.indexOf(unuseda[i]) < order) {
            if (
              order - a.week[rowcol[0]][rowcol[1]].order.indexOf(unuseda[i]) <
              largest
            ) {
              largest =
                order - a.week[rowcol[0]][rowcol[1]].order.indexOf(unuseda[i]);
            }
          }
        }
        if (largest == 100) {
          alert("TOO MUCH");
        } else {
          a.week[rowcol[0]][rowcol[1]].event[
            a.week[rowcol[0]][rowcol[1]].order[Number(order) - Number(largest)]
          ] = res[0];
        }
      } else {
        a.week[rowcol[0]][rowcol[1]].event[
          a.week[rowcol[0]][rowcol[1]].order[Number(order) + Number(smallest)]
        ] = res[0];
      }
    }
  }
  sortexceptunused(a.week[rowcol[0]][rowcol[1]]);
  // console.log(
  //   Math.min.apply(Math, clearunused(a.week[rowcol[0]][rowcol[1]].event))
  // );
  //   a.week[rowcol[0]][rowcol[1]].event[
  //   Math.min.apply(Math, clearunused(a.week[rowcol[0]][rowcol[1]].event))
  // ] = res[0];
  localStorage.setItem("data", JSON.stringify(a));
  // location.reload();
}