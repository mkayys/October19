export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.pos = { width: Math.floor(this.dimensions.width / 3), height: Math.floor(this.dimensions.height / 2) }
    }

    animate(ctx) {
        this.drawBird(ctx);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.pos.width, this.pos.height, 40, 30);
    }

}