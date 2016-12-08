import { Parantha } from './parantha';

export class AaluParantha extends Parantha {

    makeStuffing():this {
        console.log('adding aalu');
        return this;
    }

}