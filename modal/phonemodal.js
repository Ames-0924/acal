function showphonemodal(e) {
  
  $('#phonemodal')[0].style.transform="translateY(0vh)"
  $('#dateclick').hide()
  // document.getElementById("phonemodal").style.display = "block";
  //document.getElementById("easybuttons").style.display = "none";
  var d = e.classList[2].slice(1, 2);
  var w = e.classList[2].slice(-1);
  var month =
    e.classList[1].length == 1 ? "0" + e.classList[1] : e.classList[1];
  console.log(month);
  var date =
    e.parentElement.children[0].children[2].innerHTML.length == 1
      ? "0" + e.parentElement.children[0].children[2].innerHTML
      : e.parentElement.children[0].children[2].innerHTML;
  scrollock(true, [Number(w), Number(d)])
  var boxdate = (Number(month) < 8 ? "2024-" : "2023-") + month + "-" + date;
  document.getElementById("pscdate").value = boxdate;
  document.getElementById("clickdate").value = boxdate;
  document.getElementById("mdate").value = boxdate;
  console.log(boxdate);
  localStorage.setItem("phonemodal", JSON.stringify({ page: 1 }));
  let data = JSON.parse(localStorage.getItem("data"));
  document.getElementById("pitems").className = "";
  document.getElementById("pitems").classList.add(w + d);
  document.getElementById("pitems").innerHTML = ""
  for (let e = 1; e < (data.week[w][d].order.length+1); e++){
    if (document.getElementById("plist" + e)){
       document.getElementById("plist" + e).innerHTML = getdata(data, w, d, e)
    }else{
      let a = document.createElement('li')
      a.setAttribute('id', ("plist" + e))
      document.getElementById('pitems').append(a)
      document.getElementById("plist" + e).innerHTML = getdata(data, w, d, e)
    }
  }
  // document.getElementById("plist1").innerHTML = getdata(data, w, d, 1);
  // document.getElementById("plist2").innerHTML = getdata(data, w, d, 2);
  // document.getElementById("plist3").innerHTML = getdata(data, w, d, 3);
  // document.getElementById("plist4").innerHTML = getdata(data, w, d, 4);
  (JSON.parse(localStorage.getItem('scrolllist')).slice(0, Number(w)*7+Number(d)).reduce((partialSum, a) => partialSum + a, 0)+12).scrl()
  let tempnotes = document.createElement('span')
  tempnotes.innerHTML = data.week[w][d].notes
  if(tempnotes.children[0] == undefined){
     document.getElementById('pnotes').value=tempnotes.innerHTML
  }else{
    document.getElementById('pnotes').value = tempnotes.children[0].innerHTML
     document.getElementById('pnotesc').value = rgbToHex(tempnotes.children[0].style.color)
  }
  
}
$('#mdate').on('change', () => {
  //(JSON.parse(localStorage.getItem('scrolllist')).slice(0, Number($('#mdate')[0].value.rR())*7+Number($('#mdate')[0].value.rC())).reduce((partialSum, a) => partialSum + a, 0)+12).scrl()
  $('.d'+$('#mdate')[0].value.rC()+'w'+$('#mdate')[0].value.rR())[0].click()
})
function scrollock(state = false, date = [0, 0]) {
  state
    ? localStorage.setItem(
        "scrollock",
        JSON.stringify({ active: true, date: date })
      )
    : localStorage.setItem("scrollock", JSON.stringify({ active: false }));
}
function closephonemodal() {
  // scrollock(false)
  showtodaybtn()
  document.getElementById("easybuttons").style.display = "block";
  $('#phonemodal')[0].style.transform="translateY(55vh)"
  reloadcalendar()
}
function showtodaybtn(){
  $('#tdybtn').show()
}
function presstodaybtn(){
  $('#tdybtn').hide()
  scrollock(false)
  reloadcalendar()
}
document.getElementById("left-arrow").addEventListener("click", function () {
  var or = JSON.parse(localStorage.getItem("phonemodal")).page;
  or = Number(or) - 1;
  if (or == 0) {
    or = 1;
  }
  cleardivs();
  document.getElementById("block" + or).style.display = "block";
  var b = JSON.parse(localStorage.getItem("phonemodal"));
  b.page = or;
  localStorage.setItem("phonemodal", JSON.stringify(b));
});
document.getElementById("right-arrow").addEventListener("click", function () {
  var or = JSON.parse(localStorage.getItem("phonemodal")).page;
  or = Number(or) + 1;
  if (or == 5) {
    or = 4;
  }
  cleardivs();
  document.getElementById("block" + or).style.display = "block";
  var b = JSON.parse(localStorage.getItem("phonemodal"));
  b.page = or;
  localStorage.setItem("phonemodal", JSON.stringify(b));
});
function cleardivs() {
  document.getElementById("block1").style.display = "none";
  document.getElementById("block2").style.display = "none";
  // document.getElementById("block3").style.display = "none";
  // document.getElementById("block4").style.display = "none";
}

