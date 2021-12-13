const express = require('express');
const passport = require('../middlewares/authentication');
const { sequelize } = require('../models');
const router = express.Router();
const db = require('../models');
const { Event } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /events
//    POST   /events
//    GET    /events/:id
//    PUT    /events/:id
//    DELETE /events/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Event.findAll({
    order: [['createdAt', 'DESC']]
  })
    .then(events => res.json(events));
});

router.post('/', passport.isAuthenticated(), (req, res) => {
  let { eventName, eventDescription, eventLocation, latitude, longitude, eventTime, eventDate, relevantInterests, hostId } = req.body;
  let rsvpList = [];
  Event.create({ eventName, eventDescription, eventLocation, latitude, longitude, eventTime, eventDate, relevantInterests, hostId, rsvpList })
    .then(post => {
      console.log("created!");
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Event.findByPk(id)
    .then(post => {
      if(!post) {
        console.log("Error getting!\n");
        return res.sendStatus(404);
      }

      res.json(post);
    });
});


router.put('/:id/:uid', passport.isAuthenticated(), (req, res) => {

  const { eventId, userId } = req.body;

    // Peforms array_append method on the ARRAY datatype for RSVP list
  Event.update(
    {'rsvpList' : sequelize.fn('array_append', sequelize.col('rsvpList'), userId)},
    {'where': {'id': eventId}})
      .then(ev => {
        if(!ev) {
          console.log("Error updating (put). Event was not found!\n");
          return res.sendStatus(404);
        }

        ev.save()
          .then(post => {
            res.json(post);
          })
          .catch(err => {
            res.status(400).json(err);
          });
    });
});


router.delete('/:id', passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Event.findByPk(id)
    .then(post => {
      if(!post) {
        console.log("Error deleting. Event was not found!\n");
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;
