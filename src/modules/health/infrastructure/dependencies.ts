import { logger } from '../../shared/infrastructure/dependencies';
import { HealthChecker } from '../application/health-checker';
import { HealthGetController } from './rest-api/healthGetController';

const healthChecker = new HealthChecker(logger);

export const healthGetController = new HealthGetController(healthChecker);
