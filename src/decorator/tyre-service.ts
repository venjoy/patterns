import { Service } from './service-interface';

export class TyreService implements Service {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    do() {
        return this.service.do() + ' ' + ' tyring';
    }

    cost() {
        return this.service.cost() + 40;
    }

}