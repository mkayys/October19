const CONSTANTS = {
  GAP: 200,
  SPACING: 220,
  MOVEMENT: 1,
  PIPE_WIDTH: 20
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [
      { x: 500, y: 300 },
      { x: 720, y: 220 },
      { x: 920, y: 500 }
    ];
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    this.drawPipes(ctx);
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  movePipes() {
    this.pipes.forEach((pipe) => {
      pipe.x -= CONSTANTS.MOVEMENT;
      if (pipe.x <= 0) {
        this.pipes.shift();
        let newPipe = this.generateNewPipe(100, 300);
        // generate new pipe
        this.pipes.push(newPipe);
      }
    })
  }

  generateNewPipe(min, max) {
    let y = Math.floor(Math.random() * (max - min +1)) + min;
    // console.log("y", y)
    let pipe = {
      x: 660,
      y
    };
    // console.log('pipe', pipe)
    return pipe;
  }

  drawPipes(ctx) {
    for (let i = 0; i < this.pipes.length; i++) {
      let pipe = this.pipes[i];
      ctx.fillStyle = "green";
      console.log('pipe:', pipe, 'pipeX:', pipe.x, 'pipeY:', pipe.y)
      ctx.fillRect(pipe.x, 0, pipe.x, pipe.y); 
      ctx.fillRect(pipe.x, pipe.y + CONSTANTS.GAP, pipe.x, this.dimensions.height); 
    };
  }
}