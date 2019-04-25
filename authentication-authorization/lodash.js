const _ = require('lodash');
const {User, validate} = require('../models/user');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    await user.save();

    // res.send(user); This approach will cause an error, because we don't want to send the password to a user
    //
    // We must approach to a problem more subtly
    //
    // First approach
    //
    // res.send({
    //  name: user.name,
    //  email: user.email
    // )};
    //
    // Second approach - loadsh
    //

    res.send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;