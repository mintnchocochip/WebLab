const can = document.getElementById("canvas");
const ctx = can.getContext("2d");

// roof
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(150, 250);
ctx.lineTo(50, 250);
ctx.lineTo(100, 200);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "blue";
ctx.stroke();

// house
ctx.beginPath();
ctx.fillStyle = "orange";
ctx.fillRect(50,250,100,120)
ctx.strokeStyle = "blue";
ctx.strokeRect(50,250,100,120);

// window
ctx.beginPath();
ctx.fillStyle = "blue"
ctx.fillRect(60, 270, 25, 25)
ctx.strokeStyle = "blue";
ctx.strokeRect(60, 270, 25, 25);

// door
ctx.beginPath();
ctx.fillStyle = "brown"
ctx.fillRect(90, 300, 20, 70)
ctx.strokeStyle = "blue";
ctx.strokeRect(90, 300, 20, 70);

// pond
ctx.beginPath();
ctx.ellipse(300, 300, 120, 60, 0, 0, 2 * Math.PI); 
ctx.fillStyle = "lightblue"
ctx.fill();
ctx.strokeStyle = "blue"
ctx.stroke();

// boat
ctx.beginPath();
ctx.moveTo(260, 280)
ctx.lineTo(340, 280)
ctx.lineTo(315, 300)
ctx.lineTo(285, 300)
ctx.lineTo(260, 280)
ctx.fillStyle = "brown"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// sun
ctx.beginPath();
ctx.arc(500, 80, 50, 0, 2 * Math.PI);
ctx.fillStyle = "yellow"
ctx.fill()

// stone
ctx.beginPath();
ctx.arc(90,435, 17, 0, 2*Math.PI)
ctx.fillStyle = "gray"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// stone
ctx.beginPath();
ctx.arc(110,450, 15, 0, 2*Math.PI)
ctx.fillStyle = "gray"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// stone
ctx.beginPath();
ctx.arc(130,435, 17, 0, 2*Math.PI)
ctx.fillStyle = "gray"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// stone
ctx.beginPath();
ctx.arc(500,435, 17, 0, 2*Math.PI)
ctx.fillStyle = "gray"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// stone
ctx.beginPath();
ctx.arc(520,450, 12, 0, 2*Math.PI)
ctx.fillStyle = "gray"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// birdbody
ctx.beginPath();
ctx.arc(450,370, 30, 0, 2*Math.PI)
ctx.fillStyle = "yellow"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// birdhead
ctx.beginPath();
ctx.arc(480,350, 20, 0, 2*Math.PI)
ctx.fillStyle = "yellow"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// birdeye
ctx.beginPath();
ctx.arc(490,345, 5, 0, 2*Math.PI)
ctx.fillStyle = "black"
ctx.fill()
ctx.strokeStyle = "blue"
ctx.stroke();

// beak
ctx.beginPath();
ctx.moveTo(500, 340)
ctx.lineTo(500, 360)
ctx.lineTo(520, 350)
ctx.fillStyle = "orange"
ctx.fill()


ctx.beginPath();
ctx.moveTo()
ctx.quadraticCurveTo(100, 100, 200, 100);