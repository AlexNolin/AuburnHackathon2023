import mongoose from "mongoose";

const locationsSchema = mongoose.Schema({
    name: String,
    latitude: String,
    longitude: String,
    datetime: Date
});

const locations = mongoose.model('locations', locationsSchema, "OprahData");

export default locations;