let sexSlider, eyebrownSlider_R, eyebrownSlider_L, hairSlider, mouthSlider, gSlider, bSlider, color_picker;

var img,eyeG,eyeB, hair01,hair02,hair03,hair04,hair05;

let hair = [];

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  noStroke();


  //load face
  img = loadImage("data/face.png");
  eyeG = loadImage("data/eyeG.png");
  eyeB = loadImage("data/eyeB.png");




  //load hairs
  for (let i = 1; i < 7; i++) {
    hair[i] = loadImage("data/hair"+i+".png");
  }




  // create sliders
  let slider_x = 150;
  //sex
  sexSlider = createSlider(0, 1, 0);
  sexSlider.position(slider_x, 20);

 //eyebrown
  eyebrownSlider_R =  createSlider(0, 40, -45);
  eyebrownSlider_L =  createSlider(0, 40, -45);
  eyebrownSlider_R.position(slider_x, 20*2.5);
  eyebrownSlider_L.position(slider_x, 20*4);

  //hair style

  hairSlider = createSlider(1, 6, 1);
  hairSlider.position(slider_x, 20*5.5);

  // gSlider = createSlider(0, 255, 0);
  // gSlider.position(120, 20*4);



//hair color
  color_picker = createInput("#ac5861", "color");
  color_picker.position(slider_x, 20*7);

//mouth
mouthSlider = createSlider(15, 115, 15);
mouthSlider.position(slider_x, 20*8.5);


}

function draw() {
//parse value

  const sex = sexSlider.value();
  const hairStyle = hairSlider.value();
  const blushColor = color_picker.value();
  const eyeBrown_R = eyebrownSlider_R.value();
  const eyeBrown_L = eyebrownSlider_L.value();
  const mouthSize = mouthSlider.value();



  //draw Eye

 if(sex == 1){
  console.log("hi");
  background(255);

  image(img, 300, 100,img.width*0.4,img.height*0.4);
  image(eyeG, 290,100,eyeG.width,eyeG.height);
 }else{
    console.log("bye");
    background(255);

  image(img, 300, 100, img.width*0.4,img.height*0.4);
  image(eyeB, 290, 100, eyeB.width,eyeB.height);

 }


  image(hair[hairStyle], 166, -100, hair[1].width*1.45,hair[1].height*1.45);


  // text

  const interval  = 30;
  fill(0);
  text('Girl', sexSlider.width*1.2 + sexSlider.x, 35);
  text('Boy', 35,35);
  text('Eyebrown Right', 25, 35+interval*1);
  text('Eyebrown Left', 25, 35+interval*2);
  text('Hair Style', 25,35+interval*3);
  text('Blush Color', 25,35+interval*4);
  text('Mouth', 25, 35+interval*5);




  //draw blush
  fill(blushColor);
  noStroke;
   ellipse(500,530,100,100);
   ellipse(700,530,100,100);

   //draw mouth
  let n  = map(noise(0,frameRate()/15),0,1,-15,15);
  fill(255);
  stroke(0);
  strokeWeight(10);
  ellipse(600,600,mouthSize,mouthSize/1.5+n);

  strokeWeight(0);




// draw eyebrown
  fill(0);
  translate(width/2,height/2);
  push();
  rectMode(CENTER);
  rotate(eyeBrown_R);
  rect(0,0,70,10);
  pop();
  

  translate(-195,0);
  push();
  rotate(-eyeBrown_L);
  rectMode(CENTER);
  rect(0,0,-70,-10);
  pop();

  // rect(-15,-5, -10,-70);
  // rect(-30,20,10,-70);
  // rotate(TWO_PI - eyeBrown);
  // rect(-30,20, 10,70);
  // translate(-width/2,-height/2);

}