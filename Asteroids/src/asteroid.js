const Util = require('../dist/utils');
const MovingObject = require('./moving_object');

const DEFAULTS = {
    COLOR: 'grey',
    RADIUS: 10
}

function Asteroid(options) {
    
    options = options || {};
    options.pos = options.pos;
    options.vel = options.vel || Util.randomVec(10);
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;

    MovingObject.call(this, options)

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;