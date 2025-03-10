import express from 'express';
import weatherRouter from './weather/weather.js';
const apiRouter = express.Router();

apiRouter.use('/weather', weatherRouter);

export default apiRouter;
