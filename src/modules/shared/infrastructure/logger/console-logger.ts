import { ILogger, Message } from '../../domain/ILogger';

export class ConsoleLogger implements ILogger {
  info(message: Message): void {
    console.log(message);
  }

  error(message: Message): void {
    console.error(message);
  }

  warn(message: Message): void {
    console.warn(message);
  }
}
