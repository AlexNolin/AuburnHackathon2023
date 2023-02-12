import mongoose from "mongoose";

const locationsSchema = mongoose.Schema({
    sharkName: String,
    latitude: Float,
    longitude: Float,
    time: Date
});

const locations = mongoose.model('locations', locationsSchema);

export default locations;