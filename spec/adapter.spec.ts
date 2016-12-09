import { Book } from '../src/adapter/book';
import { eBookReaderAdapter } from '../src/adapter/eBookReaderAdapter';
import { Client } from '../src/adapter/client';
import { eBookReader } from '../src/adapter/eBookReader';

describe('adapter', () => {
    it('should act as adapter', () => {
        (new Client).read(new eBookReaderAdapter(new eBookReader));
    })
})