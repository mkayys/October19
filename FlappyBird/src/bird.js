export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.pos = { width: Math.floor(this.dimensions.width / 3), height: Math.floor(this.dimensions.height / 2) };
        this.y = this.pos.height;
        this.x = this.pos.width;
    }

    animate(ctx) {
        this.drawBird(ctx);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.pos.width, this.pos.height, 40, 30);
    }

    move() {
        this.velocity += this.y
        this.velocity += 0.5 // for gravity
    }
}