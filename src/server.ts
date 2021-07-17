import express from 'express';
import { controller } from './routes';

const app = express();
app.use(express.json());

app.post('/', controller);

app.listen(3333, () => console.log('🚀 Server is running at http://localhost:3333'));
