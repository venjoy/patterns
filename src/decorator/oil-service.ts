import { Service } from './service-interface';

export class OilService implements Service {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    do() {
        return this.service.do() + ' ' + ' oiling';
    }

    cost() {
        return this.service.cost() + 30;
    }

}