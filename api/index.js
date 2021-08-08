const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

// db
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/remarkety');
mongoose.set('useFindAndModify', false);

// serve frontend on root
app.use(express.static(path.join(__dirname, '/../frontend/dist/event-counter')));

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes
// TODO: specify Content-Type: application/json, HTTP 1.1 ?
app.use('/api', routes);

// errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, function () {
  console.log('Started Remarkety Event Counter App. Listening for event requests...');
})