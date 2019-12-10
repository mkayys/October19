const Util = require('../dist/utils');
const MovingObject = require('./moving_object');

const DEFAULTS = {
    COLOR: 'grey',
    RADIUS: 10
}

function Asteroid(options) {
    
    options = options || {};
    options.pos = options.pos;
    options.vel = options.vel;
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;

    MovingObject.call(this, options)

}