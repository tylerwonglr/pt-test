var colors;

var magikarp;
var target;

var counter = 0;

var gravity = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// https://coolors.co/fb3640-20a39e-edae49-e0f2e9-ffe74c
	colors = {
		red: '#FB3640',
		blue: '#20A39E',
		orange: '#EDAE49',
		white: '#E0F2E9',
		yellow: '#FFE74C'
	}

	target = {
		x: windowWidth / 2,
		y: 0,
		radius: 50,
		color: colors.red
	}

	magikarp = {
		x: windowWidth / 2,
		y: windowHeight,
		jumpHeight: 100,
		color: colors.orange
	}
}

function draw() {
	// background
	background(colors.white);

	// target
	fill(target.color);
	noStroke();
	ellipse(target.x,target.y,target.radius,target.radius);


	// gravity
	if (magikarp.y <= windowHeight - gravity) {
		magikarp.y += gravity;
	}

	// magikarp
	fill(magikarp.color);
	ellipse(magikarp.x, magikarp.y, 50, 50);
}

function keyPressed() {
	if (keyCode == 32) {
		if (magikarp.y >= magikarp.jumpHeight) {
			magikarp.y -= magikarp.jumpHeight;
		}

		if (magikarp.y <= target.y + target.radius) {
			counter++;
			magikarp.y = windowHeight;

			alert(counter);
		}
	}
}