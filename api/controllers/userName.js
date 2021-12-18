const express = require('express');
const passport = require('../middlewares/authentication');
const { sequelize } = require('../models');
const router = express.Router();
const db = require('../models');
const { Event, User } = db;


router.get('/:id', (req,res) => {

    const { id } = req.params;

    User.findByPk(id)
    .then(user => {
        res.json(user);
    });

});


module.exports = router;
