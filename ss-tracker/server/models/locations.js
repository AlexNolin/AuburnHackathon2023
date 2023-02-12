import mongoose from "mongoose";

const locationsSchema = mongoose.Schema({
    sharkName: String,
    latitude: Float64Array,
    longitude: Float64Array,
    time: Date
});

const locations = mongoose.model('locations', locationsSchema);

export default locations;