if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { notesRouter } from './routes/notes';

const app: Application = express();

app.use(express.json());

// Cors
app.use(cors());

// Routes
app.use('/notes', notesRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});