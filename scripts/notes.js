function notes() {
  let b = returnrowcol(document.getElementById("eventdate").value);
  let a = JSON.parse(localStorage.getItem("data"));
  a.week[b[0]][b[1]].notes =
    "<span style='color: " +
    document.getElementById("notescolor").value +
    "'>" +
    document.getElementById("notesinput").value +
    "</span>";
  localStorage.setItem("data", JSON.stringify(a));
  reloadcalendar();
}
function pnotes() {
  let b = returnrowcol(document.getElementById("mdate").value);
  let a = JSON.parse(localStorage.getItem("data"));
  a.week[b[0]][b[1]].notes =
    "<span style='color: " +
    document.getElementById("pnotesc").value +
    "'>" +
    document.getElementById("pnotes").value +
    "</span>";
  localStorage.setItem("data", JSON.stringify(a));
  console.log(a, b, document.getElementById("pnotes").value, document.getElementById("pnotesc").value)
  reloadcalendar();
}
function cpn(){
    if (localStorage.getItem("currtype") == 'pnotes'){
      pnotes()
    }
}