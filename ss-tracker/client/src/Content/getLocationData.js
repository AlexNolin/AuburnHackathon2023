import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import locations from "../../../server/models/locations";
import mongoose from "mongoose";


export const sharkLat = async (req, res) => {
    try
    {
        const sharkLatitudes = await locations.find({sharkName: 'Oprah'});
        console.log(sharkLatitudes);

        res.status(200).json(sharkLatitudes);
    }catch (error) {
        res.status(404).json({ message: error.message });
    }
}
