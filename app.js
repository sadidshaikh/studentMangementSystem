import express from 'express';
import { join } from 'path';
import connectDB from './db/connection.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// DataBase Connection
connectDB(DATABASE_URL);

// Set JSON parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Static Files
app.use('/student', express.static(join(process.cwd(), 'public')));
app.use('/student/edit', express.static(join(process.cwd(), 'public')));

// Set Template Engine
app.set('view engine', 'ejs');

// Load Routes
app.use('/student', web);

// Server Connection
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
