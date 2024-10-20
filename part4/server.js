import express from 'express';
import dotenv from 'dotenv';
import zeroTrustScoreRoutes from './src/routes/zeroTrustScoreRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(zeroTrustScoreRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
