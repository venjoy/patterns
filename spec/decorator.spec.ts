import { BasicService } from '../src/decorator/basic-service';
import { OilService } from '../src/decorator/oil-service';

describe('decorator', () => {

    it('should display correct cost', () => {

        let oilService = new OilService(new BasicService);

        console.log(oilService.do());
        expect(oilService.cost()).toEqual(45);

    });

});