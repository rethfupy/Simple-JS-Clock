let clock = document.getElementById('clock');
let color = document.getElementById('color');
let date = document.getElementById('date');

function startClock(){
	let time = new Date();
	let h = time.getHours().toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();

	let d = time.getDate();
	let M = (time.getMonth() + 1).toString();
	let y = time.getFullYear().toString();

	if(h.length < 2){
		h = '0' + h;
	}
	if(m.length < 2){
		m = '0' + m;
	}
	if(s.length < 2){
		s = '0' + s;
	}

	let clockString = h + ":" + m + ":" + s;
	let colorString = "#" + h + m + s;
	let dateString = d + "/" + M + "/" + y;

	clock.textContent = clockString;
	color.textContent = colorString;
	date.textContent = dateString;

	document.body.style.background = colorString;
}

startClock();
setInterval(startClock, 1000);