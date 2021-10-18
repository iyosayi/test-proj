import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import path from 'path';
import '@shared/infra/typeorm';
import '@shared/container';


import routes from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use('/api', routes);

const build = path.resolve('..', 'frontend', 'dist')
const PORT = process.env.PORT || 3005

if (process.env.NODE_ENV === "production") {
  app.use(express.static(build));

  app.get("*", (req, res) => {
    res.sendFile(path.join(build, "index.html"));
  });
}

export default app;