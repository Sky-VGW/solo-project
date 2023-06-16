
const Marker = require('../model/markerModel')

const markerController = {};

markerController.getMarkers = async (req, res, next) => {
  try {
    const markers = await Marker.find({})
    res.locals.markers = [...markers];
    return next();
  } catch (e) {
    return next(e);
  }
}

markerController.addMarker = async (req, res, next) => {
  const { id, latlng } = req.body;
  try{
    await Marker.create({
    id,
    latlng
    })
    console.log('Person created: ' + marker);
    return next();
  } catch (e) {
    return next(e);
  }  
 }

 markerController.updateMarker = async (req, res, next) => {
  try {
    const { id, message } = req.body;
    await Marker.findOneAndUpdate({'id': id}, {'message': message}, { upsert: true, new: true })
    return next();
  } catch(e) {
    return next(e);
  }
 }

module.exports = markerController;