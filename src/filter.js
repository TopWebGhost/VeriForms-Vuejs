
var shorttext = function (word) {
    var a = word;
    a = a.replace(/<[^>]+>/g,'');
    return a.substring(0,240);
}


var timeago = function(time) {
  time = new Date(time);
  var delta = parseInt((new Date() - time) / 1000, 10);
  if (delta <= 0) return 'just now';

  var minutes = delta / 60;
  if (minutes < 1) return 'less than a minute ago';
  if (minutes < 2) return 'about a minute ago';

  var hours = minutes / 60;
  if (hours < 1) return parseInt(minutes, 10) + ' minutes ago';
  if (hours < 1.5) return 'about an hour ago';

  var days = hours / 24;
  if (days < 1) return Math.round(hours) + ' hours ago';
  if (days < 7) return parseInt(days, 10) + ' days ago';

  var month = time.getMonth();
  if (month < 10) month = '0' + month;
  var date = time.getDate();
  if (date < 10) date = '0' + date;
  return [time.getFullYear(), month, date].join('-');
}

var marked = function(value){
  if(value != undefined){
    var mark = require('marked');
    
    return mark(value)
  }else{
    return value;
  }
  
}
exports.shorttext = shorttext;
exports.timeago = timeago;
exports.marked = marked;