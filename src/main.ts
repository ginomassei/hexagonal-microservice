import './configs/load-env-vars';

import express from 'express';

import appRoutes from './app.routes';
import { config } from './configs/app.config';
import { connectDb } from './configs/dependencies';
import { corsMiddleware, logger } from './modules/shared/infrastructure/dependencies';

function startServer() {
  const app = express();

  app.use(corsMiddleware);
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.use(appRoutes)

  const { port } = config.server;

  app.listen(port, () => {
    logger.info(`App started on port: ${port}`);
    connectDb();
  });
}

startServer();
