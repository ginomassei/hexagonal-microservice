import { ILogger } from '../modules/shared/domain/ILogger';

export class DatabaseConfig {
  static async connectDatabase(logger: ILogger) {
    // dbStartConnection(false, 'test', 'localhost', '', false, Provider.None)
    //   .then((res) => {
    //    logger.info(res);
    //   }).catch((err) => {
    //     logger.info(err);
    //   });
  }
}
