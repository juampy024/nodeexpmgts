import express, { urlencoded } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { router } from 'dataAccess/routes';

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(router);
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
