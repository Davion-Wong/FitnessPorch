let slider;
let x;

function setup() {
  // Create canvas and set color mode to HSB, which I prefer
  createCanvas(1280, 500);
  colorMode('hsb',100)
  
  // Create four sliders to collect information from webpage visitors
  slider_1 = createSlider(0, 6, 3, 1);
  slider_2 = createSlider(0, 30, 15, 1);
  slider_3 = createSlider(0, 40, 20, 5);
  slider_4 = createSlider(0, 100, 50, 10);
  slider_1.position(730, 530);
  slider_2.position(730, 590);
  slider_3.position(730, 650);
  slider_4.position(730, 710);
  slider_1.style("width", "280px");
  slider_2.style("width", "280px");
  slider_3.style("width", "280px");
  slider_4.style("width", "280px");
}

function draw() {
  // Set the background color to be the same with my own website
  translate(200,0)
  background(44.52, 50.36, 54.51);
  
  // The calculation of score, based on the given information. This value is roughly proportional to all the input values entered by visitors
  x = slider_1.value()*slider_2.value()*0.5*(0.01*(80+0.5*slider_3.value()))*(0.01*slider_4.value())/9*10
  
  // Post text sentences to tell the visitors how to input information
  fill(100)
  textSize(18)
  text('How many body parts do you exercise each week? ', 400, 90);
  text(slider_1.value(), 830, 90);
  text('How many sets do you exercise for each body part? ', 400, 150);
  text(slider_2.value(), 830, 150);
  text('How much extra protein do you consume each day? ', 400, 210);
  text(slider_3.value()+'g', 830, 210);
  text('What is the percentage that you think you can stick\n to your plan? ', 400, 270);
  text(slider_4.value()+'%', 830, 270);
  textSize(40)
  
  // The calculated score is shown at the bottomright corner
  text("Your fitness score is:", 400,350)
  textSize(96)
  text(Math.floor(x * 100)/100, 530, 460);
  
  // Begin to draw, with basic line tool.
  strokeWeight(2)
  
  // Go to the desired drawing position
  translate(210,100)
  
  // Because the image is symmetric, we do it two times for different halves
  for(let i=0;i<2;i++){
    // The body outline
    beginShape();
    vertex(0, 75);
    vertex(30, 75);
    vertex(30+0.05*x, 90);
    vertex(60+0.1*x, 110);
    vertex(100, 120);
    vertex(120, 130-0.1*x);
    vertex(140+0.1*x, 150-0.1*x);
    vertex(150+0.1*x, 195);
    vertex(150, 210);
    vertex(150+0.1*x, 220);
    vertex(152+0.1*x, 225);
    vertex(158+0.05*x, 255);
    vertex(160, 260);
    vertex(160+0.05*x, 275);
    vertex(160, 350);
    vertex(130, 350);
    vertex(110, 290);
    vertex(110, 270);
    vertex(108-0.05*x, 262);
    vertex(102-0.05*x, 238);
    vertex(100, 230);
    vertex(90-0.1*x, 260);
    vertex(95-0.2*x, 300);
    vertex(95-0.2*x, 320);
    vertex(70-0.2*x, 340-0.1*x);
    vertex(30-0.2*x, 360-0.2*x);
    vertex(0, 360-0.2*x);
    endShape();
    
    // The lines of deltoids
    line(150, 210, 150-0.15*x,210)
    line(150-0.15*x, 210, 150-0.3*x,210-0.05*x)
    line(150-0.3*x,210-0.05*x,150-0.7*x,210-0.006*x*x)
    
    // The lines of biceps
    line(110,270,110+0.2*x,270)
    line(110+0.2*x,270,110+0.3*x,270-0.1*x)
    line(110+0.3*x,270-0.1*x,110+0.3*x,270-0.004*x*x)
    
    // The lines of pectorales
    line(7-0.05*x,200,17-0.15*x,230)
    line(17-0.15*x,230,30-0.1*x,240)
    line(30-0.1*x,240,60,250-0.05*x)
    line(60,250-0.05*x,70,250-0.05*x)
    line(70,250-0.05*x,80,245-0.05*x)
    
    // The lines around neck
    line(27-0.05*x,110+0.05*x,27,120+0.05*x)
    line(27,120+0.05*x,40-0.05*x,130+0.05*x)
    line(40-0.05*x,130+0.05*x,60+0.25*x,125+0.05*x)
    
    // The lines armpits
    line(100, 230, 92+0.15*x,205)
    line(92+0.15*x, 205, 92+0.15*x,190)
    
    // The first row of abs
    line(73-0.28*x,270-0.1*x,73-0.33*x,290-0.15*x)
    line(73-0.33*x,290-0.15*x,73-0.71*x,290-0.15*x)
    line(2,260,2,260+0.15*x)

    // The second row of abs
    line(73-0.275*x,290,75-0.35*x,310-0.05*x)
    line(75-0.35*x,310-0.05*x,75-0.73*x,310-0.05*x)
    line(2,290,2,290+0.15*x)
    
    // The third row of abs
    line(75-0.3*x,310,70-0.3*x,320)
    line(70-0.3*x,320,60-0.3*x,330)
    line(60-0.3*x,330,40-0.4*x,336)
    line(40-0.4*x,336,10-0.1*x,338-0.2*x)
    
    // papillae
    ellipse(60+0.05*x,230+0.05*x, 10,10)
    
    // The outline of the head
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(40, 20);
    vertex(40, 40);
    vertex(35, 55);
    vertex(35, 70);
    vertex(10, 95);
    vertex(0, 95);
    endShape();
      
    // The eyes
    beginShape();
    vertex(5, 50);
    vertex(10, 45);
    vertex(20, 45);
    vertex(25, 50);
    vertex(20, 55);
    vertex(10, 55);
    vertex(5, 50);
    endShape();
    
    // The pupils
    fill(0)
    ellipse(15,50,5,5)
    fill(100)
    
    // The mouth
    line(0,75,10,75)
    line(10,75,12,74)
    
    // Mirror the coordinate and begin to draw another side
    scale(-1,1)
  }
  // The navel
  ellipse(0, 320-0.05*x,10,10-0.05*x)
}