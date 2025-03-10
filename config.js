import dotenv from 'dotenv';
dotenv.config();

const FRONT_ENTRY_POINT = process.env.FRONT_ENTRY_POINT;
const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export { PORT, WEATHER_API_KEY, FRONT_ENTRY_POINT };
