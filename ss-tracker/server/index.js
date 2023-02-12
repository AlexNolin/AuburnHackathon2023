import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import locationRoutes from './routes/locations.js';

const app = express();


app.use('/locations', locationRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://eris-he:sLRQz4qnvvp3aFdN@cluster0.fzlfou5.mongodb.net/shark_data?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log('Server running on Port ${PORT}')
    }))
    .catch((error) => console.log(error.message));