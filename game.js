document.onkeydown = showKey;
document.onkeyup = hideKey;

var player = [
    null,
    200,
    200
];

var moveLeft = 0;
var moveTop = 0;

function init() {
    player[0] = document.getElementById('player');

    window.setInterval("update()",5);
}

function update() {
    if(moveLeft === 1) {
        player[1] = player[1]+5;
    }else if(moveLeft === -1) {
        player[1] = player[1]-5;
    }else {
        player[1] = player[1]
    }

    if(moveTop === 1) {
        player[2] = player[2]+5;
    }else if(moveTop === -1) {
        player[2] = player[2]-5;
    }else {
        player[2] = player[2];
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