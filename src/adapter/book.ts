import { BookInterface } from './book-interface';

export class Book implements BookInterface {
    turnPage() {
        console.log('turning book page');
    }
}