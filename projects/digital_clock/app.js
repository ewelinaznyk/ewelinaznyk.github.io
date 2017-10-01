function displayTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var clock = document.getElementById('displayedTime');
    clock.innerHTML = '<span>' + (("0" + hour).slice(-2) + ':' + ("0" + min).slice(-2) + ':' + ("0" + sec).slice(-2)) + '</span>';
}

var secondDots = [];
var classes = [
    'fa fa-circle',
    'fa fa-dot-circle-o',
    'fa fa-circle-o'
];

for (var i = 0; i < 60; i++) {
    secondDots.push(0);
}

function changeDotInArray() {
    var date = new Date();
    var sec = date.getSeconds();
    for (var i = 0; i < secondDots.length; i++) {
        if (i < sec) {
            secondDots[i] = 0;
        } else if (i === sec) {
            secondDots[i] = 1;
        } else {
            secondDots[i] = 2;
        }

    }
}

function populateHTML() {
    var html = document.getElementById('watch');
    html.innerHTML = '';
    for (var i = 0; i < secondDots.length; i++) {
      var string = '<span class="line-to-rotate" style="transform: rotate(' + (6 * i) + 'deg);">';
        if (secondDots[i] === 0) {
            string += '<i class="' + classes[0] + '" id="secondDots' + i + '" aria-hidden="true"></i>';
        } else if (secondDots[i] === 1) {
            string += '<i class ="' + classes[1] + '" id="secondDots' + i + '" aria-hidden="true"></i>';
        } else {
            string += '<i class ="' + classes[2] + '" id="secondDots' + i + '" aria-hidden="true"></i>';
        }
        string += '</span>';
        html.innerHTML += string;
    }

    var displayedTime = document.createElement('div');
    displayedTime.setAttribute('id', 'displayedTime');
    displayedTime.classList.add('displayedTime');
    html.appendChild(displayedTime);
}

function changeDotClass() {
    var date = new Date();
    var sec = date.getSeconds();
    for (var i = 0; i < secondDots.length; i++) {
        var id = 'secondDots' + i;
        var dot = document.getElementById(id);
        if (i < sec) {
            dot.className = classes[0];
        } else if (i === sec) {
            dot.className = classes[1];
        } else {
            dot.className = classes[2];
        }

    }
}


populateHTML();
displayTime();

setInterval(function() {
    displayTime();
    changeDotClass();
}, 1000);
