import { Logger } from './logger';

export class FileLogger implements Logger {
    
    log(msg: string) {
        console.log('Logging to file : ' + msg);
    }

}