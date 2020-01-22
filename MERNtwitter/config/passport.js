const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

// const User = mongoose.model('users');
const User = mongoose.model('User');
const keys = require('./keys');
