import express from 'express';

import { datasetsRouter } from './modules/datasets/infrastructure/rest/datasets.router';
import { healthRouter } from './modules/health/infrastructure/rest-api/health.router';
import { userRouter } from './modules/users/infrastructure/rest/user.router';

const router = express.Router();

router.use('/users', userRouter);
router.use('/health', healthRouter);
router.use('/datasets', datasetsRouter);

export default router;
