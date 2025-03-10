import { WEATHER_API_KEY, WEATHER_HOST_URL } from '../../config.js';

export const weatherCallback = async (req, res) => {
  const { lat, lng } = req.body;

  console.log(lat, lng);

  try {
    const requset = await fetch(
      `${WEATHER_HOST_URL}//forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`
    );

    const response = await requset.json();
    console.log(response);

    return res.json({});
  } catch (e) {
    console.error(e);
  }
};
