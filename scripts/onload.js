window.addEventListener("load", (event) => {
  if ("phone".lsCheck("y")) {
    getgetcloud();
  }
  "data".lsCheck(JSON.stringify(standardstorage));
  "hpresetcolor".lsCheck(JSON.stringify(["#e6ffcf","#bfbfbf","#FFE5EB"]));
  "tpresetcolor".lsCheck(JSON.stringify(["#FF0000", "#BE38F3", "#2D79E3"]));
  "scrollock".lsSave(JSON.stringify({ active: false }));
  "modal".lsCheck(JSON.stringify({ yn: false, date: "" }));
  "lud".lsCheck(false);
  let d = new Date();
  "lu".lsSave(d.getTime());

  var a = JSON.parse(localStorage.getItem("data"));
  for (
    let i = 0;
    i < JSON.parse(localStorage.getItem("hpresetcolor")).length;
    i++
  ) {
    if (JSON.parse(localStorage.getItem("hpresetcolor"))[i] !== "FFFFFF") {
      $("#presetColors")[0].options[i].value = JSON.parse(
        localStorage.getItem("hpresetcolor")
      )[i];
    }
    document.getElementById("chah" + i).style.backgroundColor = JSON.parse(
      localStorage.getItem("hpresetcolor")
    )[i];
    document
      .getElementById("chah" + i)
      .setAttribute("onclick", 'cp("h",' + i + ")");
  }
  for (
    let j = 0;
    j < JSON.parse(localStorage.getItem("tpresetcolor")).length;
    j++
  ) {
        if (JSON.parse(localStorage.getItem("tpresetcolor"))[j] !== "FFFFFF") {
      $("#presetColorst")[0].options[j].value = JSON.parse(
        localStorage.getItem("tpresetcolor")
      )[j];
    }
    document.getElementById("chat" + j).style.backgroundColor = JSON.parse(
      localStorage.getItem("tpresetcolor")
    )[j];
    document
      .getElementById("chat" + j)
      .setAttribute("onclick", 'cp("t",' + j + ")");
  }
  newcal(a);
  //Prime Da Modal!
  $("#phonemodal")[0].style.transform = "translateY(55vh)";
  $("#phonemodal").show();
  $("#phonemodal")[0].style.transition = "transform 0.6s";
  //Prime Da Keyboard!
  document.getElementById("easykeyboard").style.transform = "translateY(380px)";
  document.getElementById("easykeyboard").style.transition = "transform 0.5s";
  document.getElementById("easykeyboard").style.display = "block";
});
