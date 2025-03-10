import app from './app.js';
import { PORT } from './config.js';

app.listen(8080, () => {
  console.log(`Express Running on ${PORT} PORT`);
});
