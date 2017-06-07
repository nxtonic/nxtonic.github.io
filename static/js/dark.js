(function(){
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.type = 'text/css';
  link.href = '/static/css/dark.css';
  var date = new Date;
  var hours = date.getHours();

  if (hours < 6 || hours >= 18) {
    setTimeout(function () {
      document.head.appendChild(link);
    }, 500);
  }
})();
