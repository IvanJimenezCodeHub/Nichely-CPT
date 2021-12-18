const express = require('express');
const passport = require('../middlewares/authentication');
const { sequelize } = require('../models');
const router = express.Router();
const db = require('../models');
const { Event, User } = db;


router.get('/:id', (req,res) => { 

    const { id } = req.params;

    Event.findAll({
        where: {hostId:id}
      })
        .then(events => {
            res.json(events)
        });

});


module.exports = router;
