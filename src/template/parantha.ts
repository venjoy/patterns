export abstract class Parantha {

    kneadDough():this {
        console.log('kneading dough');
        return this;
    }

    stuff():this {
        console.log('stuffing Parantha');
        return this;
    }

    fry():this {
        console.log('frying');
        return this;
    }

    serve():this {
        console.log('serveing');
        return this;
    }

    make():void {
        this.kneadDough().makeStuffing().stuff().fry().serve();
    }

    abstract makeStuffing():this;
}