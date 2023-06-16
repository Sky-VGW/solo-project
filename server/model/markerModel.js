const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb+srv://schuyler942:codesmith@cluster0.3el77hj.mongodb.net/';

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'mapster'
// })
// .then(() => console.log('connected to Mongo DB Marker database'))
// .catch(err => console.log(err))

const Schema = mongoose.Schema;

const markerSchema = new Schema({
  id: Number,
  latlng: Object,
  message: String
})

const Marker = mongoose.model('markers', markerSchema);

module.exports = Marker;