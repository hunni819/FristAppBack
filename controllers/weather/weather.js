import express from 'express';
import { weatherCallback } from '../../routers/weather/weather.js';
const weatherRouter = express.Router();

weatherRouter.post('/', weatherCallback);

export default weatherRouter;
