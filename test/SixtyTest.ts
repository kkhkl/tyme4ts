import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Sixty} from '../lib';

@suite
class SixtyTest {
    @test
    test(): void {
        equal(Sixty.fromName('上元').getIndex(), 0);
    }
}
