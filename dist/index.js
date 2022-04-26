"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = SillyInputs;
// if no selector argument is passed in, use a default selector
function SillyInputs() {
	var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".silly-input";

	// get all the inputs
	var inputs = document.querySelectorAll("input" + selector);

	// loop through all the inputs
	inputs.forEach(function (input) {
		// style the input
		styleInput(input);
		// add a keyup listener to the input
		input.addEventListener("keyup", changeColour);
	});

	// this function called on the keyup event
	function changeColour() {
		this.style.backgroundColor = "#" + generateColour();
	}

	// style the input
	function styleInput(input) {
		input.style.border = "none";
		input.style.padding = "1rem";
		input.style.color = "white";
		input.style.width = "100%";
		input.style.fontSize = "1rem";
		input.style.backgroundColor = "#" + generateColour();
	}

	// https://css-tricks.com/snippets/javascript/random-hex-color/
	function generateColour() {
		return Math.floor(Math.random() * 16777215).toString(16);
	}
}