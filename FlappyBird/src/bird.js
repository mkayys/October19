const CONSTANTS = {
    GRAVITY: 0.8,
    FLAP_SPEED: -8,
    TERMINAL_VEL: 12,
    BIRD_WIDTH: 40,
    BIRD_HEIGHT: 30
};

export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.pos = { width: Math.floor(this.dimensions.width / 3), height: Math.floor(this.dimensions.height / 2) };
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.pos.width, this.pos.height, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    }

    move() {
        this.pos.height += this.velocity;
        this.velocity += CONSTANTS.GRAVITY; // for gravity
    }

    flap() {
        this.velocity = CONSTANTS.FLAP_SPEED;
    }
}