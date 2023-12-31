
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode('hsb',100)
    rectMode(RADIUS)
    ellipseMode(CENTER)
  }
  
  function draw() {
    background(44.52, 50.36, 54.51)
    fill(0,0,100)
    strokeWeight(1)
    translate(width/2, height/2-200)
    let floor = 450
    let barbells = 220 + 40 * sin(frameCount/40)
    drawBodyParts(floor, barbells)
    drawGuidance()
  }
  
  function drawBodyParts(floor, barbells) {
    drawFeet(floor, barbells)
  }
  
  function drawFeet(floor, barbells) {
    push()
    translate(-300, floor)
    drawShank(floor, barbells)
    beginShape()
    vertex(25, 0)
    vertex(-25, 0)
    vertex(-20, -15)
    vertex(25, -5)
    vertex(25, 0)
    endShape()
    translate(300,0)
    beginShape()
    vertex(12, 0)
    vertex(-12, 0)
    vertex(-12, -5)
    vertex(-6, -10)
    vertex(6,-10)
    vertex(12,-5)
    vertex(12,0)
    endShape()
    translate(100,0)
    beginShape()
    vertex(12, 0)
    vertex(-12, 0)
    vertex(-12, -5)
    vertex(-6, -10)
    vertex(6,-10)
    vertex(12,-5)
    vertex(12,0)
    endShape()
    pop()
  }
  
  function drawShank() {
    
    push()
    // translate(350,-96+100*sin(0.125*PI*sin(frameCount/40))) 
    translate(350,-115+100*sin(0.125*PI*sin(frameCount/40)))
    push()
    scale(1,0.7)
    ellipse(0,0,50,50)
    beginShape()
    vertex(0,-10)
    vertex(20,-15)
    vertex(24,-25)
    vertex(25,-28)
    vertex(26,-35)
    vertex(28,-45)
    vertex(31,-80+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(36,-120+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(33,-140)+15*sin(0.125*PI*sin(frameCount/40))
    vertex(18,-150+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(17,-160+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(15,-178)
    vertex(-15,-178)
    vertex(-17,-160+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(-18,-150+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(-33,-140+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(-36,-120+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(-31,-80+15*sin(0.125*PI*sin(frameCount/40)))
    vertex(-28,-45)
    vertex(-26,-35)
    vertex(-25,-28)
    vertex(-24,-25)
    vertex(-20,-15)
    vertex(0,-10)
    endShape()
    pop()
    translate(0,-110)
    rect(0,15*sin(0.125*PI*sin(frameCount/40)), 200, 5)
    ellipse(0,-10+15*sin(0.125*PI*sin(frameCount/40)),40,40)
    push()
    for(let i=0; i<2; i++) {
      beginShape()
      vertex(15,5+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(25,5+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(35,0+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(45,3+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(55,15+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(58,20+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(58,27+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(58,17+15*sin(0.125*PI*sin(frameCount/40)))
      vertex(63,15*sin(0.125*PI*sin(frameCount/40)))
      vertex(76,15*sin(0.125*PI*sin(frameCount/40)))
      vertex(79,38)
      vertex(75,46)
      vertex(70,54)
      vertex(52,50)
      vertex(38,36)
      endShape()
      ellipse(70,15*sin(0.125*PI*sin(frameCount/40)),15,15)
      fill(100,0,0)
      strokeWeight(2)
      stroke(100,0,100)
      rect(150,15*sin(0.125*PI*sin(frameCount/40)),5,37.5)
      scale(-1,1)
      fill(100,0,100)
      strokeWeight(1)
      stroke(100,0,0)
    }
    pop()
    pop()
    
    push()
    translate(-15, -5)
    rotate(0.125*PI+0.125*PI*sin(frameCount/40))
    beginShape()
    vertex(5, 0)
    vertex(10, -10)
    vertex(25, -80)
    vertex(15, -90)
    vertex(0, -80)
    vertex(-10, -50)
    vertex(-5, 0)
    vertex(5, 0)
    endShape()
    drawThigh()
    pop()
    push()
    scale(1, cos(0.125*PI+0.125*PI*sin(frameCount/40)))
    translate(300,0)
    push()
    beginShape()
    vertex(-6, -10)
    vertex(-6, -20)
    vertex(-15, -50)
    vertex(-15, -80)
    vertex(-12, -85)
    vertex(12, -85)
    vertex(15, -80)
    vertex(15, -50)
    vertex(6, -20)
    vertex(6,-10)
    endShape()  
    pop()
    push()
    translate(100,0)
    // Right shank
    beginShape()
    vertex(-6, -10)
    vertex(-6, -20)
    vertex(-15, -50)
    vertex(-15, -80)
    vertex(-12, -85)
    vertex(12, -85)
    vertex(15, -80)
    vertex(15, -50)
    vertex(6, -20)
    vertex(6,-10)
    endShape()
    pop()
    pop()
    push()
    translate(300, -65-(-40)*sin(0.125*PI*sin(frameCount/40)))
    push()
    shearY(-PI/8+sin(0.125*PI*sin(frameCount/40)))
    beginShape()
    vertex(-2, -5)
    vertex(-8, -17)
    vertex(-12, -18)
    vertex(-12, -24)
    vertex(-12, -36)
    vertex(5,-48)
    vertex(15,-52)
    vertex(30,-48)
    vertex(40,-24)
    vertex(45,-18)
    vertex(48,-10)
    vertex(30,-2)
    vertex(6, 0)
    vertex(-2, -5)
    endShape()
    pop()
    beginShape()
    vertex(-6, 0)
    vertex(-12, -7)
    vertex(-18, -18)
    vertex(-18, -24)
    vertex(-10, -36)
    vertex(10, -36)
    vertex(18, -24)
    vertex(18, -18)
    vertex(6, 0)
    vertex(-6, 0)
    endShape()  
    
    translate(100,0)
    scale(-1,1)  
    push()
    shearY(-PI/8+sin(0.125*PI*sin(frameCount/40)))
    beginShape()
    vertex(-2, -5)
    vertex(-8, -17)
    vertex(-12, -18)
    vertex(-12, -24)
    vertex(-12, -36)
    vertex(5,-48)
    vertex(15,-52)
    vertex(30,-48)
    vertex(40,-24)
    vertex(45,-18)
    vertex(48,-10)
    vertex(30,-2)
    vertex(6, 0)
    vertex(-2, -5)
    endShape()
    pop()
    beginShape()
    vertex(-6, 0)
    vertex(-12, -7)
    vertex(-18, -18)
    vertex(-18, -24)
    vertex(-10, -36)
    vertex(10, -36)
    vertex(18, -24)
    vertex(18, -18)
    vertex(6, 0)
    vertex(-6, 0)
    endShape()
    pop()
  }
  
  function drawThigh() {
    push()
    translate(10, -75)
    rotate(1.6*PI+0.30*PI*sin(PI+frameCount/40))  
    drawTrunk()
    beginShape()
    vertex(15, 0)
    vertex(25, -20)
    vertex(35, -85)
    vertex(15, -95)
    vertex(-5, -85)
    vertex(-10, -50)
    vertex(-5, 0)
    vertex(10, 0)
    endShape()
    pop()
  }
  
  function drawTrunk() {
    push()
    translate(15, -80)
    rotate(0.4*PI-0.22*PI*sin(PI+frameCount/40))
    fill(100,0,0)
    strokeWeight(2)
    stroke(0,0,100)
    ellipse(-5,-100,75,75)
    fill(100,0,100)
    stroke(0,0,0)
    strokeWeight(1)
    beginShape()
    vertex(15, 0)
    vertex(25, -20)
    vertex(35, -100)
    vertex(15, -110)
    vertex(-5, -100)
    vertex(-10, -50)
    vertex(-6, -25)
    vertex(-7, 10)
    vertex(0, 10)
    vertex(15, 0)
    endShape()
    beginShape()
    vertex(15, -60)
    vertex(-15, -45)
    vertex(-18, -48)
    vertex(-21, -66)
    vertex(-12, -99)
    vertex(2, -99)
    vertex(0, -80)
    vertex(5, -70)  
    vertex(5, -60)  
    vertex(5, -70) 
    vertex(0, -80)
    vertex(2, -90)
    vertex(10, -95)
    vertex(15, -95)
    vertex(20, -93)
    vertex(23, -90)
    vertex(23, -85)
    vertex(15, -60)
    endShape()
    ellipse(-5,-100,15,15)
    ellipse(15, -130, 40, 40)
    pop()
  }
  
  function drawGuidance() {
    push()
    textSize(24)
    fill(0,0,100)
    strokeWeight(0)
    translate(-300, -50)
    text("1. Point your toes straight ahead\n2. Squat until your thighs are parallel to the floor\n3. Keep your lower back straight\n4. Head up, narrow grip distance\n5. Use the deltoid and trapezius muscles to secure the barbell", 0,0)
    fill(0,80,100)
    for(let i=0;i<5;i++) {
      ellipse(-15,-7+30*i,15,15)
    }
    stroke(0,80,100)
    strokeWeight(4)
    line(-15, 113, -15, 140)
    line(-15, 140, 350, 140)
    line(350, 140, 350, 230+45*sin(frameCount/40))
    line(300, 230+45*sin(frameCount/40), 400, 230+45*sin(frameCount/40))
    line(300, 230+45*sin(frameCount/40), 300, 290+45*sin(frameCount/40))
    line(300, 290+45*sin(frameCount/40), 400, 290+45*sin(frameCount/40))
    line(400, 230+45*sin(frameCount/40), 400, 290+45*sin(frameCount/40))
    
    
    line(-15, 83, -45, 83)
    line(-45, 83, -45, 170)
    line(-45, 170, 250, 170)
    line(250, 170, 250, 350+45*sin(frameCount/40))
    line(250, 350+45*sin(frameCount/40),350, 350+45*sin(frameCount/40))
    line(350, 350+45*sin(frameCount/40), 350, 330+45*sin(frameCount/40))
    line(275, 330+45*sin(frameCount/40), 425, 330+45*sin(frameCount/40))
    line(275, 330+45*sin(frameCount/40), 275, 280+45*sin(frameCount/40))
    line(425, 330+45*sin(frameCount/40), 425, 280+45*sin(frameCount/40))
    
    line(-15, 53, -75, 53)
    line(-75, 53, -75, 340+45*sin(frameCount/40))
    line(-75, 340+45*sin(frameCount/40), -50, 340+45*sin(frameCount/40))
    line(-50, 340+45*sin(frameCount/40), -35, 300+45*sin(frameCount/40))
    line(-50, 340+45*sin(frameCount/40), -65, 360+45*sin(frameCount/40))
    
    line(-15, 23, -105, 23)
    line(-105, 23, -105, 455)
    line(-105, 455, 20, 455)
    line(-50, 455, -50, 415)
    line(-50, 445, -40, 445)
    line(-40, 445, -40, 455)
    
    line(-15, -7, -135, -7)
    line(-135, -7, -135, 520)
    line(-135, 520, 400, 520)
    line(0, 520, 0, 510)
    line(-30, 510, 30, 510)
    line(-30, 510, -30, 500)
    line(30, 510, 30, 500)
    line(300, 520, 300, 510)
    line(285, 510, 315, 510)
    line(285, 510, 285, 500)
    line(315, 510, 315, 500)
    line(400, 520, 400, 510)
    line(385, 510, 415, 510)
    line(385, 510, 385, 500)
    line(415, 510, 415, 500)
    
    stroke(0,0,0)
  }  