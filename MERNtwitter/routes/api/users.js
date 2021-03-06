const express = require("express");
const router = express.Router();

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const bcrypt = require('bcryptjs');
const User = require('../../models/User');

const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));




router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Use the validations to send the error
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password
                })

                // newUser.save()
                //     .then(user => res.send(user))
                //     .catch(err => res.send(err))

                // first argument: how many rounds of salting
                // second argument: callback for when we finish salting
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
});

 
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                // Use the validations to send the error
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // res.json({ msg: 'Success' });
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
                        }

                        jwt.sign(payload, keys.secretOrKey, 
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            })
                    } else {
                        // And here:
                        errors.password = 'Incorrect password'
                        return res.status(400).json(errors);
                    }
                })
        })
});

module.exports = router;