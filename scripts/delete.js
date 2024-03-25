//Delete Events
function pdel(e){
  if (confirm("Are you sure to delete?")){
    var bid = (Number(e.id.slice(-1)) - 1)//Button ID
  let data = JSON.parse(localStorage.getItem('data'))
  let r = $('#mdate')[0].value.rR()
  let c = $('#mdate')[0].value.rC()
  data.week[r][c].event[data.week[r][c].order[bid]] = standardevent
  localStorage.setItem('data', JSON.stringify(data))
  reloadcalendar()
  $('.d'+c+'w'+r)[0].click()
  }
  
}