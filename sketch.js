
let data;
function preload() {
  data = loadTable("/assets/riversintheworld.csv", "csv", "header");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  let c=color(0, 0, 120);
  background(c);
  for(let r=0; r < data.getRowCount(); r++) {
    const name = data.getString(r, "name");
    const number = data.getNum(r, "id");
    const x = random(0, width);
    const y = random(0, height);
    noStroke();
    circle(x,y, number);
    text(name, x, y);
    textAlign(CENTER);
  }
}
function draw() {
}
