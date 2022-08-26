import express, {Application} from 'express';
import { routes } from './routes';
import cors from 'cors';

const app:Application = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());
// Configure routes
routes( app );

export default app;