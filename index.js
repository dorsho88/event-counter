const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// db
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/remarkety');
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());


app.use(cors());

// errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message })
})

// routes
// TODO: specify Content-Type: application/json ?
app.use('/api', routes);


app.listen(process.env.port || 4000, function () {
  console.log('listening...');
})