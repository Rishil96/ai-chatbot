import express from 'express';
import { config } from 'dotenv';
config();
const app = express();
// Add middleware to use json in our express application
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map