import { GobiParantha } from '../src/template/gobi-parantha';


describe('template design pattern', () => {

    it('should output template method', () => {
        let gobiParantha = new GobiParantha();
        gobiParantha.make();
        expect('hi').toEqual('hi');
    });

});