var el = document.getElementById("pitems");
var sortable = Sortable.create(el, {
  swapThreshold: 1,
  swap: true,
  onEnd: function (evt) {
    let w = document.getElementById("pitems").className[0];
    let d = document.getElementById("pitems").className[1];
    let data = JSON.parse(localStorage.getItem("data"));
    let order = data.week[w][d].order;
    let cloneorder = order;
    let clone2order = order;
    let a = clone2order[evt.newIndex];
    cloneorder[evt.newIndex] = cloneorder[evt.oldIndex];

    cloneorder[evt.oldIndex] = a;
    console.log(cloneorder);
    data.week[w][d].order = cloneorder;
    localStorage.setItem("data", JSON.stringify(data));
    console.log(evt);
    document.getElementById("pitems").innerHTML = "";

    for (let i = 0; i < data.week[w][d].order.length; i++) {
      let li = document.createElement("li");
      let lii = document.createElement("li");
      li.setAttribute("id", "plist" + (i + 1));

      lii.setAttribute("onclick", "peditt(" + i + ")");
      li.innerHTML = getdata(data, w, d, i + 1);
      lii.innerHTML = getdata(data, w, d, i + 1);
      document.getElementById("pitems").appendChild(li);

    }
    reloadcalendar();
  },
});
function phone_del(){
  if (confirm("Are you sure?")){
     phone_clear()
  }
}
function phone_clear(){
   $('#mcontent')[0].value=""
  $('#msdtime')[0].value=""
  $('#mstime')[0].value=""
  $('#medtime')[0].value=""
  $('#metime')[0].value=""
  $('#mcontent')[0].value=""
  $( 'input[type="checkbox"]' ).prop('checked', false);
  $( 'input[type="checkbox"]' ).parent().removeClass('pactive');
  $( 'input[type="checkbox"]' ).parent().css('background-color', 'white')
  $( 'input[type="color"]' ).prop('value', "#000000");
}
function phone_switch(){
  $('#pst').click()
  $('#pmsubmit').click()
  // $('#msdtime')[0].value="18:30"
  // $('#mstime')[0].value="1830"
  // $('#medtime')[0].value="18:30"
  // $('#metime')[0].value="1830"
  closephonemodal()
  $("#dateclick").show()
  localStorage.setItem('seldate', true)
  let text = ""
  let a= Number($('#mdate')[0].value.slice(-2));
    let b = Number($('#mdate')[0].value.slice(-5,-3))
    for (let i = 0; i < a.toString().length; i++) {
      text = text + fracup[a.toString()[i]];
    }
    text = text + fracline;
    for (let j = 0; j < b.toString().length; j++) {
      text = text + fracdown[b.toString()[j]];
    }
    document.getElementById("mcontent").value =
      document.getElementById("mcontent").value + " "+text;
  $('#phigh').prop('checked', true)
  $('#pbaw').prop('checked', true)
  $('#phighc')[0].value='#e6ffcf'
   $('#pst').prop('checked', false)
  let e = document.getElementById('pst').parentElement
  Array.prototype.slice.call(e.parentElement.children).forEach((element) => {
    element.style.backgroundColor = "#FFFFFF";
    element.children[0].checked? element.style.backgroundColor = "#def7ff": element.style.backgroundColor = "#FFFFFF"
    element.classList = ""
    element.children[0].checked? element.classList.add("pactive"): pass()
  });
    Array.prototype.slice.call($("#specialtr")[0].children).forEach((element) => {
    element.style.backgroundColor = "#FFFFFF";
    element.children[0].checked? element.style.backgroundColor = "#def7ff": element.style.backgroundColor = "#FFFFFF"
    element.classList = ""
    element.children[0].checked? element.classList.add("pactive"): pass()
  });

}
function phone_switch_2(){
}
function peditt(n) {
  console.log(n)
  let data = JSON.parse(localStorage.getItem("data"));
  let w = document.getElementById("pitems").className[0];
  let d = document.getElementById("pitems").className[1];

  
    let curr = data.week[w][d].event[data.week[w][d].order[n]];
   if(data.week[w][d].order.length > 4){
     
     data.week[w][d].event.splice(data.week[w][d].order[n],1)
     
     for (let i = (Number(data.week[w][d].order[n])+1); i < data.week[w][d].order.length; i++){
       data.week[w][d].order[data.week[w][d].order.indexOf(i)]--
     }
     data.week[w][d].order.splice(n,1)
   }else{
     
    data.week[w][d].event[data.week[w][d].order[n]] = standardevent;
   }
    Array.prototype.slice
      .call(document.getElementsByClassName("pactive"))
      .forEach((element) => {
        element.className = "";
        element.children[0].checked = false;
        element.style.backgroundColor = "#FFFFFF";
      });
    console.log(curr)
    document.getElementById("mcontent").value = curr.context;
    document.getElementById("mstime").value = curr.timeS;
    document.getElementById("msdtime").value =
      curr.timeS.toString().padStart(4,'0').slice(0, 2) + ":" + curr.timeS.toString().padStart(4,'0').slice(2);
    document.getElementById("metime").value = curr.timeE;
    document.getElementById("medtime").value =
      curr.timeE.toString().padStart(4,'0').slice(0, 2) + ":" + curr.timeE.toString().padStart(4,'0').slice(2);

    for (let i = 0; i < curr.features.length; i++) {
      document
        .getElementById(pedit[curr.features[i].key])
        .parentElement.click();
      if (Number(curr.features[i].key) == 1) {
        document.getElementById("ptcc").value = curr.features[i].color;
      }
      if (Number(curr.features[i].key) == 2) {
        document.getElementById("phighc").value = curr.features[i].color;
      }
    }
    // if(data.week[w][d].order.length > 4){
    //   data.week[w][d].event.splice(n, 1)
    // }
    document.getElementById("left-arrow").click();
    localStorage.setItem("data", JSON.stringify(data));
    reloadcalendar();
    rslist();
  
}
function rslist(c=false) {
  let w = document.getElementById("pitems").className[0];
  let d = document.getElementById("pitems").className[1];
  let data = JSON.parse(localStorage.getItem("data"));
  document.getElementById("pitems").innerHTML = "";
  for (let i = 0; i < data.week[w][d].order.length; i++) {
    let li = document.createElement("li");
    let lii = document.createElement("li");
    li.setAttribute("id", "plist" + (i + 1));
    lii.setAttribute("onclick", "peditt(" + i + ")");
    li.innerHTML = getdata(data, w, d, i + 1);
    lii.innerHTML = getdata(data, w, d, i + 1);
    document.getElementById("pitems").appendChild(li);
  }
  if (c==true){
    $('.d'+$('#mdate')[0].value.rC()+'w'+$('#mdate')[0].value.rR())[0].click()
  }
}
function phonefrac() {
  let a = prompt("Upper");
  let b = prompt("Lower");
  let text = "";
  if (!isNaN(a) && !isNaN(b)) {
    a = Number(a);
    b = Number(b);
    for (let i = 0; i < a.toString().length; i++) {
      text = text + fracup[a.toString()[i]];
    }
    text = text + fracline;
    for (let j = 0; j < b.toString().length; j++) {
      text = text + fracdown[b.toString()[j]];
    }
    document.getElementById("mcontent").value =
      document.getElementById("mcontent").value + text;
  }
}
document
  .getElementById("phonemodal")
  .addEventListener("touchstart", handleTouchStart, false);
document
  .getElementById("phonemodal")
  .addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      var or = JSON.parse(localStorage.getItem("phonemodal")).page;
      or = Number(or) + 1;
      if (or == 3) {
        or = 2;
      }
      cleardivs();
      document.getElementById("block" + or).style.display = "block";
      var b = JSON.parse(localStorage.getItem("phonemodal"));
      b.page = or;
      localStorage.setItem("phonemodal", JSON.stringify(b));
    } else {
      var or = JSON.parse(localStorage.getItem("phonemodal")).page;
      or = Number(or) - 1;
      if (or == 0) {
        or = 1;
      }
      cleardivs();
      document.getElementById("block" + or).style.display = "block";
      var b = JSON.parse(localStorage.getItem("phonemodal"));
      b.page = or;
      localStorage.setItem("phonemodal", JSON.stringify(b));
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
function somethingenter(e){
  console.log(e)
}