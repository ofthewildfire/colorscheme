const color = document.getElementById("color");
const scheme = document.getElementById("scheme");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const colorsDiv = document.getElementById("colors");
const hexcodeDiv = document.getElementById("hexcodes");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const hexCode = color.value.slice(1);
	const selectedScheme = scheme.value;

	fetch(
		`https://www.thecolorapi.com/scheme?hex=${hexCode}&34&format=json&mode=${selectedScheme}&count=5`
	)
		.then((response) => response.json())
		.then((data) => {
			const colorArr = data.colors; // colors array
			const hexcodes = data.colors;
			let html = "";
			let hexhtml = "";
			colorArr.forEach((color) => {
				let hex = color.hex.value;
				html += `<div class="color-column" style="background-color:${color.hex.value}";></div>`;
			}); // end of forEach()
			colorArr.forEach((hexcode) => {
				hexhtml += `<div class="hexcodes">${hexcode.hex.value}</div>`;
			});
			colorsDiv.innerHTML = html;
			hexcodeDiv.innerHTML = hexhtml;
		});
});
