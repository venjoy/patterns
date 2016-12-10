export class HomeStatus {
    locked = true;
    lightsOff = true;
    alarmOn = true;
}

export interface SecurityChecker {
    check(status: HomeStatus): void;
}

export abstract class HomeSecurity {

    successor: SecurityChecker;

    succeedWith(successor: SecurityChecker) {
        this.successor = successor;
    }

    next(status: HomeStatus): void {
        if (this.successor) {
            this.successor.check(status);
        }
    }
}

export class LockSecurity extends HomeSecurity implements SecurityChecker {
    check(status: HomeStatus) {
        if (!status.locked) {
            console.log('alert door not locked exit now');
            process.exit();
            
        }
        this.next(status);
    }
}

export class LightSecurity extends HomeSecurity implements SecurityChecker {
    check(status: HomeStatus) {
        if (!status.lightsOff) {
            console.log('alert light not off exit now');
            process.exit();
        }
        this.next(status);
    }
}

export class AlarmSecurity extends HomeSecurity implements SecurityChecker {
    check(status: HomeStatus) {
        if (!status.alarmOn) {
            console.log('alert alarm not on exit now');
            process.exit();
        }
    }
}