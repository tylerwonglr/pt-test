// objects
var colors;
var magikarp;
var target;

// variables
var counter = 0;

// CONSTANTS
var GRAVITY = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// https://coolors.co/fb3640-20a39e-edae49-e0f2e9-ffe74c
	colors = {
		red: '#FB3640',
		blue: '#96EAE7',
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
		color: colors.orange,
		jump: jump
	}
}

function draw() {
	// background
	background(colors.blue);

	// target
	fill(target.color);
	noStroke();
	ellipse(target.x,target.y,target.radius,target.radius);

	// gravity
	if (magikarp.y <= windowHeight - GRAVITY) {
		magikarp.y += GRAVITY;
	}

	// magikarp
	fill(magikarp.color);
	ellipse(magikarp.x, magikarp.y, 50, 50);
}

function keyPressed() {
	if (keyCode == 32) {
		magikarp.jump();
	}
}

function mouseClicked() {
	magikarp.jump();
}

// custom
function jump() {
	if (this.y >= this.jumpHeight) {
		this.y -= this.jumpHeight;
	}

	if (this.y <= target.y + target.radius) {
		counter++;
		this.y = windowHeight;

		alert(counter);
	}
}