
const Marker = require('../model/markerModel')

const markerController = {};

markerController.getMarkers = async (req, res, next) => {
  try {
    const markers = await Marker.find({})
    res.locals.markers = [...markers];
    return next();
  } catch (e) {
    return next(err);
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

module.exports = markerController;