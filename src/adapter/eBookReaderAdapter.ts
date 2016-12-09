import { BookInterface } from './book-interface';
import { eBookReader } from './eBookReader';

export class eBookReaderAdapter implements BookInterface {
    eBookReader: eBookReader;

    constructor(eBookReader: eBookReader) {
        this.eBookReader = eBookReader;
    }

    turnPage() {
        this.eBookReader.clickNext();
    }
}