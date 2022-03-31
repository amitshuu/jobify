import 'express-async-errors';
import morgan from 'morgan';
import express from 'express';
import dotenv from 'dotenv/config';

//DB
import connectDB from './db/connect.js';
//Middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';
//Routes
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'Welcome!' });
});
app.get('/', (req, res) => {
  res.json({ msg: 'Welcomee!' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', authenticateUser, jobRoutes);

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
