import express from 'express';
import dotenv from 'dotenv/config';
const app = express();
//DB
import connectDB from './db/connect.js';
//Middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
//Routes
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is up on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
