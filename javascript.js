const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("webgl2");
let squareBuffer=[];
let i = 0;

canvas.addEventListener("mousemove",handleMouseMove);

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

/* ctx.viewport(0,0,ctx.drawingBufferWidth,ctx.drawingBufferHeight)*/

ctx.clearColor(22/255,18/255,59/255,1.0);
ctx.clear(ctx.COLOR_BUFFER_BIT);




function handleMouseMove(e){
  ctx.disable(ctx.SCISSOR_TEST);
  if(i == 20) i = 0;

  ctx.clearColor(22/255,18/255,59/255,1.0);
  ctx.clear(ctx.COLOR_BUFFER_BIT);

  let speed = Math.sqrt(e.movementX*e.movementX+e.movementY*e.movementY)*1.5;
  console.log(speed);

  squareBuffer[i] = {
    xCoord:e .clientX-speed/2,
    yCoord: -e.clientY+567-speed/2,
    size: speed}

  ctx.enable(ctx.SCISSOR_TEST);

  for(let j = 0; j<squareBuffer.length; j++){
    ctx.scissor(squareBuffer[j].xCoord,squareBuffer[j].yCoord, squareBuffer[j].size, squareBuffer[j].size);
    ctx.clearColor(0.5,0.5,0.5,1.0);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
  }
  i++;
}