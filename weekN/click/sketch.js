

let mySound;
let fft;
let playing = false;

function preload() {
    mySound = loadSound('assets/waterclick.wav');

}

function setup() {
    // createCanvas(500, 200);

    fingers = createVideo(['assets/blick.mov']);
    fingers.position(windowWidth/5, windowHeight/5);

    // fft = new p5.FFT(0, 128);
    // fft.setInput(mySound);


    // startButton = createButton('Say Hi');
    // startButton.position(0,100);
    // startButton.size(400,330);
    // startButton.hide();
    fingers.mousePressed(start);
    fingers.mousePressed(toggleVid);
    // startButton.mousePressed(start);
    // startButton.mousePressed(toggleVid);

    // stopButton = createButton('stop');
    // stopButton.mousePressed(stop);
    // stopButton.mousePressed(toggleVid);
}

function start() {
    // mySound.loop(0, 1, 1, 0, 4);
    mySound.playMode('sustain');
    mySound.play();

}

function stop() {
    mySound.pause();
}

function toggleVid() {
  // if (playing) {
  //   fingers.pause();
  // } else {
   fingers.play();
  // }
  // playing = !playing;
}

// function draw() {
//     background(50);
//     fill(255);
//     noStroke();

//     const data = fft.waveform();

//     for (let i = 0; i < 128; i++) {
//         const x = map(i, 0, 128, 0, 500);
//         const y = map(data[i], -1, 1, 190, 10);
//         ellipse(x, y, 2, 2);
//     }
// }