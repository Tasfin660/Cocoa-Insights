import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import connectDB from '../config/db.js';
import chocolateRouter from './routes/chocolateRoute.js';
import premiumRouter from './routes/premiumRoute.js';

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/chocolates', chocolateRouter);
app.use('/api/v1/premiums', premiumRouter);
app.get('/', (_, res) => {
  res.send('Welcome to the Cocoa Insights API');
});

export default app;
