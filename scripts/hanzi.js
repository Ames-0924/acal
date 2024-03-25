let _filesToLoad;
let _drawingBoard;
let _start;

window.addEventListener("load", (event) => {
  _filesToLoad = 2;
  HanziLookup.init(
    "mmah",
    "https://amescalendar.glitch.me/mmah.json",
    fileLoaded
  );
  HanziLookup.init(
    "orig",
    "https://amescalendar.glitch.me/orig.json",
    fileLoaded
  );
});

function fileLoaded(success) {
  if (!success) {
    _filesToLoad = -1;
    $(".drawingBoard span").text("Failed to load data.");
    return;
  }
  --_filesToLoad;
  if (_filesToLoad != 0) return;
  $(".drawingBoard").removeClass("loading");
  _drawingBoard = HanziLookup.DrawingBoard($(".drawingBoard").first(), lookup);
  // Undo/redo commands - have to do with input
  $(".cmdUndo").click(function (evt) {
    _drawingBoard.undoStroke();
    _drawingBoard.redraw();
    lookup();
  });
  $(".cmdClear").click(function (evt) {
    _drawingBoard.clearCanvas();
    _drawingBoard.redraw();
    lookup();
  });
}

function lookup() {
  let char0 = []
let char1 = []
let char2 = []
  var strokes = _drawingBoard.cloneStrokes();
  _start = new Date().getTime();
  var analyzedChar = new HanziLookup.AnalyzedCharacter(strokes);
  var matcherOrig = new HanziLookup.Matcher("orig");
  matcherOrig.match(analyzedChar, 8, function(matches) {
    for (var i = 0; i != matches.length; ++i) {
      
      char0.push(matches[i].character)
    }

  });        
  var matcherMMAH = new HanziLookup.Matcher("mmah");
  matcherMMAH.match(analyzedChar, 8, function (matches) {
    for (var j = 0; j != matches.length; ++j) {
      char1.push(matches[j].character)
    }

  });
  for(let k = 0; k<16; k++){
    let b = Math.floor(k/2)
    let a = (k % 2 == 0? char0[b] : char1[b])
    if (a !== undefined){
      if (!char2.includes(a)){
        if (char2.length < 10){
          char2.push(a)
        }
      }
    }
  }
  showResults(document.getElementsByClassName('rechars')[0], char2)
}
function showResults(elmHost, matches) {
  elmHost.innerHTML = ""
  for (var i = 0; i != matches.length; ++i) {
    let a = document.createElement('span')
    a.setAttribute('onclick', 'chitype(this)')
    a.innerHTML = matches[i]
    elmHost.append(a)
    // elmHost.innerHTML += ('<span onclick="chitype(this)">' + matches[i] + "</span>");
  }
}
function chitype(e) {
  $(".cmdClear")[0].click()
  let a = document.getElementById(localStorage.getItem("currtype"));
  if (a.nodeName.toUpperCase() == "INPUT") {
    let b = a.selectionStart;
    a.value =
      a.value.slice(0, a.selectionStart) +
      e.innerHTML +
      a.value.slice(a.selectionStart);
    a.selectionStart = Number(b) + Number(1);
    a.selectionEnd = Number(b) + Number(1);
    cpn()
  }
}