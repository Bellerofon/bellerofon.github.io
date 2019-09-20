function addClassByNameToNav(name) {
  console.log(name);
  if (name === 'black') {
    $('#navigation').removeClass();
    $('#navigation').addClass('navbar navbar-inverse');
  }
  if (name === 'green') {
    $('#navigation').removeClass();
    $('#navigation').addClass('navbar bg-success');
  }
  if (name === 'red') {
    $('#navigation').removeClass();
    $('#navigation').addClass('navbar bg-danger');
  }
  if (name === 'white') {
    $('#navigation').removeClass();
    $('#navigation').addClass('navbar  bg-default');
  }
}

$(document).ready(function() {
  txt = '<p>Browser CodeName: ' + navigator.appCodeName + '</p>';
  txt += '<p>Browser Name: ' + navigator.appName + '</p>';
  txt += '<p>Browser Version: ' + navigator.appVersion + '</p>';
  txt += '<p>Cookies Enabled: ' + navigator.cookieEnabled + '</p>';
  txt += '<p>Platform: ' + navigator.platform + '</p>';
  txt += '<p>User-agent header: ' + navigator.userAgent + '</p>';
  console.log(txt);
  $('#info').append(txt);
});
