function ucolor(start, end, color) {
  start = returnrowcol(start[0].value);
  end = returnrowcol(end[0].value);
  color = color[0].value;
  let data = JSON.parse(localStorage.getItem("data"));
  if (end[0] > 9) {
    alert("Check your date again");
    return;
  }
  if (confirm("Are you sure to change color? This is irreversible.")) {
    let original = start[0] * 7 + start[1];
    for (let i = 0; i < Number(end[0] * 7 + end[1]) - original + 1; i++) {
      let rc = original + i
      let r = Math.floor(rc/7)
      let c = rc-Math.floor(rc/7)*7
      data.week[r][c]["color"] = color
    }
    localStorage.setItem('data', JSON.stringify(data))
    reloadcalendar()
  }
}
