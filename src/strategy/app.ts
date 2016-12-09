import { Logger } from './logger';

export class App {

    log(msg: string, logger: Logger) {
        logger.log(msg);
    }

}