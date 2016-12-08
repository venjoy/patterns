import { Parantha } from './parantha';

export class GobiParantha extends Parantha {

    makeStuffing():this {
        console.log('adding gobi');
        return this;
    }

}