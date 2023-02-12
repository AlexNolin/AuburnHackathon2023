import express from 'express';
import { getLocationData } from '../controllers/locationData.js';  
const router = express.Router();

router.get('/', getLocationData);

export default router;