import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import '@shared/infra/typeorm';
import '@shared/container';

import routes from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use('/api', routes);


const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
  console.log('Server listening');
});

export default app;