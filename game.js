document.onkeydown = showKey;
document.onkeyup = hideKey;

//localStorage.clear();

function test() {
	move();
	switch_scene(2);
}

function move() {
	localStorage.setItem("x", player[1]);
    localStorage.setItem("y", player[2]);
}

var player = [
    null,
    200,
	200
];

player[1] = localStorage.getItem("x")
player[2] = localStorage.getItem("y")

if(player[1] === null) {
	player[1] = 200;
}

if(player[2] === null) {
	player[2] = 200;
}

var moveLeft = 0;
var moveTop = 0;

function init() {
	generate_map();
    player[0] = document.getElementById('player');
	player[1] = Number(localStorage.getItem("x"))
	player[2] = Number(localStorage.getItem("y"))

	if(player[1] === null) {
		player[1] = 200;
	}

	if(player[2] === null) {
		player[2] = 200;
	}

    window.setInterval("update()",5);
}

function update() {
    if(moveLeft === 1) {
        player[1] = player[1]+5;
    }else if(moveLeft === -1) {
        player[1] = player[1]-5;
    }

    if(moveTop === 1) {
        player[2] = player[2]+5;
    }else if(moveTop === -1) {
        player[2] = player[2]-5;
    }

    player[0].style.left = player[1]+'px';
    player[0].style.top = player[2]+'px';
}

function showKey(e) {
	var keycode;
	if (window.event)
	{
		keycode = window.event.keyCode;
	}
	else if (e)
	{
		keycode = e.which;
	}
	switch(keycode)
	{
	case 39:
	  moveLeft = 1;
	  break;
	case 37:
      moveLeft = -1;
	  break;
	case 38:
      moveTop = -1;
	  break;
	case 40:
      moveTop = 1;
	  break;
	}
	void(0);
	return false;
}

function hideKey(e) {
	var keycode;
	if (window.event)
	{
		keycode = window.event.keyCode;
	}
	else if (e)
	{
		keycode = e.which;
	}

	switch(keycode)
	{
	case 39:
	  moveLeft = 0;
	  break;
	case 37:
	  moveLeft = 0;
	  break;
	case 38:
	  moveTop = 0;
	  break;
	case 40:
	  moveTop = 0;
	  break;
	default:
	}
	void(0);
	return false;
}