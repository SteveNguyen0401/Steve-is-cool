var m;

function setup() {
    createCanvas(640, 480);
    m = new MickeyMouse();
}

function draw() {
    background(0,255,0);
    m.display();
}

function MickeyMouse {
    
    this.display = function () {
        var x = width/4;
        var y = height / 2;
    
    background('#FFFAED');
    var x = width / 2;
    var y = height / 2;

    //largeFace
    noStroke();
    fill('#000000');
    ellipse(x, y, 300, 300);
    
    //leftEar
    fill('#000000');
    ellipse(x-150,y-150, 150, 150);
    
    //rightEar
    fill('#000000');
    ellipse(x+150,y-150, 150, 150);
    
    //otherFace
    fill('#FFE4C4');
    ellipse(x,y,230,230);
    
    //rightEye
    fill('#F0FFFF');
    ellipse(x+50,y-50, 80, 80);
    
    //leftEye
    fill('#F0FFFF');
    ellipse(x-50, y-50, 80,80);
    
    //rightPupil
    fill('#000000');
    ellipse(x+50,y-50,50,50);
    
    //leftPupil
    fill('#000000');
    ellipse(x-50,y-50,50,50);
    
    //mouth
    fill('#A52A2A');
    arc(x, y+30, 150, 100, 0, PI + QUARTER_PI, CHORD);
        
    };
}
    
}