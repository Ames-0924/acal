async function savejson2() {
  showtrans("Saving your data");
  await fetch("https://api.sheetson.com/v2/sheets/Data/2?t="+Math.random(), {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
      "X-Spreadsheet-Id": "1z2B2ksSXrNQU04tvorH0DUiZOpxIrOPqw_ioNdJV4q0",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Data: localStorage.getItem("data") }),
  })
    .then((r) => r.json())
    .then((result) => console.log(result));
  alert("Done");
  hidetrans();
}
async function getcloud() {
  showtrans("Fetching your data");
  await fetch("https://api.sheetson.com/v2/sheets/Data/2?t="+Math.random(), {
    method: "GET",
    headers: {
      Authorization:
        "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
      "X-Spreadsheet-Id": "1z2B2ksSXrNQU04tvorH0DUiZOpxIrOPqw_ioNdJV4q0",
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((result) => {
      if ("code" in result) {
        alert("Unsuccessful!");
      } else {
        localStorage.setItem("data", result.Data);
        localStorage.setItem("scrollock", JSON.stringify({ active: false }))
      }
      console.log(result);
    });
  await reloadcalendar();
  hidetrans();
}
async function loadjson2() {
  await getcloud();
}
async function getgetcloud() {
  await getcloud();
  // location.reload();
}
function savejson() {
  var a = document.createElement("a");
  var file = new Blob([localStorage.getItem("data")], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = "calendar.json";
  a.click();
}
function importjson() {
  var newinput = document.createElement("input");
  newinput.setAttribute("type", "file");
  newinput.setAttribute("hidden", true);
  newinput.setAttribute("onchange", "loadfile()");
  newinput.setAttribute("id", "inputfile");
  newinput.setAttribute("accept", ".json");
  document.body.appendChild(newinput);

  newinput.click();
}

function loadfile() {
  var file = document.getElementById("inputfile").files[0];
  if (!file) {
    alert("problem");
    return;
  }
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = function (evt) {
    localStorage.setItem("data", JSON.stringify(JSON.parse(evt.target.result)));
  };
  reader.onerror = function (evt) {
    document.getElementById("fileContents").innerHTML = "error reading file";
  };
}
