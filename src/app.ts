import express, {Application} from 'express';
import { routes } from './routes';

const app:Application = express();

// Configure routes
routes( app );

export default app;