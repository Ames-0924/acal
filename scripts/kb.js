//showkeyboard(), phonemodal.click, different button clicks, transition of languages
function showkeyboard(type, e) {
  if (type == "n") {
    localStorage.setItem("currtype", e.getAttribute("id"));

    document.getElementById("easykeyboard").style.transform = "translateY(0px)"
  }
}
$("#phonemodal").on("click", function (e) {
  if ((e.target.id.toUpperCase() !== "MCONTENT" && e.target.id.toUpperCase() !== "PNOTES" )) {
    //console.log(e.target.id.toUpperCase())
    document.getElementById("easykeyboard").style.transform = "translateY(380px)"
  }

   
   if (e.target.closest("li") !== null && e.target.closest("li").innerHTML !== "ㅤ"){
     let v = e.target.closest("li").id.toUpperCase().toLowerCase()
     console.log(v)
     peditt(Number(v.substr(v.length - 1))-1)
   }
     


})
$(".nk").on("touchstart", function (event) {
  let e = event.target;
  console.log(e.innerHTML);
  let a = document.getElementById(localStorage.getItem("currtype"));
  if (a.nodeName.toUpperCase() == "INPUT") {
    let b = a.selectionStart;
    a.value =
      a.value.slice(0, a.selectionStart) +
      e.innerHTML +
      a.value.slice(a.selectionStart);
    a.selectionStart = Number(b) + Number(1);
    a.selectionEnd = Number(b) + Number(1);
    if (localStorage.getItem("capstatus") == "cap") {
      let input = document.getElementsByClassName("nk");
      for (var i = 0; i < input.length; i++) {
        input[i].innerHTML = input[i].innerHTML.toLowerCase();
      }
      localStorage.setItem("capstatus", "");
    }
    e.classList.add("ak");
    e.style.height = '86px'
    e.style.marginTop = '-48px'
    e.style.backgroundColor = 'white'
    let f = e.innerHTML
    e.innerHTML = e.innerHTML + '<br>' + e.innerHTML
    cpn() //notes
    setTimeout(function () {
      e.innerHTML = f
      e.removeAttribute('style')
    }, 80);
  }
});
$(".sp").on("touchstart", function (event) {
  let e = event.target;
  console.log(e.innerHTML);
  let a = document.getElementById(localStorage.getItem("currtype"));
  if (a.nodeName.toUpperCase() == "INPUT") {
    let b = a.selectionStart;
    a.value =
      a.value.slice(0, a.selectionStart) +
      " " +
      a.value.slice(a.selectionStart);
    a.selectionStart = Number(b) + Number(1);
    a.selectionEnd = Number(b) + Number(1);
    cpn()
  }
});
$(".no").on("touchstart", function (event) {
  if (document.getElementById("numbers").style.display == 'none'){
    $('#letters').hide()
    $('#numbers').show()
  }else{
    $('#letters').show()
    $('#numbers').hide()    
  }
});
$(".nuk").on("touchstart", function (event) {
  let e = event.target;
  let ht = e.innerHTML
  ht == "&lt;" ? ht = '<' : pass()
  ht == "&gt;" ? ht = '>' : pass()
  ht == "&amp;" ? ht = '&' : pass()
  let a = document.getElementById(localStorage.getItem("currtype"));
  if (a.nodeName.toUpperCase() == "INPUT") {
    let b = a.selectionStart;
    a.value =
      a.value.slice(0, a.selectionStart) +
      ht +
      a.value.slice(a.selectionStart);
    a.selectionStart = Number(b) + Number(1);
    cpn()
    if (localStorage.getItem("capstatus") == "cap") {
      let input = document.getElementsByClassName("nk");
      for (var i = 0; i < input.length; i++) {
        input[i].innerHTML = input[i].innerHTML.toLowerCase();
      }
      localStorage.setItem("capstatus", "");
    }
  }
});
$(".do").on("touchstart", function (event) {
  document.getElementById("easykeyboard").style.transform = "translateY(380px)"
});
$(".fc").on("touchstart", function (event) {
  let e = event.target;
  console.log(e.innerHTML);
  let a = document.getElementById(localStorage.getItem("currtype"));
  if (a.nodeName.toUpperCase() == "INPUT") {
    if (e.innerHTML == "⇧") {
      if (localStorage.getItem("capstatus") !== "cap") {
        let input = document.getElementsByClassName("nk");
        for (var i = 0; i < input.length; i++) {
          input[i].innerHTML = input[i].innerHTML.toUpperCase();
        }
        localStorage.setItem("capstatus", "cap");
        return;
      }
      if (localStorage.getItem("capstatus") == "cap") {
        let input = document.getElementsByClassName("nk");
        for (var i = 0; i < input.length; i++) {
          input[i].innerHTML = input[i].innerHTML.toLowerCase();
        }
        localStorage.setItem("capstatus", "");
        return;
      }
    }
    if (e.innerHTML == "⌫" || e.innerHTML == "Del") {
      let b = a.selectionStart;
      let c =
        a.selectionStart == a.selectionEnd
          ? a.selectionStart - 1
          : a.selectionStart;
      a.value = a.value.slice(0, c) + a.value.slice(a.selectionEnd);
      a.selectionStart = Number(b) - Number(1);
      a.selectionEnd = Number(b) - Number(1);
      cpn()
      return;
    }
  }
});
$(".cl").on("touchstart", function (event) {
  if (document.getElementById("engkb").style.display == 'block'){
    $("#engkb")[0].style.display = 'none'
    $("#chikb")[0].style.display = 'block'
  }else{
    $("#engkb")[0].style.display = 'block'
    $("#chikb")[0].style.display = 'none'
  }
});