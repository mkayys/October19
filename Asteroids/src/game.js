
const Asteroid = require('./asteroid');

Game.DIM_X = 700;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 20;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i ++) {
        this.asteroids.push(new Asteroid({ pos: this.randomPosition() }));
    }
}

Game.prototype.randomPosition = function() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ]
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }

}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

module.exports = Game;