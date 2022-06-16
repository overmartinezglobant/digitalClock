const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

const hh = document.querySelector("#hh");
const mm = document.querySelector("#mm");
const ss = document.querySelector("#ss");

const hrDot = document.querySelector(".hr_dot");
const minDot = document.querySelector(".min_dot");
const secDot = document.querySelector(".sec_dot");

setInterval(() => {
	const rightNow = dayjs();

	const hours = rightNow.format("hh");
	const minutes = rightNow.format("mm");
	const seconds = rightNow.format("ss");
	const ampm = rightNow.format("A");

	hoursEl.innerHTML = hours + "<br /><span>hours</span>";
	minutesEl.innerHTML = minutes + "<br /><span>minutes</span>";
	secondsEl.innerHTML = seconds + "<br /><span>seconds</span>";
	ampmEl.innerHTML = ampm;

	hh.style.strokeDashoffset = 440 - (440 * hours) / 12;
	mm.style.strokeDashoffset = 440 - (440 * minutes) / 60;
	ss.style.strokeDashoffset = 440 - (440 * seconds) / 60;

	hrDot.style.transform = `rotate(${hours * 30}deg)`;
	minDot.style.transform = `rotate(${minutes * 6}deg)`;
	secDot.style.transform = `rotate(${seconds * 6}deg)`;
}, 1000);
