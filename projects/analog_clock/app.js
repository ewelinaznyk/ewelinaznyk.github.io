var watch = document.getElementById('watchborder');

var string = '';
for (var i = 1; i < 13; i++) {
  string += '<span style="transform: rotate('+(30*i)+'deg);">'+ i + '</span>';
}
watch.innerHTML += string;

function calculateLinePosition() {
  var linesecond = document.getElementById('linesecond');
  var date = new Date();
  var seconds = date.getSeconds();
  linesecond.style.transform = 'rotate(' + (6*seconds) + 'deg)';
}

function calculateLineminutePosition() {
  var lineminute = document.getElementById('lineminute');
  var date = new Date();
  var minutes = date.getMinutes();
  lineminute.style.transform = 'rotate('+(6*minutes)+'deg)';
}

function calculateLinehourPosition() {
  var linehour = document.getElementById('linehour');
  var date = new Date();
  console.log(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = (30*hours)+(0.5*minutes);
  console.log(hours);
  linehour.style.transform = 'rotate('+time+'deg)';
}

setInterval(function(){
  calculateLinePosition();
  calculateLineminutePosition();
  calculateLinehourPosition();
}, 1000);
