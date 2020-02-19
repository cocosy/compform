// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

let amplitude = 300;
let frequency = 0.0001;
// let frequency_h = 11;

function setup() {
    createCanvas(600, 500);
    noStroke();

    noiseSeed(1);

    // uncomment next line for simpler/less detailed noise
    // noiseDetail(1, 0);

}

function draw() {
    background(200, 200, 210);
    fill(100);

    let x = 0;
    for (x = 0; x < width; x += 15) {
    var buildingHeight = noise(x * frequency* frameCount) *amplitude;
        // var buildingDepth = noise(x * frequency_h) * 250;
        // print(buildingHeight);
      
      
      fill(255);
      rect(x-10, height * 0.9 - buildingHeight, 10, buildingHeight);
      
      fill(255,0,0);
      rect(x, 0, -10,height * 0.9 - buildingHeight-20);
      
      fill(0);
      rect(x, height * 0.9 - buildingHeight, -10,-20);
     
      
      // fill(0);
      // rect(x, height * 0.8, -10,height * 0.8 - buildingHeight-20);

  
//       fill(0);
//        rect(x+35, map(buildingHeight,50,250,50,300), 35,10);
//     }

    // fill(150);
    // rect(0, height * .9, width, height * .5);
}

}