//reference from linear gradient example: https://p5js.org/examples/color-linear-gradient.html
//p5js color: https://p5js.org/learn/color.html


//https://www.ibiblio.org/wm/paint/auth/malevich/sup/malevich.aeroplane-flying.jpg

//https://www.stedelijk.nl/en/collection/3133-kazimir-malevich-suprematistische-compositie-%28met-acht-rode-rechthoeken%29


let switchState = true;
let buttonState = true;







function setup() {
   	createCanvas(windowWidth, windowHeight);
   	background(255);
 //   	var baseX = width/2-80;
	// var baseY = height/2;
	 var baseX = 0;
	 var baseY = 0;

	
    // rect(random());
	fill(random(100,200),32,22);
	noStroke();
	rectMode(CENTER);
	translate(width/2-80,height/2);
    rotate(-PI/random(0,5));


 //no.0
    quad(baseX+60,baseY-90,
    	 baseX+150,baseY-90,
    	 baseX+150,baseY-14,
    	 baseX+60,baseY-14);

 //no.1
    quad(baseX,baseY,
    	 baseX+250,baseY,
    	 baseX+250,baseY+60,
    	 baseX,baseY+60);

 //no.2
     quad(baseX-random(0,10),baseY+70,
    	 baseX+40,baseY+70+random(0,5),
    	 baseX+40,baseY+110-random(0,5),
    	 baseX-random(0,10),baseY+110);
 //no.5 
 	 quad(baseX-170-random(5,10),baseY+50,
    	 baseX-50,baseY+50-random(0,10),
    	 baseX-50,baseY+90-random(0,10),
    	 baseX-170-random(0,10),baseY+90);
 //no.6
 	 quad(baseX-140-random(5,10),baseY+10,
    	 baseX-80,baseY+10-random(0,10),
    	 baseX-80,baseY+30-random(0,10),
    	 baseX-140-random(0,10),baseY+30);
  //no.7 
 	 quad(baseX-110-random(5,10),baseY+140,
    	 baseX-80,baseY+140-random(0,10),
    	 baseX-80,baseY+160-random(0,10),
    	 baseX-110-random(0,10),baseY+160);


    baseX = 50;
    baseY = 80;

//no.3
    quad(baseX,baseY+random(5,10),
    	 baseX+280,baseY-random(5,10),
    	 baseX+280,baseY+60-random(5,10),
    	 baseX,baseY+60+random(5,10));


    baseX = -40;
    baseY = 200;

//no 4
    quad(baseX,baseY,
    	 baseX+85,baseY,
    	 baseX+85,baseY+70,
    	 baseX,baseY+70);



    // quad(baseX,baseY,
    // 	 baseX+85,baseY,
    // 	 baseX+85,baseY+70,
    // 	 baseX,baseY+70);

    // baseX = -40;
    // baseY = height/2+200;


    // quad(baseX,baseY,
    // 	 baseX+85,baseY,
    // 	 baseX+85,baseY+70,
    // 	 baseX,baseY+70);


    


    // quad(baseX,baseY,baseX+250,baseY,baseX+250,baseY-60,baseX,baseY-60+random(0,10));
    // noLoop();
    // background(0);
    // c1 = color(0);
    // c2 = color(0, 0, 102);
    // noStroke();
    // fill(255, 255, 255);

  
    // for (var i = 0; i < 200; i++){
    //   x[i] = random(width);
    //   y[i] = random(height);

    // }

}




function draw() {
	
}






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