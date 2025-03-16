import axios from 'axios';
import { WEATHER_API_KEY, WEATHER_HOST_URL } from '../../config.js';

export const weatherCallback = async (req, res) => {
  const { lat, lng } = req.body;

  try {
    const response = await axios.get(
      `${WEATHER_HOST_URL}/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    );

    if (response.status === 200) {
      const data = response.data;

      const convertKTCList = data.list.map((ls) => {
        const date = new Date(ls.dt_txt);
        date.setHours(date.getHours() + 9);

        const targetDate = date.toISOString().split('.')[0];

        const hour = targetDate.split('T')[1];
        const today = targetDate.split('T')[0];

        return { ...ls, dt_txt: `${today} ${hour}` };
      });
      return res.json({ list: convertKTCList });
    }
  } catch (e) {
    console.error(e);
  }
};
