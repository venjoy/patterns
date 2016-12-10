import * as l from '../src/chain-of-responsibility/home-example';

describe('chain of responsibility', ()=>{
    it('should send responsibility up the chain', () => {
        let status = new l.HomeStatus,
            lock = new l.LockSecurity,
            light = new l.LightSecurity,
            alarm = new l.AlarmSecurity;
        
        lock.succeedWith(light);
        light.succeedWith(alarm);

        lock.check(status);
    })
})