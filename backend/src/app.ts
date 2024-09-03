import express from 'express';
import { config } from 'dotenv';

const app = express();

// Add middleware to use json in our express application
app.use(express.json());

export default app;