import { Logger } from './logger';

export class DbLogger implements Logger {

    log(msg: string) {
        console.log('logging to database : ' + msg);
    }

}