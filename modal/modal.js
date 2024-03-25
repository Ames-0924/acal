var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("calendar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  var asdf = JSON.parse(localStorage.getItem("modal"));
  asdf.yn = false;
  localStorage.setItem("modal", JSON.stringify(asdf));
  modal.style.display = "none";
  document
    .getElementById("container")
    .classList.remove(document.getElementById("container").classList[1]);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    var asdf = JSON.parse(localStorage.getItem("modal"));
    asdf.yn = false;
    localStorage.setItem("modal", JSON.stringify(asdf));
    modal.style.display = "none";
    document
      .getElementById("container")
      .classList.remove(document.getElementById("container").classList[1]);
  }
};
function showmodal(e) {
  clearinputs()
  modal.style.display = "block";
  var asdfg = JSON.parse(localStorage.getItem("modal"));
  asdfg.yn = true;
  var asdf = JSON.parse(localStorage.getItem("data"));
  console.log(e.classList[2].slice(-1));
  console.log(
    asdf.week[e.classList[2].slice(-1)][e.classList[2].slice(-3, -2)]
  );
  if (
    asdf.week[e.classList[2].slice(-1)][e.classList[2].slice(-3, -2)].holiday ==
    true
  ) {
    document.getElementById("holidayinput").checked = true;
  }
   let tempnotes = document.createElement('span')
  tempnotes.innerHTML = asdf.week[e.classList[2].slice(-1)][e.classList[2].slice(-3, -2)].notes
  if(tempnotes.children[0] == undefined){
     document.getElementById('notesinput').value=tempnotes.innerHTML
  }else{
    document.getElementById('notesinput').value = tempnotes.children[0].innerHTML
     document.getElementById('notescolor').value = rgbToHex(tempnotes.children[0].style.color)
  }
 
 
 
  var month =
    e.classList[1].length == 1 ? "0" + e.classList[1] : e.classList[1];
  console.log(month)
  var date =
    e.children[0].innerHTML.length == 1
      ? "0" + e.children[0].innerHTML
      : e.children[0].innerHTML;
  var boxdate = (Number(month) < 8 ? "2024-":"2023-") + month + "-" + date;
  asdfg.date = boxdate;
  localStorage.setItem("modal", JSON.stringify(asdfg));
  document.getElementById("eventdate").value = boxdate;
  document.getElementById("scdate").value = boxdate;
  document.getElementById("ecdate").setAttribute("min", boxdate);
  console.log(e.children);
  for (let i = 0; i < 4; i++) {
    document.getElementById("container").children[i].innerHTML = "";
    document.getElementById("container").children[i].oncontextmenu = function (
      e
    ) {
      if (confirm("Are you sure to delete this?")) {
        var el = e.srcElement;
        let found = 0;
        let parentel = el;
        while (found == 0) {
          if (parentel.tagName !== "DIV") {
            parentel = parentel.parentNode;
          } else {
            found = 1;
          }
        }
        let rowcol = [
          parentel.parentNode.classList[1].slice(-3, -2),
          parentel.parentNode.classList[1].slice(-1),
        ];
        let order = Number(parentel.children[0].id.slice(-1)) - Number(1);
        let data = JSON.parse(localStorage.getItem("data"));

        let foundct = 0;
        for (let j = Number(rowcol[1]) + Number(1); j < 10; j++) {
          console.log("week no:", j);
          for (let k = 0; k < data.week[j][rowcol[0]].event.length; k++) {

            if (
              Number(data.week[j][rowcol[0]].event[k].timeS) ==
                Number(
                  data.week[rowcol[1]][rowcol[0]].event[
                    data.week[rowcol[1]][rowcol[0]].order[order]
                  ].timeS
                ) &&
              Number(data.week[j][rowcol[0]].event[k].timeE) ==
                Number(
                  data.week[rowcol[1]][rowcol[0]].event[
                    data.week[rowcol[1]][rowcol[0]].order[order]
                  ].timeE
                ) &&
              data.week[j][rowcol[0]].event[k].context ==
                data.week[rowcol[1]][rowcol[0]].event[
                  data.week[rowcol[1]][rowcol[0]].order[order]
                ].context
            ) {
              console.log("found");
              if (document.getElementById("addel").checked) {
                data.week[j][rowcol[0]].event[k].timeS = "";
                data.week[j][rowcol[0]].event[k].timeE = "";
                data.week[j][rowcol[0]].event[k].context = "ㅤ";
                data.week[j][rowcol[0]].event[k].features = [];
              }
            }
          }
        }
        data.week[rowcol[1]][rowcol[0]].event[
          data.week[rowcol[1]][rowcol[0]].order[order]
        ].timeS = "";
        data.week[rowcol[1]][rowcol[0]].event[
          data.week[rowcol[1]][rowcol[0]].order[order]
        ].timeE = "";
        data.week[rowcol[1]][rowcol[0]].event[
          data.week[rowcol[1]][rowcol[0]].order[order]
        ].context = "ㅤ";
        data.week[rowcol[1]][rowcol[0]].event[
          data.week[rowcol[1]][rowcol[0]].order[order]
        ].features = [];
        localStorage.setItem("data", JSON.stringify(data));
        reloadcalendar();
      }
      return false;
    };
    document.getElementById("container").classList.add(e.classList[2]);
    let a = i * 2 + 3;
    var span = document.createElement("span");
    span.setAttribute("id", "o" + e.children[a].id);
    span.innerHTML = e.children[a].innerHTML;
    document.getElementById("container").children[i].append(span);
  }
}
window;
