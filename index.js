const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

// db
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/remarkety');
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

// routes
// TODO: specify Content-Type: application/json ?
app.use('/api', routes);

// errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, function () {
  console.log('listening...');
})