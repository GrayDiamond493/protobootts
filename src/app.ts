import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
    console.log(`[server]: Server dev is running on http://0.0.0.0:${port}`);
});