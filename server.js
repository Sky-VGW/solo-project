const path = require('path');
const express = require('express');
const cors = require('cors');
const markerController = require('./server/controllers/marker-controllers')
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://schuyler942:codesmith@cluster0.3el77hj.mongodb.net/';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'mapster'
})
.then(() => console.log('connected to Mongo DB Marker database'))
.catch(err => console.log(err))


const app = express();
const PORT = 8080;

app.use (cors());
app.use(express.json());

app.get("/", markerController.getMarkers, (req, res) => {
  return res.status(200).json(res.locals.markers);
})

app.post("/", markerController.addMarker, (req, res) => {
  return res.status(200);
})

app.patch("/", markerController.updateMarker, (req, res) => {
  return res.status(200);
})


// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   }
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
});

module.exports = app;