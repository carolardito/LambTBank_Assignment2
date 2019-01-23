function formatDate(date){
  var newDate;
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (day < 10) {day = "0" + day;}
  if (month < 10) {month = "0" + month;}
  if (hour < 10) {hour = "0" + hour;}
  if (minutes < 10) {minutes = "0" + minutes;}
  if (seconds < 10) {seconds = "0" + seconds;}

  newDate =  month + '/' + day + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
  return newDate;
}
