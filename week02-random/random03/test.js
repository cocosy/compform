
//https://p5js.org/examples/math-noise-wave.html
//https://p5js.org/examples/objects-array-of-objects.html
//cloud reference: https://editor.p5js.org/dwantilus/sketches/HJ5IPPncW

let yoff = 0.0; // 2nd dimension of perlin noise
let rains = [];
//clouds
var cloud1 = {
  x: 0,
  y: 40,
  diameter: 50 // clouds 
};
var cloud2 = {
  x: 10,
  y: 50,
  diameter: 30 //clouds
};
var cloud3 = {
  x: 33,
  y: 30,
  diameter: 60 //clouds
};
var cloud4 = {
  x: 70,
  y: 40,
  diameter: 60 //clouds
};
var cloud5 = {
  x: 0,
  y: 40,
  diameter: 50 // clouds 
};
var cloud6 = {
  x: 10,
  y: 50,
  diameter: 30 //clouds
};
var cloud7 = {
  x: 33,
  y: 30,
  diameter: 60 //clouds
};
var cloud8 = {
  x: 70,
  y: 40,
  diameter: 60 //clouds
};


function setup() {
  createCanvas(710, 450);
  //create rain
    for(let i=0; i<100; i++) {
    rains.push(new Rain());
  }
}

function draw() {
  var c = random(0,30);
  background(c);

  
  stroke(255);
  for(let i=0; i<rains.length; i++) {
    rains[i].update();
    rains[i].display();
  }

//clouds
  fill(c+70);
   noStroke();
  ellipse(cloud1.x,cloud1.y,cloud1.diameter,cloud1.diameter);
  cloud1.x = cloud1.x + 0.4;
  

  ellipse(cloud2.x,cloud2.y,cloud2.diameter,cloud2.diameter);
  cloud2.x = cloud2.x + 0.4;
  

  ellipse(cloud3.x,cloud3.y,cloud3.diameter,cloud3.diameter);
  cloud3.x = cloud3.x + 0.4;
  

  ellipse(cloud4.x,cloud4.y,cloud4.diameter,cloud4.diameter);
  cloud4.x = cloud4.x + 0.4;
  

  ellipse(cloud5.x,cloud5.y,cloud5.diameter,cloud5.diameter);
  cloud5.x = cloud5.x + 0.2;

  ellipse(cloud6.x,cloud6.y,cloud6.diameter,cloud6.diameter);
  cloud6.x = cloud6.x + 0.2;
  

  ellipse(cloud7.x,cloud7.y,cloud7.diameter,cloud7.diameter);
  cloud7.x = cloud7.x + 0.2;
  

  ellipse(cloud8.x,cloud8.y,cloud8.diameter,cloud8.diameter);
  cloud8.x = cloud8.x + 0.2;




  // fill(255);

  fill(0,0,random(200,255));
  stroke(255);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) { // Calculate a y value according to noise, map to
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);
    vertex(x, y);
    // Increment x dimension for noise
    xoff += random(0, 0.05);
  }
    //increment y dimension for noise
    yoff += random(0, 0.05);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}





class Rain {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.l = random(10,35);
  }
  
  update() {

    this.y += (random(1, 4) + random(1, 4) + random(1, 4))/3;
    if(this.y > height) {
      this.y = 0;
    }
  }
  
  display() {
    
    line(this.x,this.y,this.x,this.y+this.l);   
  } 

}










//////////////////////////////////////////////////////////
// var pitch = 0;
// var i = 0;
 
// function setup(){
//   createCanvas(windowWidth, windowHeight);
  
//   frameRate(20);
//   smooth(4);  //実行が重くなる可能性あり
// }

// function draw(){
//      background(0);
//   //   fill(255, 255, 255, 100);
//   // if(i%5 == 0){
//   //   rect(0, 0, windowWidth, windowHeight);
//   // }


//     noFill();
//     stroke( 184, 250, 211);
//      var x = 0;


//     beginShape();
//     while(x < width){
//     var y = height * noise(x/2500 ,pitch); //2D noise
//     // print(pitch);
//    vertex(x, y);

//     //point(x ,y);
//      x = x +.8;  //x座標の描画間隔
//    }
//     endShape();
//     pitch = pitch + random(0,0.1); //y座標の描画間隔微調整
//     i++;

// }

/////////////////////////////////////////////////////////////////////////////////////
// let rains = [];

// function setup() {
  
//   createCanvas(400, 400);
//   for(let i=0; i<100; i++) {
//     rains.push(new Rain());
//   }
// }

// function draw() {
//   background(0);
//   stroke(255);
//   for(let i=0; i<rains.length; i++) {
//     rains[i].update();
//     rains[i].display();
//   }
// }

// class Rain {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.l = random(10,50);
//   }
  
//   update() {
//     this.y += random(0,2);
//     if(this.y > height) {
//       this.y = 0;
//     }
//   }
  
//   display() {
    
//     line(this.x,this.y,this.x,this.y+this.l);   
//   } 
// }











// let yoff = 0.0; // 2nd dimension of perlin noise

// function setup() {
//   createCanvas(710, 400);
// }

// function draw() {
//   background(51);

//   fill(255);
//   // We are going to draw a polygon out of the wave points
//   beginShape();

//   let xoff = 0; // Option #1: 2D Noise
//   // let xoff = yoff; // Option #2: 1D Noise

//   // Iterate over horizontal pixels
//   for (let x = 0; x <= width; x += 10) {
//     // Calculate a y value according to noise, map to

//     // Option #1: 2D Noise
//     let y = map(noise(xoff, yoff), 0, 1, 200, 300);

//     // Option #2: 1D Noise
//     // let y = map(noise(xoff), 0, 1, 200,300);

//     // Set the vertex
//     vertex(x, y);
//     // Increment x dimension for noise
//     xoff += random(0, 0.05);
//   }
//   // increment y dimension for noise
//   yoff += random(0.01, 0.1);
//   vertex(width, height);
//   vertex(0, height);
//   endShape(CLOSE);
// }





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