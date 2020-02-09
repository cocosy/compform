
//https://p5js.org/examples/math-noise-wave.html
//https://p5js.org/examples/objects-array-of-objects.html
//cloud reference: https://editor.p5js.org/dwantilus/sketches/HJ5IPPncW
let xoff= 0.0;
  let nx = 0.0;
  let ny = 0.0;


function setup() {
    createCanvas(500,500);
    ellipseMode(CENTER);
    fill(200, 50, 100);

}

function draw() {
    background(255);


  // n = noise(mouseX,mouseY);

  xoff = xoff + 0.01;
  
  let nx = noise(xoff) * width;
  let ny = noise(xoff,frameCount*0.03) *height;
  

  //noStroke();
  fill(map(nx,0,290,0,255),map(ny,0,420,0,255), 153);
  // fill(255, 204, 153);
  ellipse(width/2,height/2,nx*0.5,ny*0.5);
  print(nx,ny);
  
  stroke(0);
  strokeWeight(map(ny*0.5,75,160,1.5,9));
  beginShape();
  vertex(width/2-nx*0.25,height/2);
  vertex(width/2-nx*0.15,height/2-ny*0.09);
  vertex(width/2,height/2);
  vertex(width/2+nx*0.15,height/2+ny*0.09);
  vertex(width/2+nx*0.25,height/2);
  endShape();


}