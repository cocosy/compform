//reference from linear gradient example: https://p5js.org/examples/color-linear-gradient.html
//p5js color: https://p5js.org/learn/color.html



var drawthing = [];
var radius;
let x = [];
let y = [];
const Y_AXIS = 1;
const X_AXIS = 2;
let c1,c2;






function setup() {
    createCanvas(windowWidth, windowHeight);
    // noLoop();
    // background(0);
    c1 = color(0);
    c2 = color(0, 0, 102);
    noStroke();
    fill(255, 255, 255);

  
    for (var i = 0; i < 200; i++){
      x[i] = random(width);
      y[i] = random(height);

    }

}




function draw() {
  setGradient(0, 0, width, height, c2, c1, Y_AXIS);

   for (var i = 0; i < 200; i++){
  fill(255,random(170,255));
  ellipse(x[i],y[i], min(random(0, 10), random(0, 10), random(0, 10), random(0, 10), random(0, 10)), random(1,14) );

   }
}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c2, c1, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}


// function drawStar(x,y) {

//  radius = random(0,10);

//  for (var i = 0; i < 200; i++){
//   fill(255);
//     console.log(this.x);
//    // ellipse(x[i],y[i],radius, radius );
// }

// // if (radius < 7){
//     radius ++;
//   }else{ radius = 0;

//   }

            // max(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50))*random(0,width/50),
            // max(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50))*random(0,height/50), 
            // ((random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50)) * 0.2)*random(0,width/50),
            // ((random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50)) * 0.2)*random(0,height/50),

//}




 







  
// drawStar(x,y);







   // var rows = height / 50;
    // var cols = width / 50;

    
    // for (row = 0; row < rows; row++) {
    //     for (col = 0; col < rows; col++) {
           
    //     }
    // }



  /////////////////PART TWO /////////////////////////////////////////////////// 
  //   console.log("draw, grass");
  //   background(40, 40, 40);

  //   fill(0, 153, 0);
  //   rect(0, height * 0.5, width, height * 0.5);


  //   stroke(220, 220, 220);
  //   drawGrass(0, height * 0.5 - 100, width, 100);
  //   //stroke(240, 240, 240);
  //   drawGrass(0, height * 0.5 - 100, width, 100);
  //   //drawGrass(0, height * 0.5 - 100, width, 100);
  //   for (let i = 0; i < 200; i += 20) {
  //   bezier(
  //   random(0, height)- i / 2.0,
  //     40 + i,
  //     410,
  //     20,
  //     440+,
  //     300,
  //     240 - i / 16.0,
  //     300 + random(0, height) + i / 8.0
  //   );
  // }



// function drawGrass(left, top, width, height) {

//     // loop from the left to the right, one pixel per step
//     for (var x = left; x < left + width; x++) {

//         // x and y are the base of the blade of grass
//         var y = top + height;

//         // height of the grass
//         // pick lowest of three "rolls" to bias strongly towards short blades
//         // with occasional long ones
//         var bladeHeight = min (random(0, height), random(0, height), random(0, height));
//         console.log(bladeHeight);
//         bladeHeight = random(0, height*2);

//         // horizontal offset of top of blade relative to base
//         // average two "rolls" to bias towards middle
//         var bladeLean = (random(-5, 5) + random(-5, 5)) * 0.5;

//         // scale lean by height so that shorter blades aren't more leany
//         bladeLean = bladeLean * bladeHeight;

//         // scaling factor to to taste
//         bladeLean = bladeLean * 0.2;

//         // draw the grass
//         stroke(0,random(64,255),51);
//         noFill();
//         line(x, y, x + bladeLean, y - bladeHeight);
//     }

// }