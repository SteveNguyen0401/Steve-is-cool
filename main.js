var mickey;
var feed = [];
var numFood = 10;
var score = 0;

function setup() {
    rectMode(CENTER);
    createCanvas(950, 900);
    mickey = new MickeyMouse;


    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(25, 255, 0);
    mickey.display();

    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    
    // black, sized 50, score
    fill(0);
    textSize(50);
    text("Score: " + score, 50, 50);
}

function mousePressed() {
    mickey.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 50, 0);
    this.foodSize = 50;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}



function MickeyMouse() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };

    this.eat = function () {
        for (var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                scoreboard();
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    };

    this.display = function () {
        x = mouseX;
        y = mouseY;
        noStroke();

        background('#FFFAED');

        //largeFace
        noStroke();
        fill('#000000');
        ellipse(x, y, 300, 300);

        //leftEar
        fill('#000000');
        ellipse(x - 150, y - 150, 150, 150);

        //rightEar
        fill('#000000');
        ellipse(x + 150, y - 150, 150, 150);

        //otherFace
        fill('#FFE4C4');
        ellipse(x, y, 230, 230);

        //rightEye
        fill('#F0FFFF');
        ellipse(x + 50, y - 50, 80, 80);

        //leftEye
        fill('#F0FFFF');
        ellipse(x - 50, y - 50, 80, 80);

        //rightPupil
        fill('#000000');
        ellipse(x + 50, y - 50, 50, 50);

        //leftPupil
        fill('#000000');
        ellipse(x - 50, y - 50, 50, 50);

        //mouth
        fill('#A52A2A');
        arc(x, y + 30, 150, 100, 0, PI + QUARTER_PI, CHORD);

    };

    function scoreboard() {
        score++;
    }
}
