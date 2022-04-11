let valueDisplays = document.querySelectorAll(".c-num");

valueDisplays.forEach((valueDisplay) => {
	let interval = parseInt(valueDisplay.getAttribute("interval"));

	let startValue = 0;
	let increaseVal = parseFloat(valueDisplay.getAttribute("increase-val"));
	let endValue = parseFloat(valueDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function () {
		let updatedValue = Math.round((startValue += increaseVal) * 100) / 100;
		valueDisplay.textContent = updatedValue;
		if (updatedValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});
