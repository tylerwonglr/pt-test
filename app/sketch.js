var magikarp;
var target;

var counter = 0;

var gravity = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);

	target = {
		x: windowWidth / 2,
		y: 0,
		radius: 50,
		color: 'red'
	}

	magikarp = {
		x: windowWidth / 2,
		y: windowHeight,
		jumpHeight: 100,
		color: 'orange'
	}
}

function draw() {
	// background
	background(123);

	// target
	fill(target.color);
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