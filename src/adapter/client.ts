import { BookInterface } from './book-interface';

export class Client {
    read(book: BookInterface) {
        book.turnPage();
    }
}