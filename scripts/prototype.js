String.prototype.addDays = function (days) {
  var today = new Date(this.valueOf());
  today.setDate(today.getDate() + days);
  let str =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  return str;
};
String.prototype.number = function () {
  return(Number(this.valueOf()).toString())
};
String.prototype.lsCheck = function (data="") { //localstorage check
  if (localStorage.getItem(this.valueOf()) == null){
    localStorage.setItem(this.valueOf(), data)
    return true
  }
  return
};
String.prototype.lsSave = function (data="") { //localstorage check
  localStorage.setItem(this.valueOf(), data)
  return
};
String.prototype.lsGet = function () { //localstorage check
  return localStorage.getItem(this.valueOf())
};
String.prototype.rR = function (c='1') { 
  let a = returnrowcol(this.valueOf())[0]
  return a 
};
String.prototype.rC = function (c='1') {
  return returnrowcol(this.valueOf())[1]
};
Number.prototype.scrl = function() {
  $("html, body").animate({ scrollTop: (this.valueOf())+"px" })
  return
}
String.prototype.scrl = function() {
  $("html, body").animate({ scrollTop: (this.valueOf())+"px" })
  return
}