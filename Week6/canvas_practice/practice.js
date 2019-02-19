document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(20, 10, 150, 100);

  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(20, 20);
  ctx.lineTo(200, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(20, 20);
  ctx.lineTo(120, 120);
  ctx.stroke();

  // function draw() {
  //   const canvas = document.getElementById('canvas');
  //   if (canvas.getContext) {
  //     const ctx = canvas.getContext('2d');

  //     ctx.fillRect(25, 25, 100, 100);
  //     ctx.clearRect(45, 45, 60, 60);
  //     ctx.strokeRect(50, 50, 50, 50);
  //   }
  // }

  // function draw() {
  //   const canvas = document.getElementById('mycanvas')

  //   if (canvas.getContext) {
  //     const ctx = canvas.getConext('2d');

  //     ctx.fillRect(25, 25, 100, 100);
  //     ctx.clearRect(45, 45, 60, 60);
  //     ctx.strokeRect(50, 50, 50, 50);
  //   }
  // }

  // draw();

  // set line width
  ctx. lineWidth = 10;

  

// ========== House ==============

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
});

// ================================