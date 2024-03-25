function holiday() {
  if (document.getElementById("holidayinput").checked) {
    let data = JSON.parse(localStorage.getItem("data"));
    let rowcol = [
      document.getElementById("container").classList[1].slice(-1),
      document.getElementById("container").classList[1].slice(-3, -2),
    ];
    data.week[rowcol[0]][rowcol[1]]["holiday"] = true;
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    let data = JSON.parse(localStorage.getItem("data"));
    let rowcol = [
      document.getElementById("container").classList[1].slice(-1),
      document.getElementById("container").classList[1].slice(-3, -2),
    ];
    data.week[rowcol[0]][rowcol[1]]["holiday"] = false;
    localStorage.setItem("data", JSON.stringify(data));
  }
  reloadcalendar();
}
function pholiday() {
  if (document.getElementById("chcbox").checked) {
    let data = JSON.parse(localStorage.getItem("data"));
    let rowcol = returnrowcol(document.getElementById("clickdate").value);
    data.week[rowcol[0]][rowcol[1]]["holiday"] = true;
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    let data = JSON.parse(localStorage.getItem("data"));
    let rowcol = returnrowcol(document.getElementById("clickdate").value);
    data.week[rowcol[0]][rowcol[1]]["holiday"] = false;
    localStorage.setItem("data", JSON.stringify(data));
  }
  reloadcalendar();
}