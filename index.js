import express from 'express';
import Connection from './database/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});

Connection();
