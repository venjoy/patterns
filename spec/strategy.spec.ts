import { App } from '../src/strategy/app';
import { DbLogger } from '../src/strategy/db-logger';

describe('strategy', ()=>{
    it('should log to database', () => {
        let app = new App();
        app.log('app', new DbLogger);
    });
});