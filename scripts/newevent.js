var modn = "textColorinput,textColor,highlightColorinput,highlightColor,boldinput,italicinput,stinput,underinput,boxinput"
var mody = "ptc,ptcc,phigh,phighc,pbold,pitalic,pst,pun,pbaw"
$('#formadd').submit(function(e){e.preventDefault();}); // Prevent Form Submission
function newinput(starttime, endtime, content, date) {
  starttime = Number(starttime[0].value.toString().replace(":", "")); // HH:MM -> HHMM
  endtime = Number(endtime[0].value.toString().replace(":", ""));
  content = content[0].value;
  date = date[0].value;
  let data = JSON.parse(localStorage.getItem("data"));
  let r = returnrowcol(date)[0]; //row
  let c = returnrowcol(date)[1]; //col
  let tbi = {
    timeS: starttime,
    timeE: endtime,
    context: content,
    features: localStorage.getItem('phone') == 'n' ? modifiers(modn): modifiers(mody),
  }; //to be inserted
  let op =
    starttime < 1000 ? 0 : starttime < 1400 ? 1 : starttime < 1545 ? 2 : 3; //Original Position
  if (
    JSON.stringify(data.week[r][c].event[data.week[r][c].order[op]]) ==
    JSON.stringify(standardevent)
  ) {
    data.week[r][c].event[data.week[r][c].order[op]] = tbi;
    localStorage.setItem("data", JSON.stringify(data));
    reloadcalendar();
    mobile() ? rslist(true) : pass()
    return;
  } else {
    let unused = [];
    //important: here keeps 4 to cope with "default setting"
    for (let i = 0; i < 4; i++) {
      if (
        JSON.stringify(data.week[r][c].event[data.week[r][c].order[i]]) ==
        JSON.stringify(standardevent)
      ) {
        unused.push(i);
      }
    }
    if (unused.length == 0) {
      let adata = data
      adata.week[r][c].order.push(data.week[r][c].order.length)
      adata.week[r][c].event.push(tbi)
      console.log(adata)
      localStorage.setItem("data", JSON.stringify(adata))
      reloadcalendar()
      document.getElementsByClassName('d'+c+'w'+r)[0].click()
      return;
    }
    unused = unused
      .sort(function (a, b) {
        return Math.abs(op - a) - Math.abs(op - b);
      })
      .slice(0, 2);
    op =
      starttime > Number(data.week[r][c].event[data.week[r][c].order[op]].timeS)
        ? unused[unused.length - 1]
        : unused[0];
    data.week[r][c].event[data.week[r][c].order[op]] = tbi;
    localStorage.setItem("data", JSON.stringify(data));
    reloadcalendar()
    mobile() ? rslist(true) : pass()
    return;
  }
}
function modifiers(e) {
  let mod = []
  let [tc, tcc, h, hc, b, i, s, u, baw] = e.split(',');
  $('#'+tc)[0].checked ? mod.push({key: 1, color: $('#'+tcc)[0].value}): pass()
  $('#'+h)[0].checked ? mod.push({key: 2, color: $('#'+hc)[0].value}): pass()
  $('#'+b)[0].checked ? mod.push({key: 3, color: ""}): pass()
  $('#'+i)[0].checked ? mod.push({key: 4, color: ""}): pass()
  $('#'+s)[0].checked ? mod.push({key: 5, color: ""}): pass()
  $('#'+u)[0].checked ? mod.push({key: 6, color: ""}): pass()
  $('#'+baw)[0].checked ? mod.push({key: 7, color: ""}): pass()
  return mod
}
