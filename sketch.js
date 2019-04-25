let logo, pos, vel, c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  logo = loadImage('https://raw.githubusercontent.com/CodingTrain/website/master/CodingChallenges/CC_131_BouncingDVDLogo/P5/dvd_logo.png');
  pos = createVector(random(width-200), random(height-102));
  vel = createVector(5, 5);
  c = color(floor(random(100,255)), floor(random(100,255)), floor(random(100,255)));
}

function draw() {
  background(0);
  tint(c);
  image(logo, pos.x, pos.y, 200, 102);
  pos.add(vel);
  rebond();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function rebond() {
  if (pos.x <= 0 || pos.x + 200 >= width) {
    vel.x = -vel.x;
    c = color(floor(random(50,230)), floor(random(50,230)), floor(random(50,230)));
  } if (pos.y <= 0 || pos.y + 102 >= height) {
    vel.y = -vel.y;
    c = color(floor(random(100,255)), floor(random(100,255)), floor(random(100,255)));
  }
}


