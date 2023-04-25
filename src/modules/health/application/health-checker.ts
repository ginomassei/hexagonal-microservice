import { ILogger } from '../../shared/domain/ILogger';
import { HealthStatus } from '../domain/health-status';

export class HealthChecker {
  constructor(private readonly logger: ILogger) {}

  public async execute(): Promise<HealthStatus> {
    this.logger.info('Health check executed');
    return Promise.resolve(new HealthStatus('OK', 'OK'));
  }
}
