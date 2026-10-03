import {suite, test} from '@testdeck/mocha';
import {equal} from 'assert';
import {Ten} from '../lib';

@suite
class TenTest {
    @test
    test(): void {
        equal(Ten.fromName('甲子').getIndex(), 0);
    }
}
