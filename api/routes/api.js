const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// get all
// groupBy event_type
// sort by count of event_type DESC
router.get('/events', function (req, res) {
  Event.aggregate([
    {
      $group:
      {
        _id: "$event_type",
        count: { $sum: 1 }
      }
    },
    { "$sort": { "count": -1 } }
  ]).then(function (events) {
    res.send(events);
  });

});

// create
router.post('/events', function (req, res, next) {
  Event.create(req.body).then(function (event) {
    res.send(event);
  }).catch(next);
});

// update
router.put('/events/:id', function (req, res, next) {
  Event.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Event.findOne({ _id: req.params.id }).then(function (event) {
      res.send(event);
    });
  });
});

// delete
router.delete('/events/:id', function (req, res, next) {
  Event.findByIdAndRemove({ _id: req.params.id }).then(function (event) {
    res.send(event);
  });
});

module.exports = router;
