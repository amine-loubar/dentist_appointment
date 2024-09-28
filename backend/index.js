import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import { adminRouter } from './routes/adminRouter.js';
import { appointmentRouter } from "./routes/appointmentRouter.js"

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

// Routes
app.use('/admin', adminRouter);
app.use('/appointment', appointmentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log('App listening on: http://localhost:' + PORT);
});
