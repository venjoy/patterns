import { Service } from './service-interface';

export class BasicService implements Service {

    do() {
        return 'basic service';
    }

    cost() {
        return 15;
    }
}