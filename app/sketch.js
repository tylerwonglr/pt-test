var m;
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

	m = {
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
	if (m.y <= windowHeight - gravity) {
		m.y += gravity;
	}

	// magikarp
	fill(m.color);
	ellipse(m.x, m.y, 50, 50);
}

function keyPressed() {
	if (keyCode == 32) {
		if (m.y >= m.jumpHeight) {
			m.y -= m.jumpHeight;
		}

		if (m.y <= target.y + target.radius) {
			counter++;
			m.y = windowHeight;

			alert(counter);
		}
	}
}