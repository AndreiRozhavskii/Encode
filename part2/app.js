import express from 'express';
import intelxRoutes from './routes/intelxRoutes.js';

const app = express();

app.use(express.json()); 

app.use('/intelx', intelxRoutes); 

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
