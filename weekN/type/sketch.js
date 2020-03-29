

// let mySound;

// function preload() {
//   mySound = loadSound('assets/poem.wav');
// }

// function setup() {
//   createCanvas(400, 200);
//   background(50);
//   const startButton = createButton('play');
//   startButton.mousePressed(start);
// }

// function start() {
//   mySound.play(0, random(0.5, 2), 1);
// }

let mySound;
let fft;
let playing = false;

function preload() {
    mySound = loadSound('assets/type.mp3');

}

function setup() {
    createCanvas(450, 400);

    // fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);

    fft = new p5.FFT(0, 32);
    fft.setInput(mySound);


    startButton = createButton('start');
    startButton.position(50,140);
    startButton.mousePressed(start);
    // startButton.mousePressed(toggleVid);

    stopButton = createButton('stop');
    stopButton.position(100,140);
    stopButton.mousePressed(stop);
    // stopButton.mousePressed(toggleVid);
}

function start() {
    mySound.loop(0, 1, 1, 0, 4);
}

function stop() {
    mySound.pause();
    data = 0;
}

// function toggleVid() {
//   if (playing) {
//     fingers.pause();
//   } else {
//     fingers.loop();
//   }
//   playing = !playing;
// }

function draw() {
    // background();
    // fill(255);
    noStroke();

    const data = fft.waveform();

    for (let i = 0; i < 32/2; i++) {
        const x = map(i, 0, 32, 0, 40);
        const y = map(data[i], -0.05, 0.05, 70, 10);
        background(map(y,55,35,255,10),map(x,55,35,255,10),140);
        // print(data[i]);
        // ellipse(x, y, 2, 2);
        // text("Those early mornings with their tearful separations")
        textSize(x * y /35);
        fill(255,255-map(y,55,35,255,10));
        text("Error 404 Not Found",50,100);     
    }
 // let i = 20;
 //      text("Those early mornings with their tearful separations",30,100);
 //      text("The first kiss after getting out of bed pale green as a stem ",30,100+i);
 //      text("Facing a filthy mirror",30,100+i*2);
 //     text("Putting earrings back in place",30,100+i*3);
 //     text("Leaving a sentence on the wall",30,100+i*4);
 //     text("The secret joys of the melancholy heart.",30,100+i*5);
 //     text("The slightly icy April seawater that we missed and",30,100+i*6);
 //     text("Those wasted hours when by chance we could not meet",30,100+i*7);
 //     text("Those early mornings with their tearful separations",30,100+i*8);
 //     text("The first kiss after getting out of bed pale green as a stem ",30,100+i*9);
 //     text("The brass shop that we missed where at noon there flashed the face of a cat ",30,100+i*10);


